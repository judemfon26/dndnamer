import { RACES as CORE } from "../data/races.js";
import { RACES2 } from "../data/races2.js";
import { RACES3 } from "../data/races3.js";
export const RACES = { ...CORE, ...RACES2, ...RACES3 };

// Deterministic PRNG (mulberry32) — the same URL always renders the same names, so
// pages stay stable across rebuilds. Google distrusts content that churns every crawl.
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function hash(str) {
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
  // reject stem echo: Pounce+pounce, Thistle+thistle
  if (s.length > 6 && s.slice(0, 4) === s.slice(-4)) return false;
  const half = Math.floor(s.length / 2);
  if (half >= 4 && s.slice(0, half) === s.slice(half, half * 2)) return false;
  // must alternate enough to be sayable: at least one vowel in the first 4 chars
  if (!/[aeiouy]/.test(s.slice(0, 4)))     return false;
  return true;
}

export function generateName(raceKey, gender, seedStr) {
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

export function generateSet(raceKey, gender, seedStr, count) {
  const out = new Set();
  let i = 0;
  while (out.size < count && i < count * 80) {
    const n = generateName(raceKey, gender, seedStr + ":" + i);
    if (n) out.add(n);
    i++;
  }
  return [...out];
}
