<template>
    <Header />

    <CategoryFilter />
    <PizzasDisplay :is-admin="true" v-on:scroll-handle="stopScroll" />
    <LazyCart />
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})
import { ref } from '@vue/runtime-core';
import { useScrollLock } from '@vueuse/core'
const cart = useCartStore()
const { cartToOrder } = storeToRefs(cart)

const userLayout = ref(null);
const noScroll = useScrollLock(userLayout);
const stopScroll = (payload: boolean) => {
    noScroll.value = payload
}

</script>
<style lang="scss"></style>