import fs from "fs";
import path from "path";
import { RACES as CORE, VARIANTS } from "./data/races.js";
import { RACES2 } from "./data/races2.js";
import { RACES3 } from "./data/races3.js";
const RACES = { ...CORE, ...RACES2, ...RACES3 };
import { generateSet } from "./lib/generate.js";
import { page, SITE } from "./lib/template.js";
import { EDITORIAL } from "./data/editorial.js";
import { GENRE_INTROS, ARTICLES } from "./data/articles.js";

function hash(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}

// Data-derived anatomy: factual statements about how this race's names are built,
// computed from the actual phonotactic tables — genuinely different per race.
const art = w => /^[aeiou]/i.test(w) ? "an" : "a";
function anatomy(key, R) {
  const on = R.onset.slice(0, 8).join(", ");
  const male = R.gendered ? R.male.map(x => "-" + x.replace(/^-/, "")).slice(0, 5).join(", ") : null;
  const fem  = R.gendered ? R.female.map(x => "-" + x.replace(/^-/, "")).slice(0, 5).join(", ") : null;
  const codas = R.coda.slice(0, 6).map(x => "-" + x.replace(/^-/, "")).join(", ");
  const syl = [...new Set(R.syl)].join("–");
  return `<h2>Anatomy of ${art(R.label)} ${R.label.toLowerCase()} name</h2>
<p>This generator assembles names the way the tradition does. Typical openings include <strong>${on}</strong>; names run <strong>${syl} syllables</strong> and resolve on endings such as <strong>${codas}</strong>.${R.gendered ? ` Gender lives mostly in the ending: feminine forms favour <strong>${fem}</strong>, masculine forms <strong>${male}</strong>, and neutral names simply pick from the wider pool.` : ` The tradition doesn't gender-code its names — any ending suits any character.`}</p>`;
}
function exampleTable(key, R) {
  const ns = generateSet(key, "neutral", key + "showcase", 8);
  return `<h3>Examples from this generator</h3><table><thead><tr><th>Name</th><th>Reads as</th></tr></thead><tbody>${
    ns.map((n, i) => {
      const tone = ["a classic, load-bearing form", "an everyday name in this register",
        "a formal or elder variant", "a short, familiar form", "a name with a martial edge",
        "a softer, lyrical variant", "a frontier or outsider form", "a name fit for a leader"][i % 8];
      return `<tr><td><strong>${n}</strong></td><td>${tone}</td></tr>`; }).join("")}</tbody></table>`;
}
function letterAnalysis(key, R, L, pool) {
  const U = L.toUpperCase();
  const stems = [...new Set(pool.map(n => n.slice(0, 3)))];
  const ends = {};
  for (const n of pool) { const e = n.slice(-2).toLowerCase(); ends[e] = (ends[e] || 0) + 1; }
  const topEnds = Object.entries(ends).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([e]) => "-" + e);
  const lens = pool.map(n => n.length);
  const shortest = pool.reduce((a, b) => a.length <= b.length ? a : b);
  const longest = pool.reduce((a, b) => a.length >= b.length ? a : b);
  const openings = (R.onset || []).filter(o => o[0].toLowerCase() === L).slice(0, 4);
  const openLine = openings.length
    ? `In this tradition, ${U}-names grow from the ${openings.map(o => `<strong>${o}-</strong>`).join(", ")} opening${openings.length > 1 ? "s" : ""}`
    : `${U} isn't a native opening sound in this tradition, so these names reach it through joined syllables`;
  const variants = [
    `${openLine}, which is why the ${pool.length} names on this page cluster around ${stems.length} distinct stems. Endings here lean ${topEnds.join(", ")}, and lengths run from ${Math.min(...lens)} letters (<strong>${shortest}</strong>) to ${Math.max(...lens)} (<strong>${longest}</strong>).`,
    `${openLine}. Across the ${pool.length} names listed, ${stems.length} different stems appear, most resolving on ${topEnds.join(", ")} — the culture's usual codas. <strong>${shortest}</strong> is the shortest form here; <strong>${longest}</strong> the most elaborate.`,
    `${openLine} — the source of the ${stems.length} stems behind these ${pool.length} names. The commonest endings on this page are ${topEnds.join(", ")}, with everything from compact <strong>${shortest}</strong> to ceremonial-length <strong>${longest}</strong>.`,
  ];
  const v = variants[hash(key + L) % variants.length];
  return `${v} If none of these lands, the generator above will forge fresh ${U}-names on demand, all following the same rules — and the <a href="/${key.replace(/_/g, "-")}-name-generator/">main ${R.label.toLowerCase()} generator</a> documents the full tradition: its history, anatomy and usage at the table.`;
}

