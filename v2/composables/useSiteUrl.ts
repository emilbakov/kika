// Absolute site origin (no trailing slash).
// Set NUXT_PUBLIC_SITE_URL in production (e.g. https://example.bg);
// otherwise falls back to the origin of the current request.
export function useSiteUrl(): string {
    const configured = useRuntimeConfig().public.siteUrl as string
    const url = configured || useRequestURL().origin
    return url.replace(/\/+$/, '')
}
