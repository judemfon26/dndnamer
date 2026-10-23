#!/usr/bin/env python3
"""Pinterest pins v2 for dndnamer.com.

WHY V2 EXISTS — read before changing the design.
The v1 pins worked on reach and failed on clicks: the elf pin alone earned 4,741
impressions in 30 days (the #2 pin on the whole account) while the entire account
logged 8 outbound clicks. The cause is in the design, not the distribution — v1
printed all 18 finished names at legible size, so the pin fully answered the need
it created. There was no reason left to visit the site.

v2 keeps the typography that earned the impressions and changes only the bargain:
  - never show more than four finished names
  - always state the real number being withheld (verified by sampling, see COUNTS)
  - give a reason the pin physically cannot satisfy (your initial, the meaning,
    the pronunciation, the generator itself)
"""
import json, os, subprocess
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT = os.path.dirname(os.path.abspath(__file__))
FONTS = ("https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700"
         "&family=Nunito+Sans:opsz,wght@6..12,600;6..12,700;6..12,800&display=swap")

BASE = """*{margin:0;padding:0;box-sizing:border-box}
body{width:1000px;height:1500px;overflow:hidden;
background:linear-gradient(165deg,#FBF7EF 0%,#EEF2EA 100%);
font-family:'Nunito Sans',sans-serif;padding:60px 62px 52px;
display:flex;flex-direction:column}"""

def shot(html, name, w=1000, h=1500):
    p = os.path.join(OUT, name + ".html")
    open(p, "w").write(html)
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--hide-scrollbars",
                    f"--window-size={w},{h}",
                    f"--screenshot={os.path.join(OUT, name + '.png')}",
                    "--virtual-time-budget=4000", "file://" + p],
                   check=True, capture_output=True)
    os.remove(p)
    print(f"  ✓ {name}.png")

def cta(label, accent="#B45309"):
    return f"""<div style="padding-top:34px;text-align:center">
<span style="display:inline-block;background:linear-gradient(180deg,#F5A524,{accent});color:#fff;
 font-size:36px;font-weight:800;letter-spacing:1px;padding:20px 48px;border-radius:60px;
 box-shadow:0 10px 26px rgba(245,165,36,.4)">{label}</span>
<div style="margin-top:20px;font-size:29px;letter-spacing:4px;color:#8b9585;font-weight:700">
 DNDNAMER.COM</div></div>"""

def initial_pin(slug, race, letters, total, eg_letter, eg_names, eg_rest, accent="#B45309"):
    """The identity hook: your initial is the reason to click, and it lands on a
    letter page — the tier GSC shows is already this site's traffic engine."""
    have = set(letters)
    chips = "".join(
        f'<span style="display:inline-flex;align-items:center;justify-content:center;'
        f'width:96px;height:96px;margin:9px;border-radius:24px;'
        f'font-family:Cinzel,Georgia,serif;font-size:48px;font-weight:700;'
        + (f'background:#fff;color:#262220;box-shadow:0 6px 16px rgba(51,57,50,.13)'
           if c.lower() in have else
           'background:rgba(255,255,255,.35);color:#C9C2B4')
        + f'">{c}</span>'
        for c in "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    html = f"""<meta charset="utf-8"><link rel="stylesheet" href="{FONTS}">
<style>{BASE}</style>
<div style="text-align:center;font-size:25px;letter-spacing:7px;text-transform:uppercase;
 color:{accent};font-weight:700">D&amp;D Character Names</div>
<div style="font-family:Cinzel,Georgia,serif;font-size:86px;line-height:1.06;text-align:center;
 color:#262220;margin:22px 0 10px">What's Your<br>{race} Name?</div>
<div style="text-align:center;font-family:Georgia,serif;font-style:italic;font-size:33px;
 color:#4F6B4C;margin-bottom:30px">Start with your own initial —<br>every letter has its own list</div>
<div style="text-align:center;padding:0 4px">{chips}</div>
<div style="margin-top:34px;background:#fff;border-radius:26px;padding:30px 38px;
 box-shadow:0 18px 50px rgba(51,57,50,.14);text-align:center">
 <div style="font-size:26px;letter-spacing:4px;text-transform:uppercase;color:{accent};
  font-weight:700;margin-bottom:14px">{eg_letter} &middot; for example</div>
 <div style="font-family:Cinzel,Georgia,serif;font-size:50px;color:#262220;line-height:1.3">{eg_names}</div>
 <div style="font-size:28px;color:#6b6358;margin-top:14px">&hellip;and {eg_rest} more on that letter alone</div></div>
<div style="margin-top:26px;text-align:center;font-size:29px;color:#6b6358;line-height:1.4">
 Built from real {race.lower()} phonetics, not shuffled syllables.</div>
{cta(f"{total} {race.lower()} names →", accent)}"""
    shot(html, slug)

def tease_pin(slug, race, picks, total, accent="#B45309"):
    """Four names with what each one reads as; the rest is explicitly withheld."""
    rows = "".join(
        f'<li style="padding:30px 4px;border-bottom:1px solid #E4DDD0">'
        f'<div style="font-family:Cinzel,Georgia,serif;font-weight:700;font-size:52px;'
        f'color:#262220;line-height:1.1;font-size:58px">{n}</div>'
        f'<div style="font-size:29px;color:#6b6358;margin-top:6px">{t}</div></li>'
        for n, t in picks)
    html = f"""<meta charset="utf-8"><link rel="stylesheet" href="{FONTS}">
<style>{BASE}</style>
<div style="text-align:center;font-size:25px;letter-spacing:7px;text-transform:uppercase;
 color:{accent};font-weight:700">Four of {total}</div>
<div style="font-family:Cinzel,Georgia,serif;font-size:96px;line-height:1.04;text-align:center;
 color:#262220;margin:20px 0 8px">{race}<br>Names</div>
<div style="text-align:center;font-family:Georgia,serif;font-style:italic;font-size:33px;
 color:#4F6B4C;margin-bottom:26px">and what each one reads as</div>
<ul style="list-style:none;background:#fff;border-radius:26px;padding:10px 40px 24px;
 box-shadow:0 18px 50px rgba(51,57,50,.14)">{rows}
<li style="padding:32px 4px 10px;text-align:center;font-size:34px;font-weight:800;
 color:{accent};letter-spacing:1px">+ every other one, free →</li></ul>
{cta("Roll your own, free", accent)}"""
    shot(html, slug)

if __name__ == "__main__":
    d = json.load(open(os.path.join(OUT, "pin_data_v2.json")))
    for p in d["initial_pins"]:
        initial_pin(p["slug"], p["race"], p["letters"], p["total"], p["eg_letter"],
                    p["eg_names"], p["eg_rest"], p.get("accent", "#B45309"))
    for p in d["tease_pins"]:
        tease_pin(p["slug"], p["race"], [tuple(x) for x in p["picks"]], p["total"],
                  p.get("accent", "#B45309"))
