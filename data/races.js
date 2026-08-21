// Phonotactic profiles. Each race defines syllable onsets/nuclei/codas so generated
// names are plausible IN THAT STYLE rather than random letter soup. `seeds` are
// canonical examples used to anchor quality; `lore` gives each page unique prose.
export const RACES = {
  elf: {
    label: "Elf", genre: ["dnd","fantasy","lotr"],
    onset: ["Ae","Ael","Al","Ar","Cel","Ela","El","Fae","Fi","Gal","Il","Lae","Leg","Lin","Lor","Mel","Mir","Nae","Nim","Ri","Sil","Tha","Thra","Va","Ya"],
    mid:   ["la","ri","the","na","do","li","ra","ni","va","lo","me","se","ya","wen","dre","ith"],
    coda:  ["riel","wen","dir","las","ion","eth","iel","ien","aur","or","ara","ael","yn","il","ath"],
    syl:   [2,3,3,4], gendered: true,
    female: ["riel","wen","eth","ara","iel","yn","ien"],
    male:   ["dir","las","ion","aur","or","ath","il"],
    seeds: ["Legolas","Galadriel","Elrond","Arwen","Thranduil","Celeborn","Nimrodel","Fingolfin"],
    lore: "Elven names flow with open vowels and liquid consonants — l, r, and n do most of the work, and hard stops are rare. The style descends from Tolkien's Sindarin and Quenya, where names were built from meaningful roots: <em>gal</em> (light), <em>sil</em> (shine), <em>lor</em> (gold). Female names often close on -riel, -wen or -eth; male names on -dir, -las or -ion."
  },
  dwarf: {
    label: "Dwarf", genre: ["dnd","fantasy","lotr"],
    onset: ["Bal","Bar","Bof","Bom","Dur","Dwa","Far","Gim","Glo","Gro","Kil","Nal","Nor","Oin","Thor","Thra","Tho","Dain","Bru","Kaz","Mor","Grim"],
    mid:   ["in","ur","ar","or","um","ok","ad","un","ig","ral"],
    coda:  ["in","li","ur","ain","ki","rim","din","grim","borg","nar","dan","rok","mir"],
    syl:   [2,2,3], gendered: true,
    female: ["a","dis","hild","ra","na","wyn"],
    male:   ["in","li","ur","ain","rim","din","nar"],
    seeds: ["Thorin","Gimli","Balin","Dwalin","Dain","Bombur","Gloin","Nori"],
    lore: "Dwarven names are short, blunt and consonant-heavy — built to be shouted across a forge. Doubled consonants and hard stops (b, d, g, k, th) dominate, and vowels stay tight. Most run two syllables, and the Norse <em>Dvergatal</em> is the ancestor of nearly every dwarf name in modern fantasy."
  },
  orc: {
    label: "Orc", genre: ["dnd","fantasy","wow","lotr"],
    onset: ["Az","Bol","Dur","Gor","Gru","Gul","Kra","Lug","Mog","Naz","Ok","Rag","Sha","Thok","Ug","Ur","Var","Zag","Grish","Muz"],
    mid:   ["ga","ru","na","du","mo","ka","zu","gra","bu","tha"],
    coda:  ["nak","gash","dush","rak","muk","zog","tar","gul","hai","kar","thak","grum","luk"],
    syl:   [2,2,3], gendered: true,
    female: ["ga","sha","na","ka","ra","zha"],
    male:   ["nak","gash","rak","zog","thak","grum","luk"],
    seeds: ["Grishnakh","Ugluk","Azog","Bolg","Gorbag","Lugdush","Shagrat","Muzgash"],
    lore: "Orcish names are guttural and percussive — back-of-the-throat consonants (g, k, kh, z, gh) with clipped vowels. They're designed to sound harsh spoken aloud. Tolkien built the Black Speech to be deliberately unpleasant, and most orc naming since follows that lead: heavy clusters, abrupt endings."
  },
  dragonborn: {
    label: "Dragonborn", genre: ["dnd"],
    onset: ["Arj","Bal","Bhar","Don","Ghes","Hesk","Kris","Med","Mehen","Nad","Pand","Patr","Rhog","Sham","Tor","Turn","Vash","Zek","Kepesh","Ophin"],
    mid:   ["ha","as","rin","es","ka","ash","in","ur","ath"],
    coda:  ["ar","ash","inn","kar","rash","thar","ax","ion","aan","esh","urn","oth"],
    syl:   [2,3,3], gendered: true,
    female: ["ann","ala","ira","esh","ith","ara"],
    male:   ["ar","ash","kar","thar","ax","urn","oth"],
    seeds: ["Arjhan","Balasar","Bharash","Donaar","Ghesh","Heskan","Kriv","Medrash","Mehen","Nadarr"],
    lore: "Dragonborn names carry a draconic weight — hard aspirates (kh, th, sh, gh) and a strong first syllable, as if each name begins with an exhale of flame. In D&D lore a dragonborn's clan name comes first and matters most; personal names are secondary. Names tend to end on a consonant, giving them a finished, declarative sound."
  },
  tiefling: {
    label: "Tiefling", genre: ["dnd"],
    onset: ["Ak","Am","Bar","Cri","Dam","Ea","Hel","Iad","Kai","Lea","Mel","Mor","Nem","Ori","Pel","Rie","Sko","Ther","Val","Zar","Mal","Xa"],
    mid:   ["me","na","ri","tha","lo","se","va","kri","zi","mo"],
    coda:  ["nos","kos","ris","thus","zar","iel","eth","ax","or","ia","us","yn"],
    syl:   [2,3,3], gendered: true,
    female: ["ia","eth","ris","iel","ana","yn"],
    male:   ["nos","kos","thus","zar","ax","or","us"],
    seeds: ["Akmenos","Damakos","Iados","Kairon","Leucis","Melech","Mordai","Skamos","Therai","Zarael"],
    lore: "Tiefling names split two ways: infernal names borrowed from the Nine Hells — sibilant, Greek- and Latin-tinged, ending in -os, -is or -us — and 'virtue names' like Hope, Sorrow or Reverence, chosen by tieflings rejecting their heritage. The infernal style leans on s, z, k and th for a cold, formal edge."
  },
  halfling: {
    label: "Halfling", genre: ["dnd","fantasy","lotr"],
    onset: ["Al","Bil","Ban","Cor","Dro","Eve","Fro","Ger","Hil","Lid","Mer","Mil","Nes","Ose","Per","Pip","Rose","Sam","Ted","Wil","Bung","Fal"],
    mid:   ["do","de","li","bo","ri","ge","co","mi","fa"],
    coda:  ["ic","o","le","by","don","wise","foot","buck","tuck","ger","win","cot"],
    syl:   [2,3], gendered: true,
    female: ["a","ie","y","lda","rose","na"],
    male:   ["o","ic","by","don","ger","win"],
    seeds: ["Bilbo","Frodo","Samwise","Peregrin","Meriadoc","Rosie","Lobelia","Bungo"],
    lore: "Halfling names are warm, homely and faintly rural-English — soft consonants, cheerful open endings, and a fondness for -o on male names. Surnames read like village life: Underhill, Proudfoot, Goodbarrel. The whole register is deliberately unheroic, which is exactly the joke."
  },
  human_nordic: {
    label: "Nordic", genre: ["skyrim","fantasy","viking"],
    onset: ["Ast","Bjor","Ei","Erl","Frey","Gun","Hal","Har","Ing","Jor","Kje","Leif","Mag","Ol","Rag","Sig","Skj","Sten","Thor","Ulf","Vig","Ylv"],
    mid:   ["var","dis","borg","gar","hild","mund","stein","valdr","rik"],
    coda:  ["ar","son","sen","dis","hild","borg","gard","ulf","rik","mund","stein","var","ny"],
    syl:   [2,3], gendered: true,
    female: ["dis","hild","borg","ny","rid","veig","run"],
    male:   ["ar","son","ulf","rik","mund","stein","var"],
    seeds: ["Ragnar","Bjorn","Sigrid","Astrid","Leif","Gunnar","Ylva","Thorstein"],
    lore: "Nordic names are compound words: two meaningful roots welded together. <em>Sig</em> (victory) + <em>rid</em> (rider) gives Sigrid; <em>Thor</em> + <em>stein</em> gives Thorstein. Male names commonly end -ar, -ulf or -stein; female names -dis, -hild, -run or -veig. This is the register Skyrim borrows almost wholesale."
  },
  human_celtic: {
    label: "Celtic", genre: ["fantasy","historical"],
    onset: ["Aed","Aoi","Bran","Bri","Cael","Cia","Con","Dei","Don","Ea","Fin","Gwe","Ir","Lio","Mae","Mor","Nia","Oi","Rho","Ron","Sea","Tea"],
    mid:   ["dh","gh","bh","nn","ll","rr","ai","ea","io"],
    coda:  ["an","in","ach","aid","aine","wen","rid","gan","ath","eth","nn","agh"],
    syl:   [2,3], gendered: true,
    female: ["aine","wen","id","a","na","eth"],
    male:   ["an","in","ach","gan","ath","aid"],
    seeds: ["Aedan","Brannagh","Caoimhe","Fionn","Niamh","Rhoswen","Morrigan","Eirian"],
    lore: "Celtic names lean on lenited consonant pairs — bh, dh, gh, mh — that soften the sound, plus vowel clusters that look impossible and read musically. Irish, Welsh and Scots Gaelic each tilt differently: Welsh loves w as a vowel (Gwen, Rhys), Irish loves the -ach and -aid endings."
  },
  drow: {
    label: "Drow", genre: ["dnd","fantasy"],
    onset: ["Ala","Bri","Dri","Ely","Fae","Ilv","Jhael","Mal","Nal","Phar","Qui","Ril","Sza","Tri","Vier","Xull","Yas","Zar","Vel","Nym"],
    mid:   ["za","ry","thi","na","ael","in","ra","va","ss"],
    coda:  ["ice","iss","ryn","dra","zzt","une","ael","yl","ath","kra","ynn","ara"],
    syl:   [2,3,3], gendered: true,
    female: ["ice","iss","ynn","ara","dra","une"],
    male:   ["zzt","ryn","ael","yl","ath","kra"],
    seeds: ["Drizzt","Malice","Vierna","Briza","Jarlaxle","Quenthel","Zaknafein","Yasraena"],
    lore: "Drow names are elven phonology twisted darker — the same liquid l/r base, but shot through with z, x, ss and doubled consonants that give them a hiss. Drow society is matriarchal, so female names carry the noble weight and often end in -ice, -iss or -ynn."
  },
  gnome: {
    label: "Gnome", genre: ["dnd","fantasy","wow"],
    onset: ["Alv","Bim","Boddy","Ceb","Dim","Erky","Fon","Fro","Gim","Glim","Gerb","Jeb","Kel","Nam","Ori","Qua","Roon","Sep","Tor","Wren","Zook","Fizz"],
    mid:   ["ble","dle","gle","kin","nock","ple","tle","wid","zzle","bit"],
    coda:  ["nock","bles","kin","wocket","gen","dle","fizz","spark","cog","widget","bit","top"],
    syl:   [2,3,3], gendered: true,
    female: ["a","ella","ina","ie","enn","bell"],
    male:   ["nock","kin","gen","o","us","ble"],
    seeds: ["Boddynock","Fonkin","Glim","Erky","Zook","Bimpnottin","Roondar","Quazzle"],
    lore: "Gnome names are playful and machine-adjacent — clattering consonant clusters (zz, ck, gl, sp) that sound like small moving parts. The register is deliberately comic: gnomes in most settings are tinkers and illusionists, and their names carry that whirring, slightly absurd energy."
  },
};

// Cultural / genre variants layered on top of the phonotactic cores above.
export const VARIANTS = {
  elf:  ["wood","high","dark","moon","sun","blood","night","snow","sea","forest"],
  dwarf:["mountain","hill","fire","iron","stone","deep","frost"],
  orc:  ["war","blood","iron","shadow","fire","clan"],
  human_nordic: ["viking","skyrim","norse","warrior","shield-maiden"],
  human_celtic: ["irish","welsh","scottish","gaelic","druid"],
  drow: ["noble","house","underdark"],
  gnome:["forest","rock","deep","tinker"],
};
