export const SITE = {
  name: "DnD Namer",
  tagline: "Forge legendary names",
  domain: "dndnamer.com",
  adsenseClient: "ca-pub-6956651563030013",
};

// cache-buster: changes every build so browsers/CDNs pick up new assets
export const BUILD = Date.now().toString(36);

const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

// d20 die logo — inline SVG so it costs zero requests and inherits theme colors.
export const LOGO = `<svg class="logo-die" viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
<defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="var(--acc)"/><stop offset="1" stop-color="var(--acc-deep)"/></linearGradient></defs>
<polygon points="32,2 58,17 58,47 32,62 6,47 6,17" fill="url(#lg)"/>
<polygon points="32,12 49,42 15,42" fill="rgba(255,255,255,.22)"/>
<polygon points="32,2 58,17 49,42 32,12" fill="rgba(255,255,255,.10)"/>
<polygon points="32,2 6,17 15,42 32,12" fill="rgba(0,0,0,.10)"/>
<polygon points="15,42 49,42 58,47 32,62 6,47" fill="rgba(0,0,0,.18)"/>
<text x="32" y="36" text-anchor="middle" font-family="Georgia,serif" font-weight="bold" font-size="17" fill="#fff">20</text>
</svg>`;

const FAVICON = "data:image/svg+xml," + encodeURIComponent(
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><polygon points="32,2 58,17 58,47 32,62 6,47 6,17" fill="#e0651f"/><polygon points="32,12 49,42 15,42" fill="rgba(255,255,255,.25)"/><text x="32" y="37" text-anchor="middle" font-family="Georgia,serif" font-weight="bold" font-size="18" fill="#fff">20</text></svg>`);

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
<link rel="icon" href="${FAVICON}">
<meta name="theme-color" content="#F7F3EC">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://${SITE.domain}${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,800&display=swap">
${ads ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}" crossorigin="anonymous"></script>` : ""}
${schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>` : ""}
<link rel="stylesheet" href="/s.css?v=${BUILD}">
</head>
<body>
<header>
<a class="logo" href="/">${LOGO}<span class="wordmark">DnD<b>Namer</b></span></a>
<span class="tag">${SITE.tagline}</span>
</header>
${crumbs.length ? `<nav class="crumbs">${crumbs.map((c,i)=>i<crumbs.length-1?`<a href="${c.href}">${esc(c.label)}</a>`:`<span>${esc(c.label)}</span>`).join(" › ")}</nav>` : ""}
<main>
<h1>${esc(h1)}</h1>
${body}
</main>
<footer>
<nav><a href="/">Home</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav>
<p>&copy; ${new Date().getFullYear()} ${SITE.name}. Names are free to use in your games, stories and projects.</p>
</footer>
<div id="savedbar" aria-live="polite">
  <button class="saved-toggle">★ <span class="saved-count">0</span> saved</button>
  <div class="saved-panel"><ul id="savedlist" class="names"></ul>
  <button class="copy-all">Copy all</button></div>
</div>
<button id="fab" aria-label="Generate names">🎲 Generate</button>
<script src="/g.js?v=${BUILD}" defer></script>
</body>
</html>`;
}
