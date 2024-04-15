import { NuxtLayout } from '#build/components';
<template>
    <Header />
    <Teleport to="body">
        <button class="bagClass" style="z-index: 1000;">
            <div class="counter">
                <div @click="cart.toggleCart" class="counter__number">{{ cartToOrder.length }}</div>
                <NuxtImg @click="cart.toggleCart" src="/bag.svg" class="svg" />
            </div>
        </button>
    </Teleport>
    <CategoryFilter />
    <PizzasDisplay v-on:scroll-handle="stopScroll" />
    <LazyCart />
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'user'
})
import { ref } from '@vue/runtime-core';
import { useScrollLock } from '@vueuse/core'
const cart = useCartStore()
const { cartToOrder } = storeToRefs(cart)

const userLayout = ref<HTMLElement | null>(null);
const noScroll = useScrollLock(userLayout);
const stopScroll = (payload: boolean) => {
    noScroll.value = payload
}


</script>