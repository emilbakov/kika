export default defineEventHandler((event) => {
    const configured = useRuntimeConfig(event).public.siteUrl as string
    const origin = (configured || getRequestURL(event).origin).replace(/\/+$/, '')
    setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
})
