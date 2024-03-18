<template>
    <div class="user" ref="el"  >
        <div class="wrapper">
        <Header/>
        <PizzasDisplay v-on:scroll-handle="stopScroll" />
        <slot/>
        </div>
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
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
}
.wrapper{
    
    margin-inline: auto;
    max-width: 1200px;
    scrollbar-width: none;
}
.stopScroll{
    height: 100vh;
    overflow-y: hidden;
}
</style>