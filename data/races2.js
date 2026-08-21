// Second wave: the highest-search-volume D&D/fantasy races not in the core set.
export const RACES2 = {
  tabaxi: {
    label: "Tabaxi", genre: ["dnd"],
    onset: ["Cloud","Jade","Skit","Whis","Purr","Mist","Swift","Night","Sand","Dust","Ember","Quick","Silent","Shadow","Amber","Rust","Flick","Pounce"],
    mid: ["on","er","ing","le","a","i","o"],
    coda: ["paw","claw","tail","whisker","step","leap","pounce","song","dancer","chaser","stalker","prowl","purr","hunter"],
    syl: [2], gendered: false,
    seeds: ["Cloud on the Mountaintop","Jade Shoe","Skit","Whisper","Five Timber","Left-Handed Hummingbird"],
    lore: "Tabaxi names are clan-given descriptive phrases, not words — poetic compounds drawn from a memorable event, an omen, or a trait. A full name reads like a short image (\"Cloud on the Mountaintop\"), and tabaxi shorten it to a one- or two-syllable nickname in everyday use. The register borrows heavily from Mesoamerican naming, where names described rather than labelled."
  },
  goblin: {
    label: "Goblin", genre: ["dnd","fantasy","wow"],
    onset: ["Gnar","Snik","Riz","Grib","Zek","Krik","Nub","Skab","Wort","Yip","Gob","Snag","Fizz","Grit","Blik","Murk","Skig","Nix"],
    mid: ["ik","ub","az","it","og","ug","er","ib"],
    coda: ["nose","tooth","snik","gob","nak","zit","grub","wart","fang","rot","skab","bug","git","zap"],
    syl: [2,2,3], gendered: true,
    female: ["ga","iz","na","zi","ka","itch"],
    male: ["nose","tooth","nak","grub","wart","git","zap"],
    seeds: ["Gnarzik","Sniktooth","Rizzgrub","Grib","Zekwart","Yipnose"],
    lore: "Goblin names are short, spiky and faintly disgusting — clipped syllables built on k, z, g and b, usually welded to a crude descriptor. They're insults as often as names, and goblins swap them freely when one sticks better. The comedy is the point: a goblin called Sniktooth earned it."
  },
  kobold: {
    label: "Kobold", genre: ["dnd"],
    onset: ["Ark","Dek","Gar","Kip","Meep","Nal","Orn","Rask","Sniv","Tik","Vok","Yip","Zar","Grik","Skiv","Deth"],
    mid: ["ik","ar","el","ir","ok","ur","an"],
    coda: ["tik","nar","rik","ok","ith","az","ux","esk","ar","ip","ekk","olt"],
    syl: [2,2,3], gendered: true,
    female: ["ka","ni","sa","ith","la","ee"],
    male: ["tik","nar","rik","ok","az","ux","olt"],
    seeds: ["Arktik","Meep","Deknar","Sniv","Yiprik","Vokoz"],
    lore: "Kobold names are draconic phonology shrunk down — the same hard k, th and z sounds as dragonborn, but compressed into one or two clipped syllables. Kobolds revere dragons and name themselves in imitation, which produces something that sounds like a very small creature doing a very large accent."
  },
  aasimar: {
    label: "Aasimar", genre: ["dnd"],
    onset: ["Ara","Cael","Dawn","Eli","Gab","Hal","Isra","Lum","Mika","Nath","Ori","Rae","Sera","Thal","Uri","Zeph","Sol","Aur"],
    mid: ["ri","tha","el","na","mi","la","se","va"],
    coda: ["iel","ael","riel","phon","dawn","light","eth","ara","ion","us","aim","ora"],
    syl: [2,3,3], gendered: true,
    female: ["iel","ara","eth","ora","ael","ina"],
    male: ["iel","ion","us","phon","aim","ael"],
    seeds: ["Ariel","Caelum","Seraphiel","Uriel","Dawnbringer","Mikael"],
    lore: "Aasimar names carry celestial weight — they lean on the Hebrew angelic suffix -el (\"of God\"), long open vowels, and light imagery. The result sits deliberately close to real angelic names (Uriel, Gabriel, Raphael) without copying them, giving aasimar the sound of something descended rather than born."
  },
  firbolg: {
    label: "Firbolg", genre: ["dnd","druid"],
    onset: ["Bram","Caer","Dun","Fal","Gorm","Hae","Loch","Mor","Nuall","Oak","Rowan","Tarn","Thal","Wyn","Bir","Fen"],
    mid: ["a","o","ea","ui","ea","ar","en"],
    coda: ["wood","moss","stone","root","glen","fell","holt","mire","bark","thorn","brook","hollow","dale"],
    syl: [2], gendered: false,
    seeds: ["Bramblewood","Caerfell","Duinmoss","Rowanroot","Gormstone","Fenhollow"],
    lore: "Firbolg names read like places, because to a firbolg the distinction barely exists. They compound a Gaelic-tinged first element with a landscape feature — wood, moss, stone, hollow — which is how a people who consider themselves part of the forest would name themselves. Soft, slow and unhurried in the mouth."
  },
  genasi: {
    label: "Genasi", genre: ["dnd"],
    onset: ["Ash","Cin","Ember","Flint","Gale","Ig","Pyr","Quar","Sear","Tor","Zeph","Bris","Cur","Ond","Tide","Vor","Terra","Cael"],
    mid: ["a","i","el","ar","on","ur","ia"],
    coda: ["ara","ith","on","ax","ire","us","ana","eth","or","ya","al","ux"],
    syl: [2,3,3], gendered: true,
    female: ["ara","ana","ya","ith","ia","eth"],
    male: ["on","ax","us","or","al","ux"],
    seeds: ["Ashara","Pyron","Zephyra","Emberith","Torax","Galeus"],
    lore: "Genasi names encode an element. Fire genasi take names with hard, bright consonants and -ax or -ire endings; water genasi take flowing liquids and open vowels; air genasi favour sibilants; earth genasi favour heavy stops. The elemental root usually sits at the front of the name, so you hear what someone is before you hear who."
  },
  goliath: {
    label: "Goliath", genre: ["dnd"],
    onset: ["Aukan","Eglath","Gae","Ilikan","Kavaki","Keo","Lo","Manneo","Nalla","Orilo","Paavu","Tha","Uthal","Vaunea","Thotham","Kuhrin"],
    mid: ["ki","tha","va","na","lo","ku","ra"],
    coda: ["kan","thal","vak","nea","tham","lo","rin","ath","uma","ki","van"],
    syl: [2], gendered: false,
    seeds: ["Aukan","Eglath","Kavaki","Thotham","Vaunea","Ilikan"],
    lore: "Goliath names come in three parts: a birth name, a nickname earned through deeds, and a clan name. The birth names are long and vowel-rich with a rolling three-or-four-syllable rhythm, and they carry no gender — goliath culture judges by accomplishment, not by who you were born as. The nickname is the one that actually gets used."
  },
  warforged: {
    label: "Warforged", genre: ["dnd"],
    onset: ["Bul","Crag","Dent","Ferro","Gird","Hammer","Iron","Lock","Mend","Nail","Plate","Rivet","Sever","Tor","Vault","Wrench","Bolt","Anvil"],
    mid: ["er","on","ic","al","um","ard"],
    coda: ["wall","edge","hammer","bolt","gear","plate","forge","shard","spike","clamp","vice","brand","strike"],
    syl: [2], gendered: false,
    seeds: ["Bulwark","Ironhammer","Rivet","Crag","Dent","Lockplate"],
    lore: "Warforged aren't given names — they take them, usually from a function they performed or a trait others noticed. The result is blunt and industrial: single English nouns, or two welded together. A warforged called Bulwark held a line; one called Dent didn't dodge. There's no gender in the naming because there's no gender in the construction."
  },
  "yuan-ti": {
    label: "Yuan-ti", genre: ["dnd"],
    onset: ["Ss","Sith","Zass","Ssa","Hiss","Ophi","Ssur","Vess","Zeh","Ssla","Nax","Sesh","Ssz","Vipe","Zar"],
    mid: ["ss","zi","tha","ss","ar","eh","is"],
    coda: ["issk","assh","ath","sik","eth","ora","uss","iss","akk","zeh","ith"],
    syl: [2,3,3], gendered: true,
    female: ["issa","ora","eth","ith","assa"],
    male: ["issk","assh","ath","uss","akk"],
    seeds: ["Ssethissk","Zassar","Ophira","Sithuss","Hissoth","Sslaeth"],
    lore: "Yuan-ti names hiss. Doubled s and z dominate every position, and the vowels stay narrow so the sibilants carry. The effect is deliberate — yuan-ti are serpentfolk whose speech is built around a sound humans find instinctively unsettling, and their names are the clearest expression of it."
  },
  vampire: {
    label: "Vampire", genre: ["fantasy","horror"],
    onset: ["Vlad","Lucre","Dra","Mor","Cas","Vesp","Noct","Sang","Lil","Ras","Or","Bel","Stri","Vel","Alu","Carm"],
    mid: ["is","ti","es","or","an","el","ia"],
    coda: ["cula","ith","essa","ard","aine","ius","ora","vane","mir","ella","oth","asz"],
    syl: [3,3,4], gendered: true,
    female: ["essa","ora","ella","aine","ith","ia"],
    male: ["ard","ius","mir","oth","asz","van"],
    seeds: ["Vladimir","Lucretia","Dracula","Carmilla","Nocturne","Belasco"],
    lore: "Vampire names are aristocratic and Eastern European by convention — Romanian, Hungarian and Slavic roots, long three- and four-syllable forms, and a preference for -escu, -ius, -essa and -mir endings. The length is the point: these are names belonging to someone with centuries to say them, and old titles to attach."
  },
  fairy: {
    label: "Fairy", genre: ["fantasy","dnd"],
    onset: ["Pip","Thistle","Dew","Blos","Peri","Twin","Glim","Mote","Nix","Fern","Wren","Cob","Mab","Puck","Til","Bram","Lark","Sil"],
    mid: ["le","er","a","i","en","ow"],
    coda: ["wing","dew","blossom","thistle","spark","wisp","down","fern","bell","glow","frost","petal","song"],
    syl: [2], gendered: false,
    seeds: ["Pipwing","Thistledown","Mustardseed","Peaseblossom","Cobweb","Mab"],
    lore: "Fairy names are tiny compound nouns drawn straight from a hedgerow — a plant, a weather, or a small bright thing, often doubled. Shakespeare set the template in <em>A Midsummer Night's Dream</em> with Peaseblossom, Cobweb and Mustardseed, and English fairy naming has followed it ever since: nothing grand, everything small and specific."
  },
  pirate: {
    label: "Pirate", genre: ["fantasy","historical"],
    onset: ["Black","Red","One","Bloody","Salt","Iron","Mad","Dead","Bones","Grim","Storm","Cut","Bar","Rack","Scur","Hook"],
    mid: ["y","ie","er","a","o"],
    coda: ["beard","eye","hand","jack","tooth","bones","hook","sail","anne","morgan","rackham","flint","teach"],
    syl: [2], gendered: true,
    female: ["anne","mary","bonny","read","jenny","kate"],
    male: ["beard","eye","hand","jack","bones","hook","flint"],
    seeds: ["Blackbeard","Calico Jack","Anne Bonny","Mary Read","Bartholomew Roberts","Long John Silver"],
    lore: "Pirate names are epithets that replaced the real thing — a colour, an injury or a reputation, welded to a body part or a plain given name. Blackbeard was Edward Teach; Calico Jack was John Rackham. The formula survives because it does the job of a wanted poster in two words."
  },
};