function genderNotes(key, R, g) {
  const fem = R.gendered ? R.female.map(x => "-" + x.replace(/^-/, "")).join(", ") : "";
  const male = R.gendered ? R.male.map(x => "-" + x.replace(/^-/, "")).join(", ") : "";
  if (!R.gendered) {
    return `The ${R.label.toLowerCase()} tradition doesn't gender-code its names at all — identity in this register comes from deeds, sounds or images rather than a masculine or feminine ending. That makes every generated name below usable for any character, and it means the interesting choice is tone rather than gender: pick the name whose sound fits the character you're building.`;
  }
  if (g === "female") {
    return `In this tradition the feminine signal lives at the end of the name: the endings ${fem} mark a name as female, while the opening syllables stay shared across the whole culture. That's why a feminine ${R.label.toLowerCase()} name keeps the same recognisable front — the sounds listed on the main generator page — and resolves differently. Swap the ending of almost any masculine form for one of these and the name changes register completely.`;
  }
  if (g === "male") {
    return `Masculine ${R.label.toLowerCase()} names share their openings with the rest of the culture and declare themselves in the final syllable: ${male} are the traditional masculine endings. The result is that male names in this register tend to close ${male.includes("-o") || male.includes("-a") ? "on an open sound" : "hard, on a consonant"}, which gives them their characteristic weight when spoken aloud.`;
  }
  return `Neutral ${R.label.toLowerCase()} names sidestep the tradition's gendered endings (feminine ${fem}; masculine ${male}) and resolve on the culture's shared codas instead. In practice that produces names that read equally well on any character — useful for androgynous characters, and equally for GMs who want a name before they've decided anything else about an NPC.`;
}

function editorialBlock(key, R) {
  const ed = EDITORIAL[key];
  if (!ed) return "";
  return `<section class="prose"><h2>Where ${R.label.toLowerCase()} names come from</h2><p>${ed.history}</p>
<h2>How to build a good one</h2><p>${ed.craft}</p>
<h2>At the table</h2><p>${ed.dm}</p></section>`;
}

const OUT = "dist";
const GENDERS = ["male", "female", "neutral"];
const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");
const urls = [];

