<script lang="ts" setup>
const links = [
    { href: "/#about", text: "За нас" },
    { href: "/#whyus", text: "Подход" },
    { href: "/#covarage", text: "Обхват" },
    { href: "/#pricing", text: "Цени" },
    { href: "/#contact", text: "Контакт" },
]
</script>

<template>
    <footer class="relative overflow-hidden border-t border-ink/10">
        <AtomsContainer class-name="pt-20 pb-8">
            <div class="grid grid-cols-12 gap-y-12 gap-x-6">
                <div class="col-span-12 md:col-span-5">
                    <p class="eyebrow text-gilt">Where Clean Meets the Peak</p>
                    <p class="mt-6 font-display text-3xl md:text-4xl font-light leading-tight max-w-sm">
                        Почистване, <em class="text-gilt">съобразено</em> с вас и вашето време.
                    </p>
                </div>

                <div class="col-span-6 md:col-span-3 md:col-start-7">
                    <p class="eyebrow text-ink/50">Навигация</p>
                    <ul class="mt-6 space-y-3">
                        <li v-for="l in links" :key="l.href">
                            <NuxtLink :to="l.href" class="draw-link text-ink/80 hover:text-ink">{{ l.text }}</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="col-span-6 md:col-span-3">
                    <p class="eyebrow text-ink/50">Контакт</p>
                    <ul class="mt-6 space-y-3 text-ink/80">
                        <li><a href="tel:+359896011439" class="draw-link hover:text-ink">+359 89 601 1439</a></li>
                        <li>Пампорово</li>
                        <li>Чепеларе</li>
                        <li>Смолян</li>
                    </ul>
                </div>
            </div>
        </AtomsContainer>

        <!-- Oversized wordmark -->
        <div aria-hidden="true" class="select-none pointer-events-none px-3">
            <p class="font-display italic font-light leading-[0.78] text-center text-ink/[0.07] whitespace-nowrap
                      text-[25vw] tracking-[-0.04em] -mb-[3vw]">
                Rhodope
            </p>
        </div>

        <div class="border-t border-ink/10 relative bg-canvas">
            <AtomsContainer class-name="py-5 flex flex-col sm:flex-row justify-between gap-2 eyebrow !text-[0.62rem] text-ink/50">
                <span>&copy; {{ new Date().getFullYear() }} Rhodope Clean — Всички права запазени</span>
                <span>Design — <span class="text-ink/80">Studio Bakov</span></span>
            </AtomsContainer>
        </div>
    </footer>
</template>
