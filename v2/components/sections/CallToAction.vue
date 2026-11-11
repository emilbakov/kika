<template>
    <section id="contact" class="relative py-28 md:py-44 overflow-hidden border-t border-ink/10">
        <AtomsContainer>
            <div class="grid grid-cols-12 gap-x-6 gap-y-8">
                <p class="col-span-12 md:col-span-3 eyebrow text-gilt" data-reveal>05 — Контакт</p>
                <p class="col-span-12 md:col-span-6 text-ink/60 font-light text-lg" data-reveal :style="{ '--d': (100) + 'ms' }">
                    Свържете се с нас лесно и бързо. Ще отговорим лично
                    и ще подготвим оферта, съобразена с вашия дом.
                </p>
            </div>

            <div class="mt-16 md:mt-24 text-center" data-reveal>
                <h2 class="eyebrow text-ink/50">Обадете се за оферта</h2>
                <a href="tel:+359896011439"
                    class="group inline-block mt-6 font-display font-light leading-[0.9] tracking-[-0.03em]
                           text-[clamp(2.7rem,10vw,10rem)] whitespace-nowrap">
                    <span class="text-ink/40 transition-colors duration-500 group-hover:text-gilt">+359</span>
                    <em class="transition-colors duration-500 group-hover:text-gilt">89 601 1439</em>
                </a>
                <div class="mx-auto mt-10 h-px w-24 bg-gilt"></div>
            </div>

            <div class="mt-20 md:mt-28 grid sm:grid-cols-3 border-t border-ink/15" data-reveal>
                <div class="py-8 sm:pr-8 border-b sm:border-b-0 sm:border-r border-ink/15">
                    <p class="eyebrow text-ink/50">Телефон</p>
                    <a href="tel:+359896011439" class="mt-3 block font-display text-2xl draw-link w-max">+359 89 601 1439</a>
                </div>
                <div class="py-8 sm:px-8 border-b sm:border-b-0 sm:border-r border-ink/15">
                    <p class="eyebrow text-ink/50">Райони</p>
                    <p class="mt-3 font-display text-2xl">Пампорово · Чепеларе · Смолян</p>
                </div>
                <div class="py-8 sm:pl-8">
                    <p class="eyebrow text-ink/50">Услуги</p>
                    <p class="mt-3 font-display text-2xl">Еднократно <em class="text-gilt">&amp;</em> абонаментно</p>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>
