<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
function toggle() {
    colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
<template>
    <button @click="toggle" type="button"
        class="group relative w-9 h-9 flex items-center justify-center text-ink/70 hover:text-gilt transition"
        :aria-label="isDark ? 'Светла тема' : 'Тъмна тема'">
        <ClientOnly>
            <svg viewBox="0 0 24 24" class="w-[18px] h-[18px] transition-transform duration-700 group-hover:rotate-180"
                fill="none" stroke="currentColor" stroke-width="1.2">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 3.5 A8.5 8.5 0 0 1 12 20.5 Z" :fill="isDark ? 'currentColor' : 'none'" />
                <path v-if="!isDark" d="M12 3.5 A8.5 8.5 0 0 0 12 20.5 Z" fill="currentColor" />
            </svg>
        </ClientOnly>
    </button>
</template>
