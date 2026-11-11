<script setup lang="ts">
const places = [
    { name: 'Пампорово', alt: '1650', note: 'Ски курорт' },
    { name: 'Чепеларе', alt: '1150', note: 'Град & курорт' },
    { name: 'Смолян', alt: '1000', note: 'Областен център' },
]
</script>

<template>
    <section id="covarage" class="py-28 md:py-40">
        <AtomsContainer>
            <div class="grid grid-cols-12 gap-x-6 gap-y-8 items-end">
                <p class="col-span-12 md:col-span-3 eyebrow text-gilt" data-reveal>03 — Обхват</p>
                <h2 class="col-span-12 md:col-span-6 font-display font-light text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] tracking-[-0.015em]"
                    data-reveal>
                    Сърцето на <em>Родопите</em>
                </h2>
                <p class="col-span-12 md:col-span-3 text-ink/60 font-light md:text-right" data-reveal :style="{ '--d': (120) + 'ms' }">
                    Работим в три от най-красивите места в планината.
                </p>
            </div>

            <ul class="mt-16 md:mt-24 border-t border-ink/15">
                <li v-for="(p, i) in places" :key="p.name" data-reveal :style="{ '--d': (i * 100) + 'ms' }"
                    class="group relative border-b border-ink/15 overflow-hidden">
                    <span class="absolute inset-0 bg-ink origin-left scale-x-0 group-hover:scale-x-100
                                 transition-transform duration-700 ease-[cubic-bezier(.7,0,.2,1)]"></span>
                    <div class="relative grid grid-cols-12 gap-x-4 items-baseline py-6 md:py-9 md:px-4
                                group-hover:text-canvas transition-colors duration-500">
                        <span class="col-span-2 md:col-span-1 eyebrow text-gilt">{{ String(i + 1).padStart(2, '0') }}</span>
                        <span class="col-span-10 md:col-span-7 font-display font-light text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.02em]
                                     transition-[font-style] group-hover:italic">
                            {{ p.name }}
                        </span>
                        <span class="hidden md:block md:col-span-2 eyebrow opacity-50">{{ p.note }}</span>
                        <span class="col-span-10 col-start-3 md:col-start-auto md:col-span-2 md:text-right font-display text-2xl md:text-3xl">
                            {{ p.alt }}<span class="eyebrow ml-2 opacity-60">m</span>
                        </span>
                    </div>
                </li>
            </ul>
        </AtomsContainer>
    </section>
</template>
