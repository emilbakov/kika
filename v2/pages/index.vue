<script setup lang="ts">
useHead({
  title: 'RHODOPE Clean',
  meta: [
    { name: 'description', content: 'Професионално почистване на апартаменти, къщи за гости и вили.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo3.png' }
  ],
})
</script>
<template>
    <div>
        <SectionsHomeHeroSection/>
        <!-- <SectionsHomeLatestPodcast/>
        <SectionsHomePopularPodcasts/> -->
        <SectionsAboutPodux/>
        <SectionsWhyUs/>
        <SectionsPricing/>
        <SectionsCallToAction/>
    </div>
</template>