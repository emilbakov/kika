export default defineEventHandler((event) => {
    const configured = useRuntimeConfig(event).public.siteUrl as string
    const origin = (configured || getRequestURL(event).origin).replace(/\/+$/, '')
    setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
    return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
})
