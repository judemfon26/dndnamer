#!/usr/bin/env node
// One-shot config: node configure.js <domain> <ca-pub-XXXX>
import fs from "fs";
const [domain, pub] = process.argv.slice(2);
if (!domain) { console.error("usage: node configure.js <domain> [ca-pub-XXXXXXXXXXXXXXXX]"); process.exit(1); }
let t = fs.readFileSync("lib/template.js", "utf8");
t = t.replace(/domain: "[^"]*"/, `domain: "${domain}"`);
if (pub) t = t.replace(/adsenseClient: "[^"]*"/, `adsenseClient: "${pub}"`);
fs.writeFileSync("lib/template.js", t);
console.log(`domain  -> ${domain}`);
console.log(`adsense -> ${pub || "(still placeholder — ads will render as dashed boxes)"}`);
