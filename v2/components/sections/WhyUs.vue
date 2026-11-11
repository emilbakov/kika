<script setup lang="ts">
const principles = [
    {
        n: 'I',
        title: 'Био препарати',
        text: 'Подбираме внимателно препарати, щадящи дома, хората в него и природата около него.',
    },
    {
        n: 'II',
        title: 'Във вашето време',
        text: 'Графикът се съобразява с вас — между гости, преди сезона или когато ви е удобно.',
    },
    {
        n: 'III',
        title: 'Еднократно или абонамент',
        text: 'Гъвкави услуги според индивидуалните нужди — от едно посещение до постоянна грижа.',
    },
]
</script>

<template>
    <section id="whyus" class="bg-ink text-canvas dark:bg-[#1a211d] dark:text-ink py-28 md:py-40 relative overflow-hidden">
        <!-- contour texture -->
        <svg aria-hidden="true" class="absolute -right-40 -top-20 w-[900px] max-w-none opacity-[0.08] text-canvas dark:text-ink"
            viewBox="0 0 600 600" fill="none" stroke="currentColor" stroke-width="0.8">
            <path v-for="i in 12" :key="i"
                :d="`M${300 - i * 22} 300 C${300 - i * 22} ${200 - i * 14}, ${360 + i * 8} ${180 - i * 18}, ${300 + i * 24} ${280 - i * 6} S ${290 + i * 10} ${400 + i * 20}, ${300 - i * 22} 300`" />
        </svg>

        <AtomsContainer class-name="relative">
            <div class="grid grid-cols-12 gap-x-6 gap-y-8">
                <p class="col-span-12 md:col-span-3 eyebrow text-gilt" data-reveal>02 — Подход</p>
                <h2 class="col-span-12 md:col-span-9 font-display font-light text-[clamp(2.6rem,6vw,6rem)] leading-[0.95] tracking-[-0.02em]"
                    data-reveal>
                    Тиха прецизност.<br>
                    <em class="text-gilt">Без компромис.</em>
                </h2>
            </div>

            <div class="grid md:grid-cols-3 mt-20 md:mt-28 border-t border-canvas/15 dark:border-ink/15">
                <article v-for="(p, i) in principles" :key="p.n" data-reveal :style="{ '--d': (i * 120) + 'ms' }"
                    class="pt-10 pb-6 md:pr-10 md:[&:not(:first-child)]:pl-10 md:[&:not(:last-child)]:border-r border-canvas/15 dark:border-ink/15
                           border-b md:border-b-0 last:border-b-0">
                    <span class="font-display italic text-gilt text-2xl">{{ p.n }}.</span>
                    <h3 class="mt-8 font-display text-3xl md:text-[2.1rem] leading-tight">{{ p.title }}</h3>
                    <p class="mt-5 text-canvas/65 dark:text-ink/65 font-light leading-relaxed">{{ p.text }}</p>
                </article>
            </div>
        </AtomsContainer>
    </section>
</template>
