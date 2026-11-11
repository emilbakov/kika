<script lang="ts" setup>
const navIsOpen = useState('navIsOpen', () => false)
const scrolled = ref(false)

const navLinks = [
    { text: "За нас", href: "/#about", n: "01" },
    { text: "Подход", href: "/#whyus", n: "02" },
    { text: "Обхват", href: "/#covarage", n: "03" },
    { text: "Цени", href: "/#pricing", n: "04" },
    { text: "Контакт", href: "/#contact", n: "05" },
]

function onScroll() {
    scrolled.value = window.scrollY > 24
}
onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

watch(navIsOpen, (open) => {
    if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        :class="scrolled && !navIsOpen ? 'bg-canvas/85 backdrop-blur-md py-3' : 'py-6'">
        <AtomsContainer>
            <nav class="flex items-center justify-between gap-6 relative z-10">
                <Wordmark @click="navIsOpen = false" />

                <ul class="hidden lg:flex items-center gap-10">
                    <li v-for="item in navLinks" :key="item.href">
                        <NuxtLink :to="item.href" class="eyebrow draw-link pb-1 text-ink/75 hover:text-ink transition">
                            {{ item.text }}
                        </NuxtLink>
                    </li>
                </ul>

                <div class="flex items-center gap-3 sm:gap-5">
                    <a href="tel:+359896011439"
                        class="hidden md:inline-flex eyebrow text-ink/75 hover:text-gilt transition">
                        +359 89 601 1439
                    </a>
                    <span class="hidden md:block w-px h-4 bg-ink/20"></span>
                    <ElementsThemeSwitcher />
                    <button @click="navIsOpen = !navIsOpen" type="button"
                        class="lg:hidden w-9 h-9 flex flex-col items-end justify-center gap-[6px]"
                        :aria-expanded="navIsOpen" aria-label="Меню">
                        <span class="block h-px bg-ink transition-all duration-500"
                            :class="navIsOpen ? 'w-6 translate-y-[3.5px] rotate-45' : 'w-6'"></span>
                        <span class="block h-px bg-ink transition-all duration-500"
                            :class="navIsOpen ? 'w-6 -translate-y-[3.5px] -rotate-45' : 'w-4'"></span>
                    </button>
                </div>
            </nav>
        </AtomsContainer>

        <!-- Mobile: full-screen menu -->
        <div class="lg:hidden fixed inset-0 bg-canvas transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)]"
            :style="{ clipPath: navIsOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)' }">
            <AtomsContainer class-name="h-full flex flex-col justify-end pb-12 pt-28">
                <ul class="space-y-1">
                    <li v-for="(item, i) in navLinks" :key="item.href"
                        class="border-t border-ink/10 last:border-b transition-all duration-700"
                        :class="navIsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        :style="{ transitionDelay: navIsOpen ? `${200 + i * 70}ms` : '0ms' }">
                        <NuxtLink :to="item.href" @click="navIsOpen = false"
                            class="flex items-baseline justify-between py-4">
                            <span class="font-display text-5xl font-light">{{ item.text }}</span>
                            <span class="eyebrow text-gilt">{{ item.n }}</span>
                        </NuxtLink>
                    </li>
                </ul>
                <a href="tel:+359896011439" class="mt-10 font-display italic text-2xl text-gilt">
                    +359 89 601 1439
                </a>
            </AtomsContainer>
        </div>
    </header>
</template>
