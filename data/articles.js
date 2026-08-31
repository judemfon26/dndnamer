// Genre hub intros — unique editorial per hub (these pages were 63-75 words).
export const GENRE_INTROS = {
  dnd: `Naming a D&D character is the first mechanical-free decision of a campaign, and it quietly outlasts most builds — you will say this name hundreds of times before the character retires. Every playable race below carries its own published naming conventions, from the clan-first formality of dragonborn to the collected aliases of gnomes. Pick a race to generate names that follow those conventions rather than random syllables, and see each generator's notes for how the tradition works and how to bend it for your table.`,
  fantasy: `These generators cover the broad fantasy register — the naming traditions that novels, games and tabletop settings share as a common tongue. Each one is built on the phonetic rules of its tradition: elvish flows, dwarvish bites, Nordic compounds weld two meanings into one word. If you are naming characters for original fiction rather than a licensed setting, this hub is the place to start; the names avoid setting-specific trademarks while keeping the sound readers expect.`,
  lotr: `Tolkien did not just write names; he derived them from constructed languages with real grammar, which is why Middle-earth's naming still sounds deeper than its imitators. These generators follow the phonetic patterns his work established — Sindarin-style elf names, Dvergatal dwarf names of the kind he lifted for Thorin's company, and the harsh Black Speech register of the orcs. Use them for tribute campaigns and Middle-earth-adjacent fiction that wants the sound without borrowing protected names outright.`,
  skyrim: `Skyrim's naming is Old Norse with the serial numbers barely filed off, and these generators match that register: Nord names compound real Norse elements, while the elves, orcs and dwarves of Tamriel-style settings each keep their own distinct phonology. Whether you are naming a new playthrough character, a follower mod, or a tabletop game set somewhere suspiciously like the frozen north, pick the race and the generator will keep you in-register.`,
  wow: `Warcraft's races each speak a recognisable naming dialect — orc honour-names, gnomish tinker-surnames, and the guttural warband registers in between. These generators produce names that fit that world's tone: heroic, slightly larger than life, and readable at a glance in a guild roster. Handy for new characters, guild NPC rosters, or fan fiction that wants to sound native.`,
  viking: `The Norse naming system was a machine for making meaning: pick two elements — victory, thunder, bear, counsel — and weld them into a name, then add a patronymic so every introduction names your father too. These generators follow those real conventions, which is why the output works for historical fiction and Viking-flavoured fantasy alike. See the Nordic generator's notes for how the compound system works if you want to build names by hand.`,
  historical: `These generators lean on real-world naming traditions — Norse compounds, Celtic elements, and the epithet-driven names of the pirate era. They are built for historical fiction, living-history characters and history-adjacent games: close enough to the record to feel authentic, generated fresh so you are not borrowing an actual person. Each generator's notes explain the underlying convention and its period.`,
  druid: `Druidic and nature-touched characters pull their names from the green edge of the Celtic tradition — soft Gaelic openings, landscape words, names that could belong to a person or a place. This hub gathers the generators that fit that register: Celtic human names, the pastoral firbolg style, and woodland elvish. Ideal for druids, rangers, hedge-witches and anyone whose character sheet smells of moss.`,
};

// Standalone guides — real articles, the publisher-content layer.
export const ARTICLES = [
 {
  slug: "how-to-name-a-dnd-character",
  title: "How to Name a D&D Character (Without Regretting It by Session 3)",
  desc: "A practical method for choosing a character name you'll still like at level 12 — sound rules, table tests, and the five traps that ruin names.",
  body: `
<p class="lede">You will say your character's name more often than any other word you bring to the table. Most players spend forty minutes on ability scores and forty seconds on the name — then live with the consequences for a year of Thursdays. Here is a better process.</p>
<h2>Start from sound, not meaning</h2>
<p>Players remember how a name feels in the mouth long before they remember what it means. Say your candidate name out loud five times, fast. If it trips, shorten it. If it drones, sharpen a consonant. The classic fantasy registers each have a sound signature — elvish flows on l and r, dwarvish bites on hard stops, orcish growls from the back of the throat — and matching your race's signature does more for immersion than any amount of invented etymology.</p>
<h2>The three table tests</h2>
<p><strong>The shout test:</strong> can the party cleric scream it across a battlefield in one breath? Names longer than three syllables fail combat; that is why Aelrindelthorion becomes "Ael" by session two whether you like it or not. Choose the nickname yourself or the table will choose it for you.</p>
<p><strong>The barkeep test:</strong> introduce yourself in-character to an imaginary innkeeper. If the name sounds embarrassing in a mundane sentence — "One room please, I'm Doomshadow Nightreaver" — it will feel embarrassing eighty percent of the campaign, because eighty percent of a campaign is mundane sentences.</p>
<p><strong>The roster test:</strong> check it against the rest of the party. Two names starting with the same sound (Kira and Kieran) will be confused all campaign; a comic name next to four serious ones warps the tone every time initiative is called.</p>
<h2>Five traps that ruin good names</h2>
<ul>
<li><strong>Apostrophe inflation.</strong> One apostrophe can mark a real join between name parts; three marks a parody. If it looks like a shelf of fantasy paperbacks fell on a keyboard, prune it.</li>
<li><strong>The adjective-noun compound.</strong> Shadowblade, Stormfury, Darkbane — these are weapon names and guild names, not people. If your name would fit on a sword, it does not fit on a person.</li>
<li><strong>Borrowing too directly.</strong> Naming your ranger Legolas or your wizard Gandalf the Grey-ish gets one laugh, then costs you a campaign of not being taken seriously.</li>
<li><strong>The unpronounceable flex.</strong> If the table cannot say it, they will not use it, and a name nobody uses is not a name — it is a line on a sheet.</li>
<li><strong>Ignoring the setting's register.</strong> A cyberpunk-sounding name in a pastoral campaign (or vice versa) breaks the shared fiction a little every time it is spoken.</li>
</ul>
<h2>Let the culture do the work</h2>
<p>The fastest shortcut to a name with depth is following a real convention: dragonborn put clan before personal name, goliaths carry earned epithets that update with their deeds, tabaxi are named after images like "Cloud on the Mountaintop." Pick the convention first and the name almost writes itself — each generator on this site documents its race's convention in the notes below the tool.</p>
<h2>A two-minute method</h2>
<ol>
<li>Generate 20–30 names in your race's register (that is what the generators here are for).</li>
<li>Shortlist three that pass the shout test.</li>
<li>Say each in a mundane sentence; drop any that embarrass you.</li>
<li>Check the party roster for collisions.</li>
<li>Choose the one you can imagine on a tombstone — because if the campaign goes well, it may end up on one.</li>
</ol>
<p>Name chosen? Give it a nickname you control, note how it is pronounced on your sheet, and correct the table exactly twice before surrendering to whatever they call you. That, too, is tradition.</p>`,
 },
 {
  slug: "elf-names-guide",
  title: "Elf Naming Conventions, Explained: Sindarin Roots to Modern D&D",
  desc: "Why elf names sound the way they do — Tolkien's language project, D&D's three-name system, and how to build authentic elvish names yourself.",
  body: `
<p class="lede">Every elf name you have ever liked is descended from a linguistics project. Understanding that lineage is the difference between generating elvish-sounding syllables and building a name that would survive an elf's own scrutiny.</p>
<h2>Where the sound comes from</h2>
<p>Tolkien built his elvish languages — flowing Sindarin and older, statelier Quenya — before he wrote the books that made them famous, and he assembled names from meaningful roots: <em>gal</em> (radiance), <em>mith</em> (grey), <em>lor</em> (gold), <em>wen</em> (maiden). Galadriel, Mithrandir and Lórien are not decorative sounds; they are tiny sentences. The industry that followed kept the phonetics and dropped the dictionary, which is why most modern "elvish" is Sindarin's music without its meaning — liquid consonants (l, r, n), open vowels, soft th and s, and almost no hard stops.</p>
<h2>The D&D layer: three names per elf</h2>
<p>Dungeons &amp; Dragons added social structure to the sound. By published convention an elf carries a <strong>child name</strong> (used until they declare adulthood), a <strong>self-chosen adult name</strong> — a genuinely unusual custom; most fantasy races are named by parents — and a <strong>family name</strong> that often translates into Common, like Amakiir becoming "Gemflower." That self-naming custom is a roleplay goldmine: an elf's adult name is a statement about who they decided to be.</p>
<h2>The anatomy of an elvish name</h2>
<p>Three rules generate most of the register:</p>
<ul>
<li><strong>Open softly.</strong> Ae-, El-, Gal-, Sil-, Fae-, Thal- — vowel-forward or liquid-led openings.</li>
<li><strong>Keep the middle liquid.</strong> Clusters stay gentle; -ndr- is about as hard as elvish gets.</li>
<li><strong>Resolve, don't stop.</strong> Endings flow: -iel, -wen, -eth for a feminine cast; -dir, -las, -ion for masculine; -ael and -il read neutral. A hard-stop ending (-k, -g) breaks the register instantly.</li>
</ul>
<p>Length signals culture: high-elf and ancient names run three to four syllables; wood-elf names cut shorter and earthier; drow names take the same base and sharpen it with z, x and doubled s.</p>
<h2>Male, female, and neither</h2>
<p>Elvish gender-coding lives almost entirely in the ending, which makes neutral names easy — resolve on -ael, -il or -ith and the name floats free. This is also the practical answer for players who want an androgynous elf: keep the flowing structure, choose an ending outside the two traditional pools.</p>
<h2>Building one by hand</h2>
<p>Pick an opening (Ael-), one middle syllable at most (-in-), and an ending that matches the character (-dir). Say it aloud; if any joint produces a hard collision, soften one side. Aelindir. Then — the step most people skip — decide what it means to the elf who chose it. The generator above will hand you the phonetics; only you can supply the reason they picked it at their naming day.</p>`,
 },
 {
  slug: "orc-and-goblinoid-names-guide",
  title: "Orc, Goblin & Goblinoid Names: the Harsh-Register Field Guide",
  desc: "How the growled half of fantasy naming works — Black Speech roots, Warcraft's honour-names, and the phonetics that make a name sound dangerous.",
  body: `
<p class="lede">Half of fantasy naming happens at the back of the throat. Orcs, goblins, hobgoblins and bugbears share a register built to sound dangerous — and it has rules just as strict as elvish, pointed the other way.</p>
<h2>Two ancestries, one growl</h2>
<p>The modern harsh register has two parents. Tolkien's Black Speech was deliberately engineered to be ugly — he wanted readers to flinch — and names like Azog, Bolg and Grishnákh established the pattern: guttural stops, clipped dark vowels, no comfort anywhere. Warcraft supplied the second parent: an orcish honour culture whose names (Thrall, Durotan, Grommash Hellscream) are still guttural but carry epic weight and earned surnames. Most tabletop orc naming today blends the two — Tolkien's phonetics, Warcraft's dignity.</p>
<h2>The phonetic toolkit</h2>
<ul>
<li><strong>Consonants:</strong> g, k, r, z, gh, kh, and the thudding double-g. These do the growling.</li>
<li><strong>Vowels:</strong> short, dark u and o. Bright long e and i sounds leak the menace out of a name.</li>
<li><strong>Length:</strong> one or two syllables for goblins, two for orcs, up to three for hobgoblin formality. Anything longer starts sounding civilised, which for hobgoblins is precisely the point.</li>
<li><strong>Endings:</strong> -ak, -uk, -gash, -zog, -mash, -thak. Percussion, not resolution.</li>
</ul>
<h2>The goblinoid spectrum</h2>
<p>The three goblinoid races are one language at three volumes. <strong>Goblins</strong> take the scrappy end: one or two spat syllables, faintly rude (Snik, Yip, Gruzzle) — names that sound like they were assigned during a robbery. <strong>Bugbears</strong> drop the pitch: thick clusters and violent compounds (Grolmash, Skarrtusk). <strong>Hobgoblins</strong> discipline the same phonemes into military order — Azrok, Tharnash, names you could bark down a parade line. Keeping those three sub-registers distinct is the easiest way to make a mixed warband feel organised rather than interchangeable.</p>
<h2>Epithets: the orcish surname</h2>
<p>Orc culture in most settings runs on earned names — Elf-Burner, the Unlucky, Skullsplitter — attached to short personal names. The epithet is doing the biographical work a family name does elsewhere, which means it can change: an orc who fails greatly may wear that failure as a name. For NPCs this is free storytelling; introduce Krag Elf-Burner and the players know his resume before he speaks.</p>
<h2>Making it usable at a real table</h2>
<p>The harsh register has one practical enemy: fifteen NPCs named by growl start to blur. Two fixes. First, vary the opening consonant deliberately across a warband — G, K, Z, Ur, Sha — so ears can index them. Second, hang the memorable weight on epithets rather than personal names; nobody confuses Elf-Burner with the Unlucky, even if their given names rhyme. The generators here produce the phonetics; attach the deeds yourself and the names will hold a whole campaign.</p>`,
 },
 {
  slug: "using-name-generators-well",
  title: "How to Use a Name Generator Well (a Worldbuilder's Method)",
  desc: "Generators produce candidates, not names. A working method for turning generated output into consistent, memorable naming for campaigns and fiction.",
  body: `
<p class="lede">A name generator is a brainstorming partner, not an oracle. The difference between worlds that feel named and worlds that feel generated is what happens in the sixty seconds after you click the button. Here is the method.</p>
<h2>Generate in bulk, choose in context</h2>
<p>Never take the first name. Roll twenty or thirty, and read them as a slate: patterns you like will surface (you keep pausing on names ending in -eth; you hate everything starting with V). That reaction is your actual taste talking, and it is better data than any single roll. Shortlist three, then test them in a sentence of your fiction or at your table — names live in sentences, not in lists.</p>
<h2>Curate for your world's phonology</h2>
<p>Real cultures have consistent sound systems, and consistency is what makes fictional cultures feel real. When you adopt a generated name, note its dominant sounds, then keep neighbouring characters inside the same palette: if the river-kingdom uses soft s and long vowels, its king should not be called Grozzuk. One vowel-and-consonant palette per culture, held for a whole region, beats a hundred individually brilliant names that share nothing.</p>
<h2>Edit with intent</h2>
<p>Generated names are legally yours to bend. The three most useful edits: <strong>truncate</strong> (long names shed syllables to produce a usable everyday form — Aelindriel becomes Aelin, and now you have both a formal and familiar register for the same character); <strong>swap one sound</strong> to claim a name that is almost right (Kazrim to Kazrin changes the whole mouthfeel); and <strong>recombine</strong> — take the opening of one generated name and the ending of another. The generator hands you raw phonetic material; treat it like clay, not stone.</p>
<h2>Keep a name bank</h2>
<p>The most practical habit in worldbuilding: every time you generate, save the rejects you almost chose into a running list per culture. Six months later, when a session needs an instant innkeeper, you will pull a name that already matches the region's sound — in this site's generators, the star button saves names for exactly this purpose. A stocked name bank is the difference between "uh — Bob the innkeeper" and seamless improvisation.</p>
<h2>The consistency checklist</h2>
<ul>
<li>Does the name match its culture's sound palette?</li>
<li>Can it be said quickly, three times, by someone who has never seen it spelled?</li>
<li>Does it collide with any existing name in the cast or party?</li>
<li>Does its register match its bearer's role — comic names on comic characters, weight where weight is due?</li>
<li>If it is important, does it have a short form you chose deliberately?</li>
</ul>
<p>Run that checklist and a generated name stops being generated: it has been chosen, edited and placed, which is all naming ever was.</p>`,
 },
];
