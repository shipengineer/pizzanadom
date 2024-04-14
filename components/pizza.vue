<template>
    <div @click ="emit('choose',props.pizza?.id)" class="pizza" :id="props.pizza?.id">
        <NuxtImg format="webp" :src="'/pizza-img/'+props.pizza?.img+'.webp'" class="pizza__img"/>
        <p class="pizza__name">{{ props.pizza?.name }}</p>      
        <p>{{ props.pizza?.description }}</p>
        <span class="pizza__price">от {{ props.pizza?.price[0] }} ₽<button class="pizza__button">Выбрать</button></span>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['choose'])
const props= defineProps({
    pizza:Object})
</script>
<style lang="scss">

.pizza{ 
    background-color: lightgray;
    box-shadow: 2px 5px 5px grey;
    padding-right:5px ;
    &:hover{
        cursor: pointer;
    }
    display: grid;
    grid-template: 50px 1fr 40px/250px 1fr;
    width: 500px;
    gap: 10px;
    align-items: center;
    &__name{
        margin-top: 10px;
        font-size: 22px;
        font-weight: 600;
    }
    &__img{
        grid-row: span 3;
        width: 250px;
    }
    &__price{
    justify-self: center;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    font-weight: 600;
        margin-bottom:10px ;
    }
    &__button{
    font-weight: 600;

        height: 40px;
        border-radius: 30px;
        width: 120px;
        background-color: orange;
    }
    

}

</style>