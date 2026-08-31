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

// deploy plumbing must exist (ads.txt went missing once — never again)
import fs2 from "fs";
for (const req of ["dist/ads.txt", "dist/CNAME", "dist/sitemap.xml", "dist/robots.txt"]) {
  if (!fs2.existsSync(req)) { console.error("GATE: missing " + req); process.exit(1); }
}
if (!fs2.readFileSync("dist/ads.txt", "utf8").includes("pub-6956651563030013")) {
  console.error("GATE: ads.txt missing publisher id"); process.exit(1);
}
console.log("deploy plumbing present");

// No internal link may point at a page that doesn't exist. (Pruning thin letter
// pages once left 5,075 dead links pointing at removed URLs — never again.)
import path3 from "path";
const routes = new Set();
(function walk(d) {
  for (const e of fs2.readdirSync(d, { withFileTypes: true })) {
    const p = path3.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === "index.html") {
      const r = "/" + path3.relative("dist", d).split(path3.sep).join("/") + "/";
      routes.add(r === "/./" ? "/" : r);
    }
  }
})("dist");
let deadLinks = 0; const deadExamples = new Set();
(function scan(d) {
  for (const e of fs2.readdirSync(d, { withFileTypes: true })) {
    const p = path3.join(d, e.name);
    if (e.isDirectory()) scan(p);
    else if (e.name === "index.html") {
      const html = fs2.readFileSync(p, "utf8");
      for (const m of html.matchAll(/href="(\/[^"#?]*\/)"/g)) {
        if (!routes.has(m[1])) { deadLinks++; deadExamples.add(m[1]); }
      }
    }
  }
})("dist");
if (deadLinks) {
  console.error(`GATE: ${deadLinks} internal links point at non-existent pages, e.g. ` +
    [...deadExamples].slice(0, 5).join(", "));
  process.exit(1);
}
console.log("internal links: all resolve");

// Content-depth floors — direct countermeasure to the "Low value content" verdict.
import path4 from "path";
const floors = [
  [/-names-starting-with-/, 190, "letter"],
  [/\/guides\/.+\//, 450, "article"],
  [/^\/(about|contact|privacy|terms)\/$/, 180, "legal"],
  [/-name-generator\/(male|female|neutral)\/$/, 240, "gender"],
  [/-name-generator\/$/, 200, "hub/race"],  // genre hubs are the low end
];
let thin = [];
(function sweep(d) {
  for (const e of fs2.readdirSync(d, { withFileTypes: true })) {
    const p = path4.join(d, e.name);
    if (e.isDirectory()) sweep(p);
    else if (e.name === "index.html") {
      const route = "/" + path4.relative("dist", d).split(path4.sep).join("/") + "/";
      const clean = route === "/./" ? "/" : route;
      const txt = fs2.readFileSync(p, "utf8")
        .replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
      const w = txt.split(/\s+/).filter(Boolean).length;
      for (const [re, floor, label] of floors) {
        if (re.test(clean)) { if (w < floor) thin.push(`${clean}: ${w}w < ${floor} (${label})`); break; }
      }
    }
  }
})("dist");
if (thin.length) {
  console.error("GATE: thin pages:\n" + thin.slice(0, 12).map(x => " - " + x).join("\n"));
  process.exit(1);
}
console.log("content depth floors met on all pages");
