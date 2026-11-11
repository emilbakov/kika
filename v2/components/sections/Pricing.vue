<script setup lang="ts">
type Item = { name: string, detail?: string, price: string, from?: boolean }
const groups: { title: string, roman: string, items: Item[] }[] = [
    {
        title: 'Студия',
        roman: 'I',
        items: [
            { name: 'Студио', price: '30' },
            { name: 'Гарсониера', price: '40' },
        ],
    },
    {
        title: 'Апартаменти',
        roman: 'II',
        items: [
            { name: 'Едностаен', detail: 'с едно спално помещение', price: '50' },
            { name: 'Двустаен', detail: 'с две спални помещения', price: '65' },
            { name: 'Тристаен', detail: 'с три спални помещения', price: '85' },
            { name: 'Многостаен и мезонет', price: 'по запитване' },
        ],
    },
    {
        title: 'Къщи и вили',
        roman: 'III',
        items: [
            { name: 'До 120 м²', detail: 'едноетажни и двуетажни', price: '200', from: true },
            { name: 'До 210 м²', detail: 'едноетажни и двуетажни', price: '275', from: true },
            { name: 'Над 210 м²', price: 'по запитване' },
        ],
    },
]
</script>

<template>
    <section id="pricing" class="py-28 md:py-40 border-t border-ink/10">
        <AtomsContainer>
            <div class="grid grid-cols-12 gap-x-6 gap-y-8">
                <p class="col-span-12 md:col-span-3 eyebrow text-gilt" data-reveal>04 — Цени</p>
                <div class="col-span-12 md:col-span-9">
                    <h2 class="font-display font-light text-[clamp(2.6rem,6vw,6rem)] leading-[0.95] tracking-[-0.02em]" data-reveal>
                        Ясни цени.<br><em class="text-gilt">Без изненади.</em>
                    </h2>
                    <p class="mt-8 text-ink/60 font-light max-w-md" data-reveal :style="{ '--d': (120) + 'ms' }">
                        Свържете се с нас за индивидуална оферта. Всички цени са в евро.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-x-6 mt-20 md:mt-28">
                <div class="col-span-12 lg:col-span-9 lg:col-start-4 space-y-20 md:space-y-24">
                    <div v-for="g in groups" :key="g.title" data-reveal>
                        <div class="flex items-baseline gap-5 pb-5 border-b border-ink">
                            <span class="font-display italic text-gilt text-xl w-8">{{ g.roman }}.</span>
                            <h3 class="font-display text-3xl md:text-4xl">{{ g.title }}</h3>
                        </div>

                        <ul>
                            <li v-for="item in g.items" :key="item.name"
                                class="group flex items-end py-5 md:py-6 border-b border-ink/10">
                                <span class="w-8 hidden sm:block"></span>
                                <span class="sm:pl-5 min-w-0">
                                    <span class="block font-display text-2xl md:text-[1.7rem] leading-tight transition-colors group-hover:text-gilt">
                                        {{ item.name }}
                                    </span>
                                    <span v-if="item.detail" class="block mt-1 text-sm text-ink/50 font-light">
                                        {{ item.detail }}
                                    </span>
                                </span>
                                <span class="leader hidden sm:block"></span>
                                <span class="ml-auto sm:ml-0 pl-4 shrink-0 text-right">
                                    <template v-if="item.price === 'по запитване'">
                                        <span class="font-display italic text-xl md:text-2xl text-ink/70">по запитване</span>
                                    </template>
                                    <template v-else>
                                        <span v-if="item.from" class="eyebrow !text-[0.6rem] text-ink/50 mr-2">от</span>
                                        <span class="font-display text-3xl md:text-4xl tabular-nums">{{ item.price }}</span>
                                        <span class="font-display text-xl md:text-2xl text-gilt ml-1">€</span>
                                    </template>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div data-reveal class="relative border border-ink/20 p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
                        <span class="eyebrow text-gilt pt-2">Специални случаи</span>
                        <p class="font-display text-2xl md:text-3xl font-light leading-snug">
                            За жилища <em>след ремонт</em> или празни, без мебели, горепосочените цени
                            не са актуални — <a href="#contact" class="draw-link text-gilt">обадете се за оферта</a>.
                        </p>
                    </div>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>
