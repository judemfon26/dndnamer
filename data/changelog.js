// Public release history. Every entry corresponds to a real commit in this
// repository, and every claim about how a generator works was checked against
// the phonotactic table that actually ships.
export const CHANGELOG = [
  {
    date: "2026-10-06",
    title: "Japanese, genie and svirfneblin generators, plus ship names",
    body: `The Japanese set is built strictly from open syllables — consonant plus vowel, no clusters — and closes on the real gendered endings: <em>-ko</em>, <em>-mi</em> and <em>-hime</em> for women, <em>-ro</em>, <em>-shi</em>, <em>-maru</em> and <em>-suke</em> for men. Genie names open on Arabic-register fricatives (<em>Kha-</em>, <em>Sha-</em>, <em>Az-</em>) and close short on <em>-ir</em>, <em>-mir</em> and <em>-zad</em>. Svirfneblin get their own table rather than the gnome one because deep-gnome names land hard: <em>-tick</em>, <em>-gulp</em>, <em>-dorn</em>, after Belwar Dissengulp. A ship-name generator joins the place tools, pairing a quality with a namesake the way real ships from the <em>Golden Hind</em> onward were named.`,
  },
  {
    date: "2026-10-02",
    title: "Wizard, Roman and Egyptian generators, plus city names",
    body: `Three new traditions, each with its own phonotactic table rather than a reskin of an existing one. The Egyptian set is built from theophoric compounds — the god-elements that most real Egyptian personal names were assembled around, which is why it opens on <em>Amen-</em>, <em>Hor-</em> and <em>Ankh-</em> and closes on <em>-hotep</em>, <em>-mose</em> and <em>-tari</em>. The Roman set uses the Latin nomen endings (<em>-us</em>, <em>-ius</em>, <em>-ianus</em>, <em>-a</em>) that mark grammatical gender, so masculine and feminine forms differ the way they actually did. The wizard set is reverse-engineered from the endings that carry the archetype in fiction — <em>-dalf</em>, <em>-lin</em>, <em>-ster</em>, <em>-kainen</em>. A compound city-name generator shipped alongside them.`,
  },
  {
    date: "2026-09-22",
    title: "Demon, angel and samurai generators, plus guild names",
    body: `Angel names are composed rather than shuffled: a stem carries the attribute and a theophoric suffix (<em>-el</em>, <em>-iel</em>, <em>-ael</em>) carries the divine part, which is the pattern behind Ariel, Gabriel and Michael. Demon names take the opposite register — hard stops and back-of-the-throat codas like <em>-goth</em>, <em>-zul</em> and <em>-rax</em>. The samurai set is built from Japanese name elements (<em>Aka-</em>, <em>Kuro-</em>, <em>Ishi-</em> against <em>-moto</em>, <em>-shige</em>, <em>-hiro</em>) so the halves combine the way real compounds do. A guild-name generator was added for the organisations characters belong to.`,
  },
  {
    date: "2026-09-17",
    title: "Half-elf, duergar and dragon generators, plus tavern names",
    body: `Half-elf names got their own table rather than being pointed at the elf one: the openings stay elvish but the endings widen to include human-register forms, so the output sits between the two cultures instead of inside one. Duergar split from dwarf because grey-dwarf names take a harsher turn — <em>Khazgrim</em>, <em>Morzur</em>, <em>Thurdun</em> against the rounder dwarven set. The dragon generator covers true draconic names, which run longer and more ceremonial than dragonborn ones. The tavern generator was the site's first compound place-name tool.`,
  },
  {
    date: "2026-09-08",
    title: "Bugbear, hobgoblin and half-orc generators",
    body: `The goblinoid family had been collapsed into one orc-shaped table, which was wrong. Bugbear names are now locked to two blunt syllables; hobgoblin names allow a third and resolve on ordered, harder codas; half-orc names are gendered and include an empty ending, so some come out as bare human-length stems and others carry orcish weight. Each page documents the difference rather than asserting it.`,
  },
  {
    date: "2026-09-02",
    title: "Changeling, triton and githyanki generators",
    body: `Three races whose conventions are genuinely unusual. Changelings take a new name with each new face, so the generator is capped at a single syllable and produces short borrowed-sounding words — <em>Ash</em>, <em>Fei</em>, <em>Gray</em> — rather than a fixed tradition. Triton names are assembled from Greek sea-roots (<em>Coral-</em>, <em>Delph-</em>, <em>Nerei-</em>) on classical endings. Githyanki names keep the glottal breaks that mark the race in print: <em>B'rak</em>, <em>Kar'i</em>, <em>Quith</em>.`,
  },
  {
    date: "2026-08-30",
    title: "Editorial overhaul: every race page documents its tradition",
    body: `The largest single change to the site. Every race generator gained hand-written sections on where its naming tradition comes from, how to build a name in that tradition by hand, and how to use it at the table — roughly 150 to 400 words per race, written individually rather than templated. Four long-form naming guides were added at the same time, and a build-time quality gate was introduced that fails the deploy if any page falls below its word floor, if any internal link is dead, or if any race is missing its editorial.`,
  },
  {
    date: "2026-08-26",
    title: "Aarakocra, minotaur and centaur generators",
    body: `Minotaur and centaur names come straight from the Greek sources the creatures do — Asterion, Brontes, Chiron, Pholus, Nessus — so both tables are built on Greek stems and the <em>-on</em>, <em>-os</em>, <em>-us</em>, <em>-ios</em> endings that carry them. Aarakocra went the other way: open vowel endings (<em>-a</em>, <em>-ee</em>, <em>-ra</em>) and sharp k sounds, for names meant to come out of a beak.`,
  },
  {
    date: "2026-08-21",
    title: "Lizardfolk, kenku and tortle generators",
    body: `The first expansion past the core races. Kenku are the genuinely odd one: they speak in mimicry, so their names are onomatopoeic compounds — <em>Clatterbeak</em>, <em>Rattlewing</em>, <em>Echocall</em> — and the generator joins a sound to a body part rather than running syllables together. Lizardfolk and tortle use conventional phonotactic tables with their own sibilant and open-vowel registers.`,
  },
  {
    date: "2026-08-21",
    title: "DnD Namer launches",
    body: `The site went live with generators for the core D&D races, each built from a hand-written phonotactic table — the openings, syllable patterns and endings that make a name belong to its tradition — rather than a shuffled syllable list. Letter pages, gender variants and a saved-names bank shipped with it.`,
  },
];
