import fs from "fs";
import path from "path";
import { RACES as CORE, VARIANTS } from "./data/races.js";
import { RACES2 } from "./data/races2.js";
const RACES = { ...CORE, ...RACES2 };
import { generateSet } from "./lib/generate.js";
import { page, SITE } from "./lib/template.js";

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

function letterLinks(raceKey) {
  return `<section class="related"><h2>${RACES[raceKey].label} names by first letter</h2><ul class="links letters">
  ${LETTERS.map(l => `<li><a href="/${slug(raceKey)}-names-starting-with-${l}/">${l.toUpperCase()}</a></li>`).join("")}
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
    body: `<p class="lede">Generate authentic ${R.label.toLowerCase()} names in one click. Every name is built from real ${R.label.toLowerCase()} phonetics — not random letters.</p>
${widget(key, "neutral", key)}
<section class="related"><ul class="links filter-chips">
${GENDERS.map(g => `<li><a href="/${s}-name-generator/${g}/">${g[0].toUpperCase()+g.slice(1)}</a></li>`).join("")}
</ul></section>
${related(key)}
<section class="prose"><h2>How ${R.label.toLowerCase()} names work</h2><p>${R.lore}</p>
<h3>Classic examples</h3><p>${R.seeds.join(" · ")}</p></section>
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
      body: `<p class="lede">${G} ${R.label.toLowerCase()} names, generated instantly.</p>
${widget(key, g, key + g)}
<section class="prose"><h2>Naming conventions</h2><p>${R.lore}</p></section>
${letterLinks(key)}
${related(key)}`
    }));
  }

  // ---------------------------------------------------- per starting letter (x26)
  for (const L of LETTERS) {
    const pool = generateSet(key, "neutral", key + L + "seed", 400)
      .filter(n => n[0].toLowerCase() === L).slice(0, 30);
    if (pool.length < 6) continue;           // skip letters this phonology can't make
    write(`/${s}-names-starting-with-${L}`, page({
      title: `${R.label} Names Starting With ${L.toUpperCase()} | ${SITE.name}`,
      desc: `${pool.length} ${R.label.toLowerCase()} names beginning with the letter ${L.toUpperCase()}, plus a free generator for more.`,
      canonical: `/${s}-names-starting-with-${L}/`,
      h1: `${R.label} Names Starting With ${L.toUpperCase()}`,
      crumbs: [{href:"/",label:"Home"},{href:`/${s}-name-generator/`,label:`${R.label} names`},{label:L.toUpperCase()}],
      body: `<p class="lede">${R.label} names beginning with <strong>${L.toUpperCase()}</strong> — tap to copy, or forge a fresh batch.</p>
${widget(key, "neutral", key + L + "seed", L)}
<section class="prose"><h2>About these names</h2><p>${R.lore}</p></section>
<section class="related"><h2>Need something else?</h2><ul class="links">
<li><a href="/${s}-name-generator/">Full ${R.label.toLowerCase()} name generator</a></li>
${GENDERS.map(g=>`<li><a href="/${s}-name-generator/${g}/">${g} ${R.label.toLowerCase()} names</a></li>`).join("")}
</ul></section>
${letterLinks(key)}`
    }));
  }
}

// --------------------------------------------------------------------- genre hubs
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
    body: `<p class="lede">Pick a race to generate ${glabel} names.</p>
<ul class="cards">${members.map(([k,R])=>`<li><a href="/${slug(k)}-name-generator/"><strong>${R.label}</strong><span>${R.seeds.slice(0,3).join(", ")}</span></a></li>`).join("")}</ul>`
  }));
}

// ------------------------------------------------------------------- legal + home
const LEGAL = {
  about: ["About", `<p>${SITE.name} builds free name generators for tabletop players, game masters and fiction writers. Every generator is built on the real phonetics of its tradition — the syllable structures, consonant clusters and name endings that make an elvish name sound elvish and a dwarven name sound dwarven — rather than shuffling letters at random.</p><p>Names are free to use in any project, commercial or otherwise. No attribution required.</p>`],
  contact: ["Contact", `<p>Questions, corrections, or a race you'd like us to add? Email <strong>hello@${SITE.domain}</strong> and we'll get back to you.</p><p>If you spot a generated name that doesn't fit its tradition, tell us — we tune the phonetic rules based on that feedback.</p>`],
  privacy: ["Privacy Policy", `<p>We do not ask for, collect or store personal information. There are no accounts and no newsletter.</p><h2>Cookies and advertising</h2><p>This site is supported by advertising. Google, as a third-party vendor, uses cookies to serve ads on this site. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this and other sites.</p><p>You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" rel="nofollow">Google Ads Settings</a>, or opt out of third-party vendor cookies at <a href="https://www.aboutads.info" rel="nofollow">aboutads.info</a>.</p><h2>Analytics</h2><p>We may use aggregate traffic analytics that record page views and referrers. This data is not linked to individuals.</p>`],
  terms: ["Terms of Use", `<p>Names generated on this site are provided free of charge and may be used in any project, personal or commercial, without attribution.</p><h2>No warranty</h2><p>Generated names are produced algorithmically. We make no guarantee that a given name is unique, unused, or free of trademark in your jurisdiction. Check before commercial use.</p><h2>Trademarks</h2><p>Dungeons &amp; Dragons, Skyrim, World of Warcraft and other titles referenced are trademarks of their respective owners. This site is not affiliated with, endorsed by or sponsored by any of them. References are descriptive only.</p>`],
};
for (const [k, [t, b]] of Object.entries(LEGAL)) {
  write(`/${k}`, page({ title:`${t} | ${SITE.name}`, desc:`${t} for ${SITE.name}.`,
    canonical:`/${k}/`, h1:t, crumbs:[{href:"/",label:"Home"},{label:t}], body:`<section class="prose">${b}</section>` }));
}

write("", page({
  title: `${SITE.name} — Fantasy & RPG Name Generators`,
  desc: `Free fantasy name generators for D&D, Skyrim, LOTR and more. Elf, dwarf, orc, dragonborn, tiefling names and dozens more — built on real phonetics.`,
  canonical: "/", h1: "Fantasy & RPG Name Generators",
  body: `<p class="lede">Free name generators built on the real phonetics of each tradition. No signup, no limits.</p>
<ul class="cards">${Object.entries(RACES).map(([k,R])=>`<li><a href="/${slug(k)}-name-generator/"><strong>${R.label}</strong><span>${R.seeds.slice(0,3).join(", ")}</span></a></li>`).join("")}</ul>
<section class="related"><h2>By setting</h2><ul class="links">${Object.entries(GENRES).map(([g,l])=>`<li><a href="/${g}-name-generator/">${l} names</a></li>`).join("")}</ul></section>`
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
function doGenerate(g){
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
    store.set(state); renderSavedBar(); return;
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
  if(fab){const g=$(".gen"); if(g){g.scrollIntoView({behavior:"smooth",block:"center"}); doGenerate(g);} return;}
  const st=e.target.closest("#savedbar .saved-toggle");
  if(st){$("#savedbar").classList.toggle("open"); return;}
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
    fabEl.classList.toggle("show",r.bottom<0||r.top>innerHeight);};
  addEventListener("scroll",updFab,{passive:true});
  addEventListener("resize",updFab,{passive:true});
  updFab();
}
`;
fs.writeFileSync(path.join(OUT, "g.js"), clientJs);
