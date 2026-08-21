#!/usr/bin/env node
// Fails (exit 1) if any live race generates poor names or too few letter pages.
import { RACES, generateSet } from "../lib/generate.js";
const bad = [];
for (const key of Object.keys(RACES)) {
  const names = generateSet(key, "neutral", key + "gate", 60);
  if (names.length < 40) bad.push(`${key}: only ${names.length}/60 names generated`);
  const letters = new Set(names.map(n => n[0].toLowerCase()));
  if (letters.size < 4) bad.push(`${key}: only ${letters.size} distinct first letters`);
  for (const n of names) {
    if (n.length > 14 || /(.)\1\1/.test(n.toLowerCase())) { bad.push(`${key}: suspect name "${n}"`); break; }
  }
  const R = RACES[key];
  if (!R.lore || R.lore.length < 120) bad.push(`${key}: lore too thin`);
  if (!R.seeds || R.seeds.length < 4) bad.push(`${key}: needs >=4 seed examples`);
}
if (bad.length) { console.error("QUALITY GATE FAILED:\n" + bad.map(b => " - " + b).join("\n")); process.exit(1); }
console.log(`quality gate passed for ${Object.keys(RACES).length} races`);
