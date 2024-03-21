<template>
    <div class="header-wraper">
        <div class="header">
            <NuxtLink to="/" class="header__logo">Pizzanadom.com</NuxtLink>
            <a href="tel:+79213868443" class="header__phone">тел. 8 921 386-84-43   {{ minutes }}</a>
            <p v-if="hours>9 && (hours < 22&&minutes<31)" class="header__time">Готовим для вас до 21:30</p>
            <p v-else class="header__time">Чистим печь<br>Начнем принимать заказы с 11 утра</p>
           
        </div>
    </div>
</template>
<script setup>
const hours = ref((new Date).getHours());
const minutes = ref((new Date).getMinutes())

</script>
<style lang="scss">
@font-face{
    font-family: 'TildaSemibold';
    src:url('@/public/fonts/TildaSans-Semibold.woff2'),url('@/public/fonts/._TildaSans-Semibold.woff')
}
@font-face{
    font-family: 'TildaRegular';
    src:url('@/public/fonts/TildaSans-Regular.woff2'),url('@/public/fonts/._TildaSans-Regular.woff2')
}
.header-wraper{
    position: relative;
    background-color: lightgrey;
left: 0;
}
.header{
    flex: 0 0 100%;
    max-width: 1200px;
    display: grid;
    grid: 1fr 1fr / 1fr 1fr;
    font-family: 'TildaRegular';
    color: black;
    &__logo{
        &:visited{
            color: black;
        }
    font-family: 'TildaSemibold';
        font-size: 44px;
        text-decoration: none;
    }
    &__time{
        margin: 0;
        font-size: 17px;
    }
    &__phone{
        grid-row: span 2;
       display: flex;
       align-items: center;
        &:visited{
            color: black;
        }
        color: black;
        text-decoration: none;
        font-size: 17px;
    }
    .carticon-img{
    width: 40px;
    height: 40px;
    padding: 18px 20px 22px;
    stroke: #000;
    }
    
}
</style>