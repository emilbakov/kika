<template>
    <section id="top" class="relative md:min-h-[min(100svh,1000px)] flex flex-col overflow-hidden">
        <AtomsContainer class-name="relative z-10 flex-1 flex flex-col pt-32 md:pt-40">
            <!-- meta row -->
            <div class="flex items-center justify-between gap-6 fade-in" style="--d:.1s">
                <p class="eyebrow text-gilt">Where Clean Meets the Peak</p>
                <p class="eyebrow text-ink/50 hidden sm:block">Родопи — България</p>
            </div>

            <div class="grid grid-cols-12 gap-x-6 mt-10 md:mt-14">
                <h1 class="rise col-span-12 lg:col-span-10 font-display font-light
                           text-[clamp(3.1rem,12vw,10.5rem)] leading-[0.9] tracking-[-0.025em]">
                    <span><span>Чистотата</span></span>
                    <span><span>на <em class="text-gilt font-normal">природата</em></span></span>
                    <span class="lg:pl-[16vw]"><span>във вашия дом.</span></span>
                </h1>
            </div>

            <div class="grid grid-cols-12 gap-x-6 gap-y-10 mt-12 md:mt-16 pb-36 md:pb-64">
                <div class="col-span-12 md:col-span-6 lg:col-span-4 fade-in" style="--d:.9s">
                    <div class="rule mb-6"></div>
                    <p class="text-lg leading-relaxed text-ink/80 font-light">
                        Професионално почистване на апартаменти, къщи за гости и вили —
                        еднократно или с абонаментно поддържане.
                    </p>
                </div>

                <div class="col-span-12 md:col-span-5 md:col-start-8 lg:col-start-9 lg:col-span-4 fade-in flex flex-col gap-5 md:items-end"
                    style="--d:1.1s">
                    <a href="#contact"
                        class="group relative inline-flex items-center justify-between gap-10 w-full md:w-auto
                               border border-ink/80 px-7 py-5 overflow-hidden">
                        <span class="absolute inset-0 bg-ink origin-bottom scale-y-0 group-hover:scale-y-100
                                     transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)]"></span>
                        <span class="relative eyebrow group-hover:text-canvas transition-colors duration-500">
                            Запазете почистване
                        </span>
                        <svg class="relative w-6 h-3 group-hover:text-canvas transition-all duration-500 group-hover:translate-x-1"
                            viewBox="0 0 24 12" fill="none" stroke="currentColor" stroke-width="1">
                            <path d="M0 6h23M18 1l5 5-5 5" />
                        </svg>
                    </a>
                    <a href="#pricing" class="eyebrow draw-link text-ink/60 hover:text-ink pb-1">
                        Вижте цените
                    </a>
                </div>
            </div>
        </AtomsContainer>

        <!-- Ridgelines -->
        <div aria-hidden="true" class="absolute inset-x-0 bottom-0 pointer-events-none">
            <svg class="ridge w-full h-auto block" viewBox="0 0 1440 360" preserveAspectRatio="none" fill="none">
                <path pathLength="1" class="text-ink/25" stroke="currentColor" stroke-width="1"
                    d="M0 210 L90 186 L160 198 L250 140 L310 162 L405 96 L470 128 L560 70 L640 112 L705 88 L790 134 L880 82 L960 120 L1050 64 L1130 108 L1215 92 L1300 140 L1380 118 L1440 132" />
                <path pathLength="1" class="text-ink/40" stroke="currentColor" stroke-width="1"
                    d="M0 262 L120 236 L210 250 L320 196 L400 222 L510 168 L600 210 L690 182 L780 224 L870 172 L980 214 L1080 178 L1170 226 L1290 190 L1380 214 L1440 204" />
                <path pathLength="1" class="text-gilt" stroke="currentColor" stroke-width="1.2"
                    d="M0 300 C120 286 180 262 280 268 C380 274 430 240 540 236 C640 232 700 262 800 258 C900 254 960 226 1060 230 C1170 234 1240 266 1340 262 C1390 260 1420 256 1440 254" />
                <path pathLength="1" class="text-ink/60" stroke="currentColor" stroke-width="1"
                    d="M0 340 C200 330 330 312 520 318 C700 324 820 300 1000 304 C1160 308 1300 326 1440 318" />
            </svg>
            <div class="absolute bottom-6 inset-x-0">
                <AtomsContainer class-name="flex justify-between eyebrow !text-[0.6rem] text-ink/50 fade-in" style="--d:2.4s">
                    <span>Пампорово · 1650 m</span>
                    <span class="hidden sm:inline">Чепеларе · 1150 m</span>
                    <span>Смолян · 1000 m</span>
                </AtomsContainer>
            </div>
        </div>
    </section>

    <!-- Services marquee -->
    <div class="border-y border-ink/10 py-6 overflow-hidden" aria-hidden="true">
        <div class="marquee flex w-max whitespace-nowrap font-display italic font-light text-3xl md:text-4xl text-ink/80">
            <template v-for="n in 2" :key="n">
                <span v-for="s in services" :key="s + n" class="flex items-center">
                    {{ s }}<span class="mx-10 text-gilt text-xl not-italic">✦</span>
                </span>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const services = [
    'Апартаменти',
    'Къщи за гости',
    'Вили',
    'Абонаментно поддържане',
    'Био препарати',
    'Еднократно почистване',
]
</script>