fs.rmSync(OUT, { recursive: true, force: true });
const write = (route, html) => {
  const dir = path.join(OUT, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  urls.push(route.endsWith("/") ? route : route + "/");
};
const slug = k => k.replace(/_/g, "-");
const nameList = (names, cls = "names") =>
  `<ul class="${cls}">${names.map(n => `<li>${n}</li>`).join("")}</ul>`;

// ---- generator widget: pre-rendered names for Google, re-roll button for humans ----
function widget(raceKey, gender, seed, letter = null) {
  const names = letter
    ? generateSet(raceKey, gender, seed, 400).filter(n => n[0].toLowerCase() === letter).slice(0, 18)
    : generateSet(raceKey, gender, seed, 24);
  return `<section class="gen card" data-race="${raceKey}" data-gender="${gender}"${letter ? ` data-letter="${letter}"` : ""}>
  <div class="controls">
    <button class="reroll" type="button"><span class="die">\ud83c\udfb2</span> Generate new names</button>
    <label class="count-wrap">Count
      <select class="count"><option>12</option><option selected>24</option><option>48</option><option>100</option></select>
    </label>
  </div>
  <ul class="names">${names.map(n => `<li>${n}</li>`).join("")}</ul>
  <p class="hint">Tap a name to copy \u00b7 tap \u2606 to save \u00b7 <span class="forged"><span class="forged-n">0</span> names forged</span></p>
</section>`;
}

function related(raceKey) {
  const mine = new Set(RACES[raceKey]?.genre || []);
  const others = Object.entries(RACES).filter(([k]) => k !== raceKey)
    .sort((a, b) => {
      const ov = ([, R]) => (R.genre || []).filter(g => mine.has(g)).length;
      return ov(b) - ov(a);
    }).slice(0, 6);
  return `<section class="related"><h2>More name forges</h2><ul class="cards">
  ${others.map(([k, R]) => `<li><a href="/${slug(k)}-name-generator/"><strong>${R.label}</strong><span>${R.seeds.slice(0, 3).join(", ")}</span></a></li>`).join("")}
  </ul></section>`;
}

// Which letter pages can each race actually support? Computed with the same
// generation + acceptance rules the writer uses, so navigation can never link
// to a page that was pruned (this previously produced 5,075 dead internal links).
function letterPool(raceKey, L) {
  return generateSet(raceKey, "neutral", raceKey + L + "seed", 400)
    .filter(n => n[0].toLowerCase() === L).slice(0, 30);
}
function letterPageExists(pool) {
  if (pool.length < 6) return false;
  return new Set(pool.map(n => n.slice(0, 4).toLowerCase())).size >= 2;
}
const VALID_LETTERS = Object.fromEntries(Object.keys(RACES).map(k =>
  [k, LETTERS.filter(L => letterPageExists(letterPool(k, L)))]));

function letterLinks(raceKey) {
  if (!(VALID_LETTERS[raceKey] || []).length) return "";
  return `<section class="related"><h2>${RACES[raceKey].label} names by first letter</h2><ul class="links letters">
  ${(VALID_LETTERS[raceKey] || []).map(l => `<li><a href="/${slug(raceKey)}-names-starting-with-${l}/">${l.toUpperCase()}</a></li>`).join("")}
  </ul></section>`;
}

// ---------------------------------------------------------------- race main pages
for (const [key, R] of Object.entries(RACES)) {
  const s = slug(key);
  const crumbs = [{ href: "/", label: "Home" }, { label: `${R.label} name generator` }];
  write(`/${s}-name-generator`, page({
    title: `${R.label} Name Generator — 1000s of ${R.label} Names | ${SITE.name}`,
    desc: `Free ${R.label.toLowerCase()} name generator. Instantly create authentic ${R.label.toLowerCase()} names for D&D, fantasy writing and RPG characters. Male, female and gender-neutral.`,
    canonical: `/${s}-name-generator/`,
    h1: `${R.label} Name Generator`,
    crumbs,
    schema: { "@context":"https://schema.org","@type":"WebApplication",
      name:`${R.label} Name Generator`, applicationCategory:"GameApplication",
      operatingSystem:"Any", offers:{"@type":"Offer",price:"0",priceCurrency:"USD"} },
    body: `<p class="lede">Generate authentic ${R.label.toLowerCase()} names in one click. Every name is built from the tradition's real phonetics — documented below — not random letters.</p>
${widget(key, "neutral", key)}
<section class="related"><ul class="links filter-chips">
${GENDERS.map(g => `<li><a href="/${s}-name-generator/${g}/">${g[0].toUpperCase()+g.slice(1)}</a></li>`).join("")}
</ul></section>
<section class="prose"><h2>How ${R.label.toLowerCase()} names work</h2><p>${R.lore}</p>
${anatomy(key, R)}
${exampleTable(key, R)}
<h3>Canonical examples</h3><p>${R.seeds.join(" · ")}</p></section>
${editorialBlock(key, R)}
${related(key)}
${letterLinks(key)}`
  }));

  // ------------------------------------------------------------------ per gender
  for (const g of GENDERS) {
    const G = g[0].toUpperCase() + g.slice(1);
    write(`/${s}-name-generator/${g}`, page({
      title: `${G} ${R.label} Names — ${R.label} Name Generator | ${SITE.name}`,
      desc: `Free generator for ${g} ${R.label.toLowerCase()} names. Perfect for D&D characters, fantasy novels and RPG campaigns. Fresh names every click.`,
      canonical: `/${s}-name-generator/${g}/`,
      h1: `${G} ${R.label} Name Generator`,
      crumbs: [{href:"/",label:"Home"},{href:`/${s}-name-generator/`,label:`${R.label} names`},{label:G}],
      body: `<p class="lede">${G.toLowerCase() === "neutral" ? "Gender-neutral" : G} ${R.label.toLowerCase()} names, generated instantly — with notes on what marks a ${R.label.toLowerCase()} name as ${g} in this tradition.</p>
${widget(key, g, key + g)}
<section class="prose"><h2>What makes ${art(R.label)} ${R.label.toLowerCase()} name ${g}</h2>
<p>${genderNotes(key, R, g)}</p>
<h3>Sample ${g} names</h3><p>${generateSet(key, g, key + g + "samples", 10).join(" · ")}</p>
<p>Every one of these follows the same construction — see the <a href="/${s}-name-generator/">main ${R.label} generator</a> for the full anatomy of the tradition, its history, and table-ready usage notes.</p></section>
${letterLinks(key)}
${related(key)}`
    }));
  }

  // ---------------------------------------------------- per starting letter (x26)
  for (const L of VALID_LETTERS[key]) {
    const pool = letterPool(key, L);
    write(`/${s}-names-starting-with-${L}`, page({
      title: `${R.label} Names Starting With ${L.toUpperCase()} | ${SITE.name}`,
      desc: `${pool.length} ${R.label.toLowerCase()} names beginning with the letter ${L.toUpperCase()}, plus a free generator for more.`,
      canonical: `/${s}-names-starting-with-${L}/`,
      h1: `${R.label} Names Starting With ${L.toUpperCase()}`,
      crumbs: [{href:"/",label:"Home"},{href:`/${s}-name-generator/`,label:`${R.label} names`},{label:L.toUpperCase()}],
      body: `<p class="lede">${R.label} names beginning with <strong>${L.toUpperCase()}</strong> — tap to copy, or forge a fresh batch.</p>
${widget(key, "neutral", key + L + "seed", L)}
<section class="prose"><h2>Reading the ${L.toUpperCase()}-names</h2><p>${letterAnalysis(key, R, L, pool)}</p></section>
<section class="related"><h2>Need something else?</h2><ul class="links">
<li><a href="/${s}-name-generator/">Full ${R.label.toLowerCase()} name generator</a></li>
${GENDERS.map(g=>`<li><a href="/${s}-name-generator/${g}/">${g} ${R.label.toLowerCase()} names</a></li>`).join("")}
</ul></section>
${letterLinks(key)}`
    }));
  }
}

// --------------------------------------------------------------------- genre hubs
// Per-genre example overrides so a hub's cards speak that fandom's register.
const GENRE_SEEDS = {
  skyrim: {
    elf: ["Faendal", "Ancano", "Elenwen"],
    dwarf: ["Kagrenac", "Dumac", "Yagrum"],
    orc: ["Ghorbash", "Borgakh", "Yamarz"],
    human_nordic: ["Ulfric", "Ralof", "Lydia"],
  },
};
const GENRES = { dnd:"D&D", fantasy:"Fantasy", lotr:"Lord of the Rings", skyrim:"Skyrim", wow:"World of Warcraft", viking:"Viking", historical:"Historical", druid:"Druid" };
for (const [gk, glabel] of Object.entries(GENRES)) {
  const members = Object.entries(RACES).filter(([, R]) => (R.genre||[]).includes(gk));
  if (!members.length) continue;
  write(`/${gk}-name-generator`, page({
    title: `${glabel} Name Generator — Every Race | ${SITE.name}`,
    desc: `Free ${glabel} name generators for every race. Create character names for your campaign in seconds.`,
    canonical: `/${gk}-name-generator/`,
    h1: `${glabel} Name Generator`,
    crumbs: [{href:"/",label:"Home"},{label:glabel}],
    body: `<p class="lede">${GENRE_INTROS[gk] || `Pick a race to generate ${glabel} names.`}</p>
<ul class="cards">${members.map(([k,R])=>{
      const ex = (GENRE_SEEDS[gk] || {})[k] || R.seeds.slice(0,3);
      return `<li><a href="/${slug(k)}-name-generator/"><strong>${R.label}</strong><span>${ex.slice(0,3).join(", ")}</span></a></li>`;
    }).join("")}</ul>
<section class="prose"><h2>How the registers differ</h2>
${members.map(([k,R])=>`<p><strong><a href="/${slug(k)}-name-generator/">${R.label}</a>:</strong> ${R.lore.replace(/<[^>]+>/g,"").split(". ").slice(0,2).join(". ")}.</p>`).join("")}
</section>
<section class="related"><h2>Naming guides</h2><ul class="links">
${ARTICLES.map(a=>`<li><a href="/guides/${a.slug}/">${a.title.split(":")[0].split("(")[0].trim()}</a></li>`).join("")}
</ul></section>`
  }));
}

// ---------------------------------------------------------------- guides
for (const a of ARTICLES) {
  write(`/guides/${a.slug}`, page({
    title: `${a.title} | ${SITE.name}`,
    desc: a.desc,
    canonical: `/guides/${a.slug}/`,
    h1: a.title,
    crumbs: [{ href: "/", label: "Home" }, { href: "/guides/", label: "Guides" }, { label: a.title.split(":")[0].split("(")[0].trim() }],
    schema: { "@context": "https://schema.org", "@type": "Article", headline: a.title,
      description: a.desc, author: { "@type": "Organization", name: SITE.name } },
    body: `<section class="prose">${a.body}</section>
<section class="related"><h2>More guides</h2><ul class="links">
${ARTICLES.filter(x => x.slug !== a.slug).map(x => `<li><a href="/guides/${x.slug}/">${x.title.split(":")[0].split("(")[0].trim()}</a></li>`).join("")}
</ul></section>
<section class="related"><h2>Put it to work</h2><ul class="links">
<li><a href="/elf-name-generator/">Elf names</a></li><li><a href="/dwarf-name-generator/">Dwarf names</a></li>
<li><a href="/orc-name-generator/">Orc names</a></li><li><a href="/dnd-name-generator/">All D&D races</a></li>
</ul></section>`,
  }));
}
write("/guides", page({
  title: `Character Naming Guides — Conventions, Craft & Method | ${SITE.name}`,
  desc: `Practical guides to fantasy naming: how to name a D&D character, elvish and orcish conventions explained, and how to use name generators well.`,
  canonical: "/guides/", h1: "Character Naming Guides",
  crumbs: [{ href: "/", label: "Home" }, { label: "Guides" }],
  body: `<p class="lede">The generators on this site produce the raw material; these guides cover the craft — where each naming tradition comes from, what its rules actually are, and how to turn generated candidates into names your table will still love at level 12.</p>
<ul class="cards">${ARTICLES.map(a => `<li><a href="/guides/${a.slug}/"><strong>${a.title.split(":")[0].split("(")[0].trim()}</strong><span>${a.desc.split(" — ")[0].split(". ")[0]}</span></a></li>`).join("")}</ul>
<section class="prose"><h2>Why conventions matter</h2>
<p>Random syllables can sound fantasy-ish, but real naming traditions have internal logic — elvish flows because Tolkien built it from meaningful roots, dwarf names bite because they descend from a Norse catalogue of dwarves, orc names growl because their register was engineered to. Every generator here documents its tradition's rules on the page, so you can take the generated name or use the rules to build your own. These guides go deeper on the most-asked questions.</p></section>`,
}));

// ------------------------------------------------------------------- legal + home
const LEGAL = {
  about: ["About", `<p>${SITE.name} is a free suite of fantasy name generators for tabletop players, game masters and fiction writers. It exists because most name generators shuffle syllables at random — and randomly shuffled syllables don't sound like a culture. Every generator here is built on the actual phonetic rules of its naming tradition: the openings, syllable structures and endings that make an elvish name sound elvish and a dwarven name sound like it was shouted across a forge.</p>
<h2>How the generators work</h2>
<p>Each race has a documented phonotactic profile — which sounds can begin a name, how syllables join, and which endings mark gender where the tradition uses gendered endings at all. Names are assembled from those rules and then filtered for pronounceability, so what reaches the page reads as language rather than noise. Alongside every tool you'll find the tradition's history (most trace to a real source: Tolkien's constructed languages, the Old Norse Dvergatal, Shakespeare's fairies), an anatomy of the name structure, and notes on using the names at an actual table.</p>
<h2>Using the names</h2>
<p>Everything generated here is free to use in any project — home campaigns, streamed games, self-published fiction, commercial work — with no attribution required. Tap a name to copy it; star names to keep them in your browser-local name bank between sessions. Nothing you generate or save ever leaves your device.</p>
<h2>Who makes this</h2>
<p>${SITE.name} is an independent project, supported by advertising rather than signups or subscriptions, and it grows on a schedule: new race generators are added regularly, and the <a href="/guides/">guides section</a> covers the craft of naming itself. If a generated name doesn't fit its tradition, tell us — the phonetic rules get tuned based on exactly that feedback.</p>`],
  contact: ["Contact", `<p>Questions, corrections, or a race you'd like added? Email <strong>hello@${SITE.domain}</strong>.</p>
<h2>Reporting a bad name</h2>
<p>If a generator produces something unpronounceable, out of register, or accidentally a real word it shouldn't be, include the race, the name itself, and roughly when you generated it. The generators are rule-based, so one bad output usually points at a fixable rule — most reports are resolved with a tuning change within a day or two.</p>
<h2>Requesting a generator</h2>
<p>New races and cultures are added on a regular schedule, and requests genuinely shape the queue. The most useful requests name the tradition and a couple of example names in the register you're imagining — that's enough to build a phonetic profile from.</p>
<h2>Everything else</h2>
<p>Advertising questions, licensing questions (short answer: the names are free to use, see <a href="/terms/">Terms</a>), accessibility problems and broken links all go to the same address. Short messages get answered fastest.</p>`],
  privacy: ["Privacy Policy", `<p>This policy covers what ${SITE.name} does — and deliberately doesn't do — with information when you use the site.</p>
<h2>What stays on your device</h2>
<p>Names you generate, and names you star, are stored only in your browser's local storage. They are never transmitted to us, never linked to you, and disappear if you clear your browser data. There are no accounts, no email capture, and no forms that collect personal information anywhere on the site.</p>
<h2>Cookies and advertising</h2>
<p>This site is supported by advertising. Google, as a third-party vendor, uses cookies to serve ads on this site; Google's advertising cookies enable it and its partners to serve ads based on your visit to this site and other sites on the internet. You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" rel="nofollow">Google Ads Settings</a>, or opt out of a range of third-party vendor cookies at <a href="https://www.aboutads.info" rel="nofollow">aboutads.info</a>.</p>
<h2>Analytics</h2>
<p>We may use aggregate, non-identifying traffic analytics (page views, referrers, country-level location) to understand which generators are used. This data is not linked to individuals.</p>
<h2>Your rights</h2>
<p>Because we hold no personal data about you, there is nothing for us to export or delete under GDPR, CCPA or similar frameworks — the advertising cookies described above are controlled through the Google opt-out links rather than through us. Questions: hello@${SITE.domain}.</p>`],
  terms: ["Terms of Use", `<p>By using ${SITE.name} you agree to these terms. The short version: the generators are free, the names are yours to use, and the referenced games belong to their owners.</p>
<h2>Your licence to the names</h2>
<p>Names generated on this site may be used in any project, personal or commercial — campaigns, streams, novels, games — without attribution or payment. Because names are produced algorithmically from phonetic rules, we make no guarantee that any given name is unique, unused, or free of trademark in your jurisdiction; for commercial use of a specific name, check it the way you would any name.</p>
<h2>Acceptable use</h2>
<p>You're welcome to link to any page. Wholesale scraping of the site, republishing its editorial content as your own, or embedding it in a way that misrepresents its origin is not permitted.</p>
<h2>Trademarks</h2>
<p>Dungeons &amp; Dragons, Skyrim, World of Warcraft, The Lord of the Rings and other titles referenced are trademarks of their respective owners. This site is not affiliated with, endorsed by or sponsored by any of them; references are descriptive, of the kind any guide to those games' naming conventions would make.</p>
<h2>No warranty</h2>
<p>The service is provided as-is, without warranty of any kind. Content on this site is entertainment and worldbuilding reference, and the editorial describes fictional naming traditions as published in their source material.</p>`],
};
for (const [k, [t, b]] of Object.entries(LEGAL)) {
  write(`/${k}`, page({ title:`${t} | ${SITE.name}`, desc:`${t} for ${SITE.name}.`,
    canonical:`/${k}/`, h1:t, crumbs:[{href:"/",label:"Home"},{label:t}], body:`<section class="prose">${b}</section>` }));
}

write("", page({
  title: `${SITE.name} — Fantasy & RPG Name Generators`,
  desc: `Free fantasy name generators for D&D, Skyrim, LOTR and more. Elf, dwarf, orc, dragonborn, tiefling names and dozens more — built on real phonetics.`,
  canonical: "/", h1: "Fantasy & RPG Name Generators",
  body: `<p class="lede">Free name generators built on the real phonetics of each naming tradition — with the conventions documented, so you can use a generated name or learn the rules and build your own. No signup, no limits.</p>
<ul class="cards">${Object.entries(RACES).map(([k,R])=>`<li><a href="/${slug(k)}-name-generator/"><strong>${R.label}</strong><span>${R.seeds.slice(0,3).join(", ")}</span></a></li>`).join("")}</ul>
<section class="related"><h2>By setting</h2><ul class="links">${Object.entries(GENRES).map(([g,l])=>`<li><a href="/${g}-name-generator/">${l} names</a></li>`).join("")}</ul></section>
<section class="prose"><h2>Not random letters — real conventions</h2>
<p>Every fantasy race you can name has a naming tradition behind it, usually with a traceable source: elf names descend from Tolkien's constructed languages, dwarf names from the Old Norse catalogue that gave us Thorin and Balin, orc names from a language deliberately engineered to sound harsh, tabaxi names from Mesoamerican-style image-naming. Each generator on this site is built from its tradition's actual phonetic rules — the openings, syllable counts and endings that make an elvish name read elvish — and each page documents those rules alongside the tool.</p>
<h2>Built for players, GMs and writers</h2>
<p>Tap any generated name to copy it, star the ones worth keeping (they persist in your browser — your private name bank for the next session), and use the letter pages when you need a name starting with a specific sound. Game masters naming a dozen NPCs before Thursday and novelists naming a culture's worth of characters both get the same thing: names that sound like they belong together, because they follow the same rules.</p></section>
<section class="related"><h2>Naming guides</h2><ul class="links">${ARTICLES.map(a=>`<li><a href="/guides/${a.slug}/">${a.title.split(":")[0].split("(")[0].trim()}</a></li>`).join("")}</ul></section>`
}));

// ------------------------------------------------------------- sitemap + robots
const chunks = [];
for (let i = 0; i < urls.length; i += 45000) chunks.push(urls.slice(i, i + 45000));
chunks.forEach((c, i) => fs.writeFileSync(path.join(OUT, `sitemap-${i}.xml`),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
    c.map(u => `<url><loc>https://${SITE.domain}${u}</loc></url>`).join("")}</urlset>`));
fs.writeFileSync(path.join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
    chunks.map((_, i) => `<sitemap><loc>https://${SITE.domain}/sitemap-${i}.xml</loc></sitemap>`).join("")}</sitemapindex>`);
fs.writeFileSync(path.join(OUT, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: https://${SITE.domain}/sitemap.xml\n`);
for (const f of fs.readdirSync("public")) fs.copyFileSync(path.join("public", f), path.join(OUT, f));

console.log(`built ${urls.length} pages -> ${OUT}/`);

// ---- client bundle: same phonotactics as the build, so re-rolls match the pages ----
const clientJs = `
const RACES=${JSON.stringify(Object.fromEntries(Object.entries(RACES).map(([k,v])=>[k,
  {onset:v.onset,mid:v.mid,coda:v.coda,syl:v.syl,gendered:!!v.gendered,female:v.female||[],male:v.male||[]}])))};
${fs.readFileSync("lib/generate.js","utf8").replace(/^import .*$/gm,"").replace(/^export const RACES.*$/m,"").replace(/export /g,"")}
// ============ UI layer v2: game-feel interactions ============
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get k(){try{return JSON.parse(localStorage.getItem("dnn")||"{}")}catch(e){return{}}},
  set(o){try{localStorage.setItem("dnn",JSON.stringify(o))}catch(e){}}};
let state=store.k; state.saved=state.saved||[]; state.forged=state.forged||0;

function toast(msg){
  let t=$("#toast"); if(!t){t=document.createElement("div");t.id="toast";document.body.appendChild(t);}
  t.textContent=msg; t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
  clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),1400);
}
function updateForged(n){
  state.forged+=n; store.set(state);
  $$(".forged-n").forEach(e=>e.textContent=state.forged.toLocaleString());
}
function chip(name){
  const saved=state.saved.includes(name);
  return \`<li class="chip\${saved?" saved":""}" data-n="\${name}"><span class="nm">\${name}</span><button class="star" aria-label="save name">\${saved?"★":"☆"}</button></li>\`;
}
function renderNames(list,names){
  list.innerHTML=names.map(chip).join("");
  $$(".chip",list).forEach((c,i)=>{c.style.animationDelay=(i*28)+"ms";c.classList.add("pop");});
}
function renderSavedBar(){
  const bar=$("#savedbar"); if(!bar) return;
  const n=state.saved.length;
  bar.classList.toggle("has",n>0);
  $(".saved-count",bar).textContent=n;
  const listEl=$("#savedlist");
  if(listEl) listEl.innerHTML=state.saved.map(x=>\`<li class="chip saved" data-n="\${x}"><span class="nm">\${x}</span><button class="star" aria-label="remove">★</button></li>\`).join("");
}
function doGenerate(g,scrollAfter){
  const btn=$(".reroll",g), list=$(".names",g);
  const n=+($(".count",g)?.value||12);
  btn.classList.add("rolling"); g.classList.add("shaking");
  setTimeout(()=>{
    let names=generateSet(g.dataset.race,g.dataset.gender,"u"+Math.random(),g.dataset.letter?n*8:n);
    if(g.dataset.letter) names=names.filter(x=>x[0].toLowerCase()===g.dataset.letter).slice(0,n);
    // append-at-top: the hoard grows, clearing feels like a loss (cap DOM at 160)
    const old=list.innerHTML;
    list.innerHTML=names.map(chip).join("")+old;
    $$(".chip",list).slice(0,names.length).forEach((c,i)=>{c.style.animationDelay=(i*28)+"ms";c.classList.add("pop");});
    while(list.children.length>160)list.removeChild(list.lastChild);
    updateForged(names.length);
    btn.classList.remove("rolling"); g.classList.remove("shaking");
    if(scrollAfter){ // instant jump AFTER layout settles — smooth scroll loses to chip insertion
      requestAnimationFrame(()=>window.scrollTo({top:Math.max(0,g.getBoundingClientRect().top+scrollY-80),behavior:"instant"}));
    }
  },420);
}
document.addEventListener("click",e=>{
  const star=e.target.closest(".star");
  if(star){
    const li=star.closest(".chip"), name=li.dataset.n;
    const i=state.saved.indexOf(name);
    if(i>=0){state.saved.splice(i,1); li.classList.remove("saved"); star.textContent="☆"; toast("Removed");}
    else{state.saved.unshift(name); if(state.saved.length>60)state.saved.pop();
      li.classList.add("saved"); star.textContent="★"; star.classList.add("burst");
      setTimeout(()=>star.classList.remove("burst"),500); toast("★ Saved");}
    store.set(state);
    $$(".chip").forEach(c=>{if(c.dataset.n===name){const on=state.saved.includes(name);
      c.classList.toggle("saved",on); const st2=$(".star",c); if(st2)st2.textContent=on?"\u2605":"\u2606";}});
    renderSavedBar(); return;
  }
  const li=e.target.closest(".chip,.names li");
  if(li){
    const name=li.dataset.n||li.textContent;
    if(navigator.clipboard)navigator.clipboard.writeText(name);
    li.classList.add("copied"); setTimeout(()=>li.classList.remove("copied"),600);
    toast("Copied \u201C"+name+"\u201D"); return;
  }
  const b=e.target.closest(".reroll");
  if(b){doGenerate(b.closest(".gen")); return;}
  const fab=e.target.closest("#fab");
  if(fab){const g=$(".gen"); if(g){window.scrollTo({top:Math.max(0,g.getBoundingClientRect().top+scrollY-80),behavior:"instant"}); doGenerate(g,true);} return;}
  const st=e.target.closest("#savedbar .saved-toggle");
  if(st){$("#savedbar").classList.toggle("open"); return;}
  const sb=$("#savedbar");
  if(sb&&sb.classList.contains("open")&&!e.target.closest("#savedbar")){sb.classList.remove("open");}
  const cp=e.target.closest("#savedbar .copy-all");
  if(cp&&state.saved.length){if(navigator.clipboard)navigator.clipboard.writeText(state.saved.join("\\n"));toast("Copied "+state.saved.length+" names");return;}
});
// convert legacy static name lists into interactive chips
$$(".names").forEach(l=>{const names=$$("li",l).map(x=>x.textContent.trim()).filter(Boolean);
  if(names.length&&!$(".chip",l)) renderNames(l,names);});
document.addEventListener("keydown",e=>{
  if((e.key===" "||e.key==="Enter")&&!e.target.closest("input,select,textarea,button,a")){
    const g=$(".gen"); if(g){e.preventDefault(); doGenerate(g);}
  }
});
renderSavedBar();
$$(".forged-n").forEach(e=>e.textContent=state.forged.toLocaleString());
// mobile FAB: show when generator is off-screen
const rollBtn=$(".gen .reroll"), fabEl=$("#fab");
if(rollBtn&&fabEl){
  const updFab=()=>{const r=rollBtn.getBoundingClientRect();
    fabEl.classList.toggle("show",r.bottom<0);};
  addEventListener("scroll",updFab,{passive:true});
  addEventListener("resize",updFab,{passive:true});
  updFab();
}
`;
fs.writeFileSync(path.join(OUT, "g.js"), clientJs);

// ---- deploy plumbing (restored — a client-bundle rewrite once truncated this) ----
fs.writeFileSync(path.join(OUT, "ads.txt"),
  `google.com, ${SITE.adsenseClient.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`);
fs.writeFileSync(path.join(OUT, "CNAME"), SITE.domain + "\n");
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
