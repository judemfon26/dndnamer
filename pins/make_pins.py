#!/usr/bin/env python3
"""Pinterest pins (1000x1500) for dndnamer.com — rendered from the site's own
design system via headless Chrome. No AI credits, infinitely repeatable."""
import json, os, subprocess, sys
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT = os.path.dirname(os.path.abspath(__file__))

FONTS = ("https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700"
         "&family=Nunito+Sans:opsz,wght@6..12,600;6..12,700;6..12,800&display=swap")

def shot(html, name, w=1000, h=1500):
    p = os.path.join(OUT, name + ".html")
    open(p, "w").write(html)
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--hide-scrollbars",
                    f"--window-size={w},{h}", f"--screenshot={os.path.join(OUT, name + '.png')}",
                    "--virtual-time-budget=4000", "file://" + p],
                   check=True, capture_output=True)
    os.remove(p)
    print(f"  ✓ {name}.png")

def name_pin(slug, label, kicker, names, noun, accent="#B45309"):
    cells = "".join(
        f'<li style="font-family:Cinzel,Georgia,serif;font-weight:600;font-size:40px;'
        f'color:#262220;padding:13px 10px;border-bottom:1px solid #E4DDD0">{n}</li>'
        for n in names)
    html = f"""<meta charset="utf-8"><link rel="stylesheet" href="{FONTS}">
<style>*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:1000px;height:1500px;overflow:hidden;background:linear-gradient(165deg,#FBF7EF 0%,#EEF2EA 100%);
font-family:'Nunito Sans',sans-serif;padding:56px 60px 48px;display:flex;flex-direction:column}}</style>
<div style="text-align:center;font-size:26px;letter-spacing:7px;text-transform:uppercase;
 color:{accent};font-weight:700">{kicker}</div>
<div style="font-family:Cinzel,Georgia,serif;font-size:94px;line-height:1.05;text-align:center;
 color:#262220;margin:20px 0 8px">{label}</div>
<div style="text-align:center;font-family:Georgia,serif;font-style:italic;font-size:34px;
 color:#4F6B4C;margin-bottom:26px">built from real {noun} phonetics</div>
<ul style="list-style:none;flex:1;background:#fff;border-radius:26px;padding:20px 36px;overflow:hidden;
 box-shadow:0 18px 50px rgba(51,57,50,.14);column-count:2;column-gap:40px">{cells}</ul>
<div style="margin-top:26px;text-align:center">
 <span style="display:inline-block;background:linear-gradient(180deg,#F5A524,#B45309);color:#fff;
 font-size:34px;font-weight:800;letter-spacing:2px;padding:18px 46px;border-radius:60px;
 box-shadow:0 10px 26px rgba(245,165,36,.4)">Thousands more free →</span>
 <div style="margin-top:18px;font-size:29px;letter-spacing:4px;color:#8b9585;font-weight:700">
 DNDNAMER.COM</div></div>"""
    shot(html, slug)

def tip_pin(slug, kicker, title, bullets, accent="#6D28D9"):
    items = "".join(
        f'<li style="display:flex;gap:22px;align-items:flex-start;margin-bottom:30px">'
        f'<span style="min-width:18px;height:18px;border-radius:50%;background:{accent};margin-top:14px"></span>'
        f'<span style="font-size:38px;line-height:1.4;color:#262220">{b}</span></li>'
        for b in bullets)
    html = f"""<meta charset="utf-8"><link rel="stylesheet" href="{FONTS}">
<style>*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:1000px;height:1500px;background:linear-gradient(165deg,#FBF7EF 0%,#EEF2EA 100%);
font-family:'Nunito Sans',sans-serif;padding:80px 64px;display:flex;flex-direction:column}}</style>
<div style="text-align:center;font-size:26px;letter-spacing:7px;text-transform:uppercase;
 color:{accent};font-weight:700">{kicker}</div>
<div style="font-family:Cinzel,Georgia,serif;font-size:82px;line-height:1.08;text-align:center;
 color:#262220;margin:28px 0 44px">{title}</div>
<ul style="list-style:none;flex:1;background:#fff;border-radius:26px;padding:52px 46px;
 box-shadow:0 18px 50px rgba(51,57,50,.14)">{items}</ul>
<div style="margin-top:36px;text-align:center;font-size:30px;letter-spacing:4px;
 color:#8b9585;font-weight:700">FREE GENERATORS · DNDNAMER.COM</div>"""
    shot(html, slug)

if __name__ == "__main__":
    data = json.load(open(os.path.join(OUT, "pin_data.json")))
    for p in data["name_pins"]:
        name_pin(p["slug"], p["label"], p["kicker"], p["names"], p["noun"])
    for p in data["tip_pins"]:
        tip_pin(p["slug"], p["kicker"], p["title"], p["bullets"])
