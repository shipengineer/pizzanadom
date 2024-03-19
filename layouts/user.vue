<template>
    <div class="user" ref="el"  >
        
        <Header/>
        <PizzasDisplay v-on:scroll-handle="stopScroll" />
        <slot/>
        
    </div>
</template>
<script setup lang="ts">
import { ref } from '@vue/runtime-core';
import { useScrollLock } from '@vueuse/core'
const el = ref<HTMLElement | null>(null);
const noScroll = useScrollLock(el);
const stopScroll = (payload:boolean)=>{
    noScroll.value=payload
   
}


</script>
<style>
html{
    scrollbar-width: none;
}
body{
    position: relative;
}
.user{
    scrollbar-width: none;

    background-image: url('@/public/backgrounds/rock.jpg');
    background-size: contain;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.stopScroll{
    height: 100vh;
    overflow-y: hidden;
}
</style>
