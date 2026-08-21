
const RACES={"elf":{"onset":["Ae","Ael","Al","Ar","Cel","Ela","El","Fae","Fi","Gal","Il","Lae","Leg","Lin","Lor","Mel","Mir","Nae","Nim","Ri","Sil","Tha","Thra","Va","Ya"],"mid":["la","ri","the","na","do","li","ra","ni","va","lo","me","se","ya","wen","dre","ith"],"coda":["riel","wen","dir","las","ion","eth","iel","ien","aur","or","ara","ael","yn","il","ath"],"syl":[2,3,3,4],"gendered":true,"female":["riel","wen","eth","ara","iel","yn","ien"],"male":["dir","las","ion","aur","or","ath","il"]},"dwarf":{"onset":["Bal","Bar","Bof","Bom","Dur","Dwa","Far","Gim","Glo","Gro","Kil","Nal","Nor","Oin","Thor","Thra","Tho","Dain","Bru","Kaz","Mor","Grim"],"mid":["in","ur","ar","or","um","ok","ad","un","ig","ral"],"coda":["in","li","ur","ain","ki","rim","din","grim","borg","nar","dan","rok","mir"],"syl":[2,2,3],"gendered":true,"female":["a","dis","hild","ra","na","wyn"],"male":["in","li","ur","ain","rim","din","nar"]},"orc":{"onset":["Az","Bol","Dur","Gor","Gru","Gul","Kra","Lug","Mog","Naz","Ok","Rag","Sha","Thok","Ug","Ur","Var","Zag","Grish","Muz"],"mid":["ga","ru","na","du","mo","ka","zu","gra","bu","tha"],"coda":["nak","gash","dush","rak","muk","zog","tar","gul","hai","kar","thak","grum","luk"],"syl":[2,2,3],"gendered":true,"female":["ga","sha","na","ka","ra","zha"],"male":["nak","gash","rak","zog","thak","grum","luk"]},"dragonborn":{"onset":["Arj","Bal","Bhar","Don","Ghes","Hesk","Kris","Med","Mehen","Nad","Pand","Patr","Rhog","Sham","Tor","Turn","Vash","Zek","Kepesh","Ophin"],"mid":["ha","as","rin","es","ka","ash","in","ur","ath"],"coda":["ar","ash","inn","kar","rash","thar","ax","ion","aan","esh","urn","oth"],"syl":[2,3,3],"gendered":true,"female":["ann","ala","ira","esh","ith","ara"],"male":["ar","ash","kar","thar","ax","urn","oth"]},"tiefling":{"onset":["Ak","Am","Bar","Cri","Dam","Ea","Hel","Iad","Kai","Lea","Mel","Mor","Nem","Ori","Pel","Rie","Sko","Ther","Val","Zar","Mal","Xa"],"mid":["me","na","ri","tha","lo","se","va","kri","zi","mo"],"coda":["nos","kos","ris","thus","zar","iel","eth","ax","or","ia","us","yn"],"syl":[2,3,3],"gendered":true,"female":["ia","eth","ris","iel","ana","yn"],"male":["nos","kos","thus","zar","ax","or","us"]},"halfling":{"onset":["Al","Bil","Ban","Cor","Dro","Eve","Fro","Ger","Hil","Lid","Mer","Mil","Nes","Ose","Per","Pip","Rose","Sam","Ted","Wil","Bung","Fal"],"mid":["do","de","li","bo","ri","ge","co","mi","fa"],"coda":["ic","o","le","by","don","wise","foot","buck","tuck","ger","win","cot"],"syl":[2,3],"gendered":true,"female":["a","ie","y","lda","rose","na"],"male":["o","ic","by","don","ger","win"]},"human_nordic":{"onset":["Ast","Bjor","Ei","Erl","Frey","Gun","Hal","Har","Ing","Jor","Kje","Leif","Mag","Ol","Rag","Sig","Skj","Sten","Thor","Ulf","Vig","Ylv"],"mid":["var","dis","borg","gar","hild","mund","stein","valdr","rik"],"coda":["ar","son","sen","dis","hild","borg","gard","ulf","rik","mund","stein","var","ny"],"syl":[2,3],"gendered":true,"female":["dis","hild","borg","ny","rid","veig","run"],"male":["ar","son","ulf","rik","mund","stein","var"]},"human_celtic":{"onset":["Aed","Aoi","Bran","Bri","Cael","Cia","Con","Dei","Don","Ea","Fin","Gwe","Ir","Lio","Mae","Mor","Nia","Oi","Rho","Ron","Sea","Tea"],"mid":["dh","gh","bh","nn","ll","rr","ai","ea","io"],"coda":["an","in","ach","aid","aine","wen","rid","gan","ath","eth","nn","agh"],"syl":[2,3],"gendered":true,"female":["aine","wen","id","a","na","eth"],"male":["an","in","ach","gan","ath","aid"]},"drow":{"onset":["Ala","Bri","Dri","Ely","Fae","Ilv","Jhael","Mal","Nal","Phar","Qui","Ril","Sza","Tri","Vier","Xull","Yas","Zar","Vel","Nym"],"mid":["za","ry","thi","na","ael","in","ra","va","ss"],"coda":["ice","iss","ryn","dra","zzt","une","ael","yl","ath","kra","ynn","ara"],"syl":[2,3,3],"gendered":true,"female":["ice","iss","ynn","ara","dra","une"],"male":["zzt","ryn","ael","yl","ath","kra"]},"gnome":{"onset":["Alv","Bim","Boddy","Ceb","Dim","Erky","Fon","Fro","Gim","Glim","Gerb","Jeb","Kel","Nam","Ori","Qua","Roon","Sep","Tor","Wren","Zook","Fizz"],"mid":["ble","dle","gle","kin","nock","ple","tle","wid","zzle","bit"],"coda":["nock","bles","kin","wocket","gen","dle","fizz","spark","cog","widget","bit","top"],"syl":[2,3,3],"gendered":true,"female":["a","ella","ina","ie","enn","bell"],"male":["nock","kin","gen","o","us","ble"]}};


