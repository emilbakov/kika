<script setup lang="ts">
// Fade elements marked with [data-reveal] up as they enter the viewport.
let io: IntersectionObserver | null = null

onMounted(() => {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-in'))
    return
  }
  io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in')
        io!.unobserve(e.target)
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
  els.forEach(el => io!.observe(el))
})

onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <div class="grain relative">
    <AppHeader/>
    <main>
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>
