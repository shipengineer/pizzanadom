<template>
    <div class="user" ref="el"   >
        <Header/>
        <button  class="bagClass"><div class="wraper"><div class="wraper__counter">{{ 5 }}</div><NuxtImg src="/bag.svg"/></div></button>
        <CategoryFilter />
        <PizzasDisplay v-on:scroll-handle="stopScroll"   />
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
<style lang="scss">
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
.bagClass{
    background-color: transparent;
    display: block;
        position: absolute ;
        margin-left: auto;
        top: 90svh;
        right: 0px;
        transition: 2s;
        &:hover{
            top:calc( 90svh - 70px);
            transition: 2s;
            
        }
        .wraper{
        position: sticky;
        background-color: transparent;
            &__counter{
                font-size: 30px;
               position: absolute;
                top:50px;
                color: white;
            }
            img{
                width: 120px;
            }
        }
    }
</style>
