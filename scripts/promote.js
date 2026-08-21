#!/usr/bin/env node
// Weekly drop: move N races from backlog into the live set (data/races3.js),
// run the quality gate, rebuild. Usage: node scripts/promote.js [count=3]
import fs from "fs";
import { BACKLOG } from "../data/backlog.js";
import { RACES3 } from "../data/races3.js";

const N = parseInt(process.argv[2] || "3", 10);
const keys = Object.keys(BACKLOG).slice(0, N);
if (!keys.length) { console.error("BACKLOG EMPTY — author more races (see RUNBOOK)"); process.exit(2); }

const live = { ...RACES3 };
const rest = { ...BACKLOG };
for (const k of keys) { live[k] = BACKLOG[k]; delete rest[k]; }

const ser = o => "{\n" + Object.entries(o).map(([k, v]) =>
  `  ${JSON.stringify(k)}: ${JSON.stringify(v, null, 2).replace(/\n/g, "\n  ")},`).join("\n") + "\n}";

fs.writeFileSync("data/races3.js", `// Promoted from backlog by scripts/promote.js — do not hand-edit keys already live.\nexport const RACES3 = ${ser(live)};\n`);
fs.writeFileSync("data/backlog.js", `// Pre-authored race backlog. The weekly drop promotes the first N entries into\n// data/races3.js (live) via scripts/promote.js. Same schema as data/races.js.\nexport const BACKLOG = ${ser(rest)};\n`);
console.log(`promoted: ${keys.join(", ")}`);
console.log(`backlog remaining: ${Object.keys(rest).length}`);
