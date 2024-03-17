<template>
    <div class="pizza" :id="props.pizza?.id">
        <NuxtImg format="webp" :src="'/pizza-img/'+props.pizza?.img+'.jpg'" class="pizza__img"/>
        <p>{{ props.pizza?.name }}</p>      
        <p>{{ props.pizza?.description }}</p>
        <button @click ="emit('choose',props.pizza?.id)">Выбрать</button>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['choose'])
const props= defineProps({
    pizza:Object})
</script>
<style lang="scss">

.pizza{
    display: grid;
    grid-template: 50px 1fr 25px/250px 1fr;
    width: 500px;
    gap: 10px;
    &__img{
        grid-row: span 3;
        width: 250px;
    }
}
</style>