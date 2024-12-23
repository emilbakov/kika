<template>
    <section id="covarage" class="pt-20 md:pt-24">
        <AtomsContainer>
            <div class="grid md:grid-cols-2 gap-10 xl:gap-14 relative">
                <div class="md:py-2 lg:py-4 relative">
                    <div class="absolute left-0 top-0 h-full w-full flex justify-end">
                        <span class="flex opacity-20">
                            <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                            <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
                        </span>
                    </div>
                    <div class="relative">
                        <AtomsTitle texte="Покритие" class=""/>
                        <h1 class="text-gray-600 dark:text-gray-300 pt-8 text-4xl font-black">
                           Пампорово - Чепеларе - Смолян 
                        </h1>
                        
                      
                    </div>
                </div>
                <div class="flex md:h-full relative">
                    <div
                            class="absolute z-0 top-1/2  -translate-y-1/2 w-5/6 right-10 h-[calc(80%+20px)] bg-black dark:to-primary blur-2xl">
                        </div>
                    <div
                        class="w-full h-[27rem] sm:h-[30rem] md:h-full flex justify-start md:justify-end relative pb-5">
                        <img src="/images/map.png" alt="Illustratuin about" width="500"
                            class="w-11/12 lg:w-5/6 h-full object-contain ">
                    </div>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>