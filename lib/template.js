export const SITE = {
  name: "DnD Namer",
  tagline: "Fantasy &amp; RPG name generators",
  domain: "dndnamer.com",
  adsenseClient: "ca-pub-6956651563030013",   // Jude's AdSense publisher ID
};

const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

// AdSense auto-relaxed slot. Only emitted when a real client ID is configured, so
// the site is never published with a broken/placeholder ad tag.
function adSlot(pos) {
  if (SITE.adsenseClient.includes("REPLACE")) return `<div class="ad-ph" data-pos="${pos}">ad slot: ${pos}</div>`;
  return `<ins class="adsbygoogle" style="display:block" data-ad-client="${SITE.adsenseClient}"
     data-ad-slot="" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>`;
}

export function page({ title, desc, canonical, h1, body, crumbs = [], schema = null }) {
  const ads = !SITE.adsenseClient.includes("REPLACE");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="https://${SITE.domain}${canonical}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://${SITE.domain}${canonical}">
${ads ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}" crossorigin="anonymous"></script>` : ""}
${schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>` : ""}
<link rel="stylesheet" href="/s.css">
</head>
<body>
<header><a class="logo" href="/">${SITE.name}</a><span class="tag">${SITE.tagline}</span></header>
${crumbs.length ? `<nav class="crumbs">${crumbs.map((c,i)=>i<crumbs.length-1?`<a href="${c.href}">${esc(c.label)}</a>`:`<span>${esc(c.label)}</span>`).join(" › ")}</nav>` : ""}
<main>
<h1>${esc(h1)}</h1>
${adSlot("top")}
${body}
${adSlot("bottom")}
</main>
<footer>
<nav><a href="/">Home</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav>
<p>&copy; ${new Date().getFullYear()} ${SITE.name}. Generated names are free to use in your games, stories and projects.</p>
</footer>
<script src="/g.js" defer></script>
</body>
</html>`;
}
