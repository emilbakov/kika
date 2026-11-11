<script lang="ts" setup>
const { className } = defineProps<{className?:string}>()
</script>
<template>
    <div class="w-full px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto" :class="className">
        <slot/>
    </div>
</template>
