// Pre-authored race backlog. The weekly drop promotes the first N entries into
// data/races3.js (live) via scripts/promote.js. Same schema as data/races.js.
export const BACKLOG = {
  "bugbear": {
    "label": "Bugbear",
    "genre": [
      "dnd"
    ],
    "onset": [
      "Brug",
      "Dhurg",
      "Gnash",
      "Grol",
      "Hark",
      "Klarg",
      "Morg",
      "Rukh",
      "Skarr",
      "Thokk",
      "Urgh",
      "Vrash",
      "Yeek",
      "Zogg",
      "Drenz",
      "Mosk"
    ],
    "mid": [
      "ug",
      "ar",
      "ok",
      "ur"
    ],
    "coda": [
      "mash",
      "gor",
      "tusk",
      "nak",
      "rot",
      "bash",
      "guz",
      "ruk",
      "fang",
      "gob",
      "dur"
    ],
    "syl": [
      2,
      2
    ],
    "gendered": false,
    "seeds": [
      "Klarg",
      "Grolmash",
      "Skarrtusk",
      "Thokk",
      "Vrashgor",
      "Zoggbash"
    ],
    "lore": "Bugbear names sound like violence in progress — thick consonant clusters, grunted vowels, and endings borrowed from the noise of a raid: bash, mash, tusk. They sit one register deeper than goblin names, befitting the biggest of the goblinoids, and are usually earned mid-ambush."
  },
  "hobgoblin": {
    "label": "Hobgoblin",
    "genre": [
      "dnd"
    ],
    "onset": [
      "Azrok",
      "Drak",
      "Ghor",
      "Julk",
      "Kavv",
      "Margr",
      "Norr",
      "Ozzok",
      "Rhukar",
      "Skorv",
      "Tharn",
      "Vorr",
      "Zanth",
      "Krev",
      "Durn",
      "Molgr"
    ],
    "mid": [
      "ar",
      "ok",
      "ur",
      "an",
      "ez"
    ],
    "coda": [
      "ash",
      "gar",
      "ek",
      "orn",
      "uz",
      "ath",
      "ir",
      "ok",
      "an",
      "ust"
    ],
    "syl": [
      2,
      2,
      3
    ],
    "gendered": false,
    "seeds": [
      "Azrok",
      "Drakgar",
      "Rhukar",
      "Skorvek",
      "Tharnash",
      "Vorruz"
    ],
    "lore": "Hobgoblin names are goblinoid sounds put through military discipline — the same hard consonants as their smaller cousins, but ordered, clipped and rank-conscious. A hobgoblin's legion name matters more than the personal one, and both are spoken like orders."
  },
  "half_orc": {
    "label": "Half-Orc",
    "genre": [
      "dnd"
    ],
    "onset": [
      "Brug",
      "Dench",
      "Feng",
      "Gell",
      "Henk",
      "Holg",
      "Imsh",
      "Keth",
      "Krusk",
      "Mhurren",
      "Ront",
      "Shump",
      "Thokk",
      "Ovak",
      "Grash",
      "Varg"
    ],
    "mid": [
      "a",
      "e",
      "u",
      "ar"
    ],
    "coda": [
      "",
      "a",
      "en",
      "uk",
      "ar",
      "esh",
      "o",
      "ash",
      "ek"
    ],
    "syl": [
      2,
      2
    ],
    "gendered": true,
    "female": [
      "a",
      "en",
      "esh",
      "ovak",
      "anna"
    ],
    "male": [
      "",
      "uk",
      "ar",
      "o",
      "ek",
      "ash"
    ],
    "seeds": [
      "Dench",
      "Feng",
      "Holg",
      "Krusk",
      "Mhurren",
      "Shump"
    ],
    "lore": "Half-orc names split the difference between two worlds: blunt orcish single-syllables (<em>Dench</em>, <em>Feng</em>, <em>Krusk</em>) worn in human company, or human names worn among orcs — whichever face the half-orc leads with. The official D&D lists lean into short, punchy names that work in both rooms."
  },
  "half_elf": {
    "label": "Half-Elf",
    "genre": [
      "dnd",
      "fantasy"
    ],
    "onset": [
      "Aer",
      "Bre",
      "Cor",
      "Dae",
      "Elu",
      "Fen",
      "Gal",
      "Ilm",
      "Jor",
      "Kae",
      "Lia",
      "Mel",
      "Ner",
      "Riel",
      "Sar",
      "Thal",
      "Vae",
      "Wyn"
    ],
    "mid": [
      "a",
      "e",
      "ri",
      "la",
      "the",
      "ma"
    ],
    "coda": [
      "iel",
      "an",
      "wen",
      "ar",
      "is",
      "ora",
      "yn",
      "dris"
    ],
    "syl": [
      2,
      2,
      3
    ],
    "gendered": true,
    "male": [
      "an",
      "ion",
      "dor",
      "ric",
      "us",
      "iel",
      "ard",
      "en"
    ],
    "female": [
      "a",
      "ia",
      "wen",
      "riel",
      "ine",
      "lyn",
      "ara",
      "eth"
    ],
    "seeds": [
      "Aerion",
      "Brelyn",
      "Corwen",
      "Daeriel",
      "Melara",
      "Thaldor"
    ],
    "lore": "Half-elf names are borrowed twice over. Most carry an elven name from one parent — flowing, vowel-heavy, ending in <em>-iel</em>, <em>-wen</em> or <em>-dor</em> — and answer to a blunter human one in the towns where elvish draws stares. The result is a name that sounds slightly foreign in both halls."
  },
  "duergar": {
    "label": "Duergar",
    "genre": [
      "dnd",
      "fantasy"
    ],
    "onset": [
      "Bru",
      "Dorn",
      "Grum",
      "Hrag",
      "Khaz",
      "Mor",
      "Nul",
      "Skor",
      "Thur",
      "Ulg",
      "Vorn",
      "Zar",
      "Drak",
      "Grim",
      "Muz",
      "Harn"
    ],
    "mid": [
      "un",
      "ar",
      "or",
      "az",
      "ul"
    ],
    "coda": [
      "dar",
      "grim",
      "nak",
      "thak",
      "dun",
      "mor",
      "zur",
      "gral",
      "bek",
      "rund",
      "kar"
    ],
    "syl": [
      2,
      2,
      3
    ],
    "gendered": false,
    "seeds": [
      "Khazgrim",
      "Morzur",
      "Thurdun",
      "Bruthak",
      "Skorbek",
      "Ulgnak"
    ],
    "lore": "Duergar names are dwarvish stripped of warmth: the same hard stops and clan-suffixes, ground down by centuries in the Underdark. Where a shield dwarf's name honours a forge or an ancestor, a gray dwarf's honours a debt, a depth or a grudge — <em>Khazgrim</em>, <em>Morzur</em>, <em>Thurdun</em>."
  },
  "dragon": {
    "label": "Dragon",
    "genre": [
      "dnd",
      "fantasy"
    ],
    "onset": [
      "Aur",
      "Bala",
      "Cala",
      "Dree",
      "Emb",
      "Faer",
      "Ghaz",
      "Igni",
      "Kal",
      "Mal",
      "Nyx",
      "Oro",
      "Pyr",
      "Ryth",
      "Sar",
      "Tia",
      "Vor",
      "Zar"
    ],
    "mid": [
      "a",
      "o",
      "az",
      "ir",
      "ath",
      "en"
    ],
    "coda": [
      "rax",
      "gos",
      "thyx",
      "ion",
      "mir",
      "xis",
      "goth",
      "zar",
      "drex",
      "yss",
      "thra"
    ],
    "syl": [
      2,
      2,
      3
    ],
    "gendered": false,
    "seeds": [
      "Balagos",
      "Malrax",
      "Aurthra",
      "Nyxion",
      "Pyrgoth",
      "Rythmir"
    ],
    "lore": "Dragon names are built to be spoken in Draconic — a language of hisses, hard stops and drawn-out finals. They run long and grand, favouring endings like <em>-rax</em>, <em>-gos</em> and <em>-xis</em>, because a wyrm's name is meant to fill a cavern and outlive the tongue that first said it."
  },
  "demon": {
    "label": "Demon",
    "genre": [
      "dnd",
      "fantasy"
    ],
    "onset": [
      "Az",
      "Bel",
      "Cruo",
      "Dag",
      "Gor",
      "Hazz",
      "Kal",
      "Mal",
      "Nekh",
      "Orn",
      "Paz",
      "Rham",
      "Sam",
      "Tha",
      "Ulz",
      "Vex",
      "Xaph",
      "Zeph"
    ],
    "mid": [
      "a",
      "o",
      "az",
      "el",
      "ur",
      "ith"
    ],
    "coda": [
      "goth",
      "zul",
      "rax",
      "phel",
      "moth",
      "kar",
      "rion",
      "thul",
      "zeb",
      "nak"
    ],
    "syl": [
      2,
      2,
      3
    ],
    "gendered": false,
    "seeds": [
      "Azgoth",
      "Belzul",
      "Nekhrax",
      "Vexmoth",
      "Rhamthul",
      "Zephkar"
    ],
    "lore": "Demon names come out of the grimoire tradition: a guttural root welded to an ending that sounds like a seal being broken — <em>-goth</em>, <em>-zul</em>, <em>-moth</em>, <em>-rion</em>. They are deliberately hard to say by accident, since in most settings speaking one correctly is halfway to a summoning."
  },
  "angel": {
    "label": "Angel",
    "genre": [
      "dnd",
      "fantasy"
    ],
    "onset": [
      "Ari",
      "Cam",
      "Dum",
      "Gab",
      "Han",
      "Ioph",
      "Jeh",
      "Kush",
      "Mik",
      "Nath",
      "Orph",
      "Raph",
      "Sar",
      "Uri",
      "Zad",
      "Ser",
      "Ith",
      "Veh"
    ],
    "mid": [
      "a",
      "e",
      "i",
      "ha",
      "ri"
    ],
    "coda": [
      "el",
      "iel",
      "ael",
      "phon",
      "oth",
      "im",
      "niel",
      "riel"
    ],
    "syl": [
      2,
      2,
      3
    ],
    "gendered": false,
    "seeds": [
      "Ariel",
      "Gabriel",
      "Mikael",
      "Zadkiel",
      "Uriphon",
      "Serahim"
    ],
    "lore": "Angelic names follow the Hebrew-Enochian pattern that gave us Michael, Gabriel and Raphael: a root describing a virtue or an act, closed with <em>-el</em> or <em>-iel</em>, the divine name itself. The suffix is the point — it marks the bearer as a sentence spoken by heaven rather than a person."
  },
  "samurai": {
    "label": "Samurai",
    "genre": [
      "historical",
      "fantasy"
    ],
    "onset": [
      "Aka",
      "Hara",
      "Ishi",
      "Kane",
      "Kuro",
      "Mina",
      "Naga",
      "Oda",
      "Saka",
      "Take",
      "Toku",
      "Ume",
      "Yama",
      "Yoshi",
      "Shira",
      "Hoso"
    ],
    "mid": [
      "no",
      "da",
      "mo",
      "ka",
      "ri"
    ],
    "coda": [
      "moto",
      "shige",
      "hiro",
      "kado",
      "zaki",
      "mura",
      "tada",
      "nari",
      "yuki",
      "masa"
    ],
    "syl": [
      2,
      2,
      3
    ],
    "gendered": false,
    "seeds": [
      "Akashige",
      "Kuromoto",
      "Ishihiro",
      "Takezaki",
      "Minanari",
      "Odamura"
    ],
    "lore": "Samurai names are compounds of place and lineage: a clan element drawn from landscape — <em>yama</em> (mountain), <em>kuro</em> (black), <em>ishi</em> (stone) — welded to a given element like <em>-hiro</em>, <em>-shige</em> or <em>-moto</em>. Read literally, most warrior names are a map of where the family stood."
  },
};