// Deterministic PRNG (mulberry32) — the same URL always renders the same names, so
// pages stay stable across rebuilds. Google distrusts content that churns every crawl.
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
const isVowel = c => "aeiouy".includes(c);

// Glue two parts together, dissolving collisions at the seam so we don't emit
// Ilv+vaiss -> "Ilvvaiss" or Sea+aine -> "Seaaine".
function join(a, b) {
  if (!a) return b;
  const al = a[a.length - 1].toLowerCase(), bf = b[0].toLowerCase();
  if (al === bf) return a + b.slice(1);
  if (isVowel(al) && isVowel(bf) && a.length > 2) return a.slice(0, -1) + b;
  return a + b;
}

// Reject names that read as noise rather than language.
function pronounceable(n) {
  const s = n.toLowerCase();
  if (/(.)\1\1/.test(s))                   return false; // Xullryynn
  if (/[bcdfghjklmnpqrstvwxz]{4}/.test(s)) return false; // 4+ consonants
  if (/[aeiou]{3}/.test(s))                return false; // Eaioaine
  if (!/[aeiouy]/.test(s))                 return false;
  if (/(...)\1/.test(s))                   return false; // repeated trigram
  if (/(..)\1/.test(s))                    return false; // thethe
  if ((s.match(/[aeiou]{2}/g) || []).length > 2) return false;
  // must alternate enough to be sayable: at least one vowel in the first 4 chars
  if (!/[aeiouy]/.test(s.slice(0, 4)))     return false;
  return true;
}

function generateName(raceKey, gender, seedStr) {
  const R = RACES[raceKey];
  const r = rng(hash(seedStr));
  for (let attempt = 0; attempt < 60; attempt++) {
    const syl = pick(r, R.syl);
    let n = pick(r, R.onset);
    for (let i = 0; i < syl - 2; i++) n = join(n, pick(r, R.mid));
    let tail;
    if (R.gendered && gender === "female")    tail = pick(r, R.female);
    else if (R.gendered && gender === "male") tail = pick(r, R.male);
    else                                      tail = pick(r, R.coda);
    n = join(n, tail);
    n = n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
    if (n.length >= 4 && n.length <= 12 && pronounceable(n)) return n;
  }
  return null;
}

function generateSet(raceKey, gender, seedStr, count) {
  const out = new Set();
  let i = 0;
  while (out.size < count && i < count * 80) {
    const n = generateName(raceKey, gender, seedStr + ":" + i);
    if (n) out.add(n);
    i++;
  }
  return [...out];
}

document.addEventListener("click",e=>{
  const b=e.target.closest(".reroll");
  if(b){const g=b.closest(".gen"),n=+g.querySelector(".count").value;
    const list=g.querySelector(".names");
    const names=generateSet(g.dataset.race,g.dataset.gender,"u"+Math.random(),n);
    list.innerHTML=names.map(x=>"<li>"+x+"</li>").join("");return;}
  const li=e.target.closest(".names li");
  if(li){navigator.clipboard&&navigator.clipboard.writeText(li.textContent);
    li.classList.add("copied");setTimeout(()=>li.classList.remove("copied"),700);}
});