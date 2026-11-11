<script setup lang="ts">
const siteUrl = useSiteUrl()
const pageUrl = `${siteUrl}/`
const ogImage = `${siteUrl}/og.png`

useSeoMeta({
  title: SITE.title,
  description: SITE.description,
  robots: 'index, follow, max-image-preview:large',

  ogType: 'website',
  ogSiteName: SITE.name,
  ogLocale: 'bg_BG',
  ogUrl: pageUrl,
  ogTitle: SITE.title,
  ogDescription: SITE.description,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Rhodope Clean — професионално почистване в Родопите',

  twitterCard: 'summary_large_image',
  twitterTitle: SITE.title,
  twitterDescription: SITE.description,
  twitterImage: ogImage,
})

// Structured data: the business, its service area and its price list
const offers = PRICING.flatMap(group => group.items.map(item => ({
  '@type': 'Offer',
  name: `Почистване: ${group.title} — ${item.name}${item.detail ? ` (${item.detail})` : ''}`,
  itemOffered: { '@type': 'Service', name: `Почистване — ${item.name}`, serviceType: 'Почистване', areaServed: SITE.areas },
  ...(item.price != null
    ? {
        priceCurrency: 'EUR',
        ...(item.from
          ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: item.price, priceCurrency: 'EUR' } }
          : { price: item.price }),
      }
    : {}),
})))

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${pageUrl}#business`,
      name: SITE.name,
      slogan: SITE.slogan,
      description: SITE.description,
      url: pageUrl,
      telephone: SITE.phone,
      image: ogImage,
      logo: `${siteUrl}/icon-512.png`,
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      address: { '@type': 'PostalAddress', addressRegion: SITE.region, addressCountry: SITE.country },
      areaServed: SITE.areas.map(name => ({ '@type': 'City', name })),
      knowsAbout: ['почистване на апартаменти', 'почистване на къщи за гости', 'почистване на вили', 'абонаментно почистване'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Цени за почистване',
        itemListElement: offers,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${pageUrl}#website`,
      url: pageUrl,
      name: SITE.name,
      inLanguage: 'bg',
      publisher: { '@id': `${pageUrl}#business` },
    },
  ],
}

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }],
})
</script>
<template>
    <div>
        <SectionsHomeHeroSection/>
        <SectionsAboutPodux/>
        <SectionsWhyUs/>
        <SectionsCoverage/>
        <SectionsPricing/>
        <SectionsCallToAction/>
    </div>
</template>
