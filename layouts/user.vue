<template>
    <div class="user" ref="userLayout">
        <Header />
        <Teleport to="body">
            <button @click="cart.toggleCart" class="bagClass" style="z-index: 1000;">
                <div class="counter">
                    <div class="wraper__counter">{{ cartToOrder.length }}</div>
                    <NuxtImg src="/bag.svg" class="svg" />
                </div>
            </button>
        </Teleport>
        <CategoryFilter />
        <PizzasDisplay v-on:scroll-handle="stopScroll" />
        <LazyCart />
        <slot />

    </div>
</template>
<script setup lang="ts">
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
<style lang="scss">
html {
    scrollbar-width: none;
}

body {
    color: black;
    position: relative;
}

.user {
    scrollbar-width: none;
    background-image: url('@/public/backgrounds/rock.jpg');
    background-size: contain;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.stopScroll {
    height: 100vh;
    overflow-y: hidden;
}

.bagClass {
    background-color: transparent;
    display: block;
    position: absolute;
    margin-left: auto;
    top: 16svh;
    right: 0px;
    transition: 0.25s;

    &:hover {
        transform: scale(1.1);
        transition: 0.25s;

    }

    .wraper {
        position: sticky;
        background-color: transparent;

        &__counter {
            font-size: 30px;
            position: absolute;
            top: 50px;
            color: white;
        }

        img {
            width: 120px;
        }
    }
}
@media screen and  (max-width : 720px) {
    #__nuxt{
        background-color: black;
    }
    .user{
    background-color: black;
    margin-inline:auto;
    width: 320px;
    }
    .filterCategory{
        flex-wrap: wrap;
    }
    .pizzaDisplay__table{
        width: 320px;
      
    }
    .pizza{
        width: 320px;
        grid-template: 1fr  / 250px;
        justify-content: center;
    }
    .wraper__flex{
        width: 100vw;
        justify-content: center;
    }
    
    .pizzaDetails{
        width: 320px;
        height: fit-content;
        *{
            grid-column: 1;
        }
        .diametr{
            grid-row: 1;
        }
        .pizzaDetails__img{
            width: 150px;
            height: auto;
            grid-row: 2;
        }
        grid-template: 35px 150px 30px minmax(30px,100px) 600px 30px / 320px;
        &__name{
            grid-row: 3;
        }
        &__description{
            grid-row: 4;
        }
        .toppings{
            grid-row: 5;
            width: 300px;
            overflow:visible;
            .topping{
                width: 100px;
            }
        }
        &__submit{
            grid-row: 6;
        }
    }
     
    .cart:deep{
        left:-100%;
    }
}

</style>
