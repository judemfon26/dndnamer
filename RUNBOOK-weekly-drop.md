# Weekly content drop — dndnamer.com

Repo: ~/utility-sites/namegen (git remote: judemfon26/dndnamer, push to main auto-deploys
via GitHub Actions to GitHub Pages at https://dndnamer.com). AdSense pub-6956651563030013.

## Standard drop (every run)
1. `cd ~/utility-sites/namegen && git pull --ff-only origin main`
2. `node scripts/promote.js 3`        # moves 3 races backlog -> live
3. `node scripts/quality-gate.js`     # MUST pass; if it fails, fix the offending race data
                                      # (data/races3.js) or demote it back, never ship a failure
4. `node build.js`                    # page count should GROW by roughly 50-70
5. Spot-check: `node --input-type=module -e "import('./lib/generate.js').then(({generateSet})=>console.log(generateSet('<newrace>','neutral','x',10)))"` — names must look like the race's tradition, not noise.
6. Commit with a message listing the promoted races, push origin main.
7. Wait for the Actions run to succeed (`gh run list --limit 1`), then verify live:
   `curl -s https://dndnamer.com/<newrace>-name-generator/ | grep -c adsbygoogle` (expect >=1)
8. Log one line to Command Center: `~/command-center/cc add "dndnamer drop shipped: <races>"`

## When backlog is low (< 6 races left)
Author 6 more into data/backlog.js following the exact schema in data/races.js.
Quality bar: real phonotactic tradition (study existing entries), 4+ seed examples,
lore >= 120 chars with one <em> highlight, gendered only when the tradition is.
Candidates queue: half-elf, goliath variants, wood-elf, high-elf, dark-elf (via VARIANTS),
kobold clans, duergar, svirfneblin, genie, angel, demon, dragon, griffon-rider,
barbarian-clan, wizard, druid, monk, samurai, viking-clan, roman, egyptian, japanese.

## Month-2 roadmap (start ~2026-09-15): new generator TYPES
One per week, using the compound-word engine pattern (see warforged/pirate in races2.js):
tavern names -> guild names -> city names -> ship names -> kingdom names.
Each gets its own hub page + letter pages, e.g. /tavern-name-generator/.
These are separate keyword universes ("tavern name generator" has large volume) — build
them as new race-like entries with genre ["places"] and a new genre hub.

## Guardrails
- NEVER remove or rename existing live URLs (breaks indexed pages).
- NEVER ship if quality-gate fails.
- Keep total growth <= ~80 pages/week (steady growth, not a dump).
- Do not touch AdSense settings, DNS, or lib/template.js SITE config.
- If anything is broken at the start (build fails on main), fix forward or abort and
  log the failure to Command Center — do not force-push or revert history.
