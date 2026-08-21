# Deploy

## 1. Configure
```
node configure.js yourdomain.com ca-pub-XXXXXXXXXXXXXXXX
npm run build
```

## 2. Ship to Cloudflare Pages (free)
```
npx wrangler login                       # opens browser, Jude approves
npx wrangler pages project create namegen --production-branch main
npx wrangler pages deploy dist --project-name namegen
```

## 3. Point the domain
Cloudflare dash -> Pages -> namegen -> Custom domains -> add the apex + www.
If the domain is registered elsewhere, move nameservers to Cloudflare (free).

## 4. Google Search Console  (THE step that decides whether this earns anything)
- Add the property, verify via the DNS TXT record Cloudflare can set
- Submit https://yourdomain.com/sitemap.xml
- Request indexing on the homepage + 3-4 top pages to prime the crawl

## 5. AdSense
Account is already approved, so: AdSense -> Sites -> Add site -> yourdomain.com.
The ad code is already in every page once configure.js has the ca-pub ID.
Use Auto Ads at first, then hand-place once you see which pages get traffic.
