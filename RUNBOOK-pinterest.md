# Pinterest promotion — dndnamer.com

Account: **Vanteez** (Pinterest business, shared with the Etsy printables).
Board: **D&D Character Names**. Pins live in `pins/`, copy in `pins/COPY_v2.json`.

## The one number that matters

Not impressions. **Outbound clicks.** On 2026-10-23 the account's 30-day figures were
25.98k impressions / 661 engagements / **8 outbound clicks**, and every pin sorted by
outbound clicks read `0 (<0.1%)` — while the v1 elf pin alone had 4,741 impressions and
was the #2 pin on the whole account. Reach was never the problem.

**Cause:** v1 pins printed all 18 finished names at legible size. The pin fully answered
the need it created, so there was nothing left to click for.

## Pin design rules (v2)

1. Never show more than **four** finished names.
2. Always state the real number being withheld, and **sample it** — don't assert it.
   `node -e "...generateSet..."` over 20k draws; round the distinct count DOWN.
3. Give a reason the pin physically cannot satisfy: the viewer's own initial, the
   meaning, the pronunciation, the generator itself.
4. Land on a **letter page** where possible — GSC shows every top-clicked page on this
   site is a letter page. That tier is the traffic engine.
5. Keep the Cinzel/parchment typography. It earned the impressions; only the CTA was broken.

## Cadence

Pinterest throttles bulk posting and a 12-pin dump from one account reads as spam.
**2–3 pins per week, spaced.** The point is a steady drip, not a launch.

Queue is in `pins/COPY_v2.json`. Published so far (all 2026-10-23):
- [x] v2-initial-elf, -tiefling, -orc, -dwarf, -drow, -halfling
- [ ] v2-tease-elf, -tiefling, -halfling, -drow, -orc, -dwarf

## Publishing one pin

1. `https://www.pinterest.com/pin-builder/` — it hydrates slowly, wait ~20s and poll
   `document.querySelectorAll('input').length` until non-zero. It sometimes fails to
   hydrate entirely (React #418); reload rather than waiting it out.
2. `find "File upload"` → `file_upload` with the png path (the input is hidden; the
   drop-zone button is NOT a file input).
3. Fill title → description → destination link → alt text. **Use refs, not coordinates** —
   the layout shifts when the title wraps to a third line and coordinate clicks then put
   the URL into the alt-text field.
4. Verify with javascript before publishing:
   `Array.from(document.querySelectorAll('input,textarea')).filter(e=>e.placeholder).map(...)`
5. Check the board reads **D&D Character Names** (it defaults to whatever was used last,
   which is usually an Etsy board).

## Review

Re-check `analytics.pinterest.com/overview` sorted by **Outbound clicks**, not impressions.
If v2 pins are still at 0 outbound clicks after ~30 days with comparable impressions, the
hook is not the problem either — stop making pins and reconsider the channel.
