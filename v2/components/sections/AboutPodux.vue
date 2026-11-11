<script setup lang="ts">
const amenities = [
    { name: 'Шампоан', note: 'опаковки 30 мл' },
    { name: 'Душ гел', note: 'опаковки 30 мл' },
    { name: 'Сапун за душ и тяло', note: 'опаковки' },
    { name: 'Сапун за ръце', note: 'опаковка' },
]
</script>

<template>
    <section id="about" class="py-28 md:py-40">
        <AtomsContainer>
            <div class="grid grid-cols-12 gap-x-6 gap-y-12">
                <div class="col-span-12 md:col-span-3" data-reveal>
                    <p class="eyebrow text-gilt">01 — За нас</p>
                </div>

                <div class="col-span-12 md:col-span-9">
                    <p data-reveal class="font-display font-light text-[clamp(2rem,4.4vw,4rem)] leading-[1.08] tracking-[-0.01em]">
                        Работим изцяло съобразено с вас и вашето време. Подбираме
                        <em class="text-gilt">най-добрите био препарати</em> — защото домът ви заслужава
                        чистотата на планината.
                    </p>
                </div>
            </div>

            <!-- Amenities -->
            <div class="grid grid-cols-12 gap-x-6 gap-y-10 mt-24 md:mt-36">
                <div class="col-span-12 md:col-span-5 lg:col-span-4" data-reveal>
                    <p class="eyebrow text-ink/50">Допълнителна услуга</p>
                    <h3 class="mt-5 font-display text-4xl md:text-5xl font-light leading-[1.05]">
                        Банята — <em>заредена</em><br> преди гостите.
                    </h3>
                    <p class="mt-6 text-ink/70 font-light leading-relaxed max-w-sm">
                        За още по-пълно обслужване можем да заредим банята с тоалетни принадлежности,
                        закупени от нас при предварително заявяване.
                    </p>
                </div>

                <ul class="col-span-12 md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-6 border-t border-ink/15">
                    <li v-for="(a, i) in amenities" :key="a.name" data-reveal :style="{ '--d': (i * 90) + 'ms' }"
                        class="group grid grid-cols-[3rem_1fr_auto] items-baseline py-6 border-b border-ink/15">
                        <span class="eyebrow text-gilt">{{ String(i + 1).padStart(2, '0') }}</span>
                        <span class="font-display text-2xl md:text-3xl transition-transform duration-500 group-hover:translate-x-2">
                            {{ a.name }}
                        </span>
                        <span class="eyebrow !tracking-[0.2em] text-ink/50">{{ a.note }}</span>
                    </li>
                </ul>
            </div>
        </AtomsContainer>
    </section>
</template>
