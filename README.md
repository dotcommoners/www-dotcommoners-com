# www.dotcommoners.com

The primary marketing site for **[dotcommoners](https://github.com/dotcommoners)** — open-source infrastructure for the commons.

Built with [Astro](https://astro.build) as a fully static, SEO- and AI-search-optimized site (structured data, sitemap, `llms.txt`, canonical URLs, Open Graph).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static output to ./dist
```

- **Site:** https://www.dotcommoners.com
- **Docs:** https://docs.dotcommoners.com
- **Projects:** [Machineuse](https://github.com/dotcommoners/machineuse) · [RevenProx](https://github.com/dotcommoners/revenprox)
- **Contact:** contact@dotcommoners.com

## SEO / GEO

Content is optimized for both classic search and answer engines:
`schema.org` JSON-LD (Organization, WebSite, ItemList, FAQPage), a generated `sitemap-index.xml`, a `robots.txt` that explicitly welcomes answer-engine crawlers, and an `llms.txt` summary for LLM retrieval.
