<template>
    <div class="pizzaDisplay" :class="{modal:showDetails}" >
        <div  class="pizzaDisplay__buttons">
            <button @click = "category = '' ">Все</button>
            <button @click = "category = 'hot' ">Острые</button>
            <button>Вегетарианские</button>
            <button>Отлично для детей</button>
            <p>{{ category }}</p>
        </div>
        <div class="pizzaDisplay__table" >
            <Pizza v-for="pizza in pizzasToDisplay" v-on:choose="changePizza"  :pizza="pizza"/>
        </div>

    <Teleport  to="body">
        <PizzaDetails v-if="showDetails" v-on:close-tab="closeTab" :pizza="pizzaToChoise"/>
    </Teleport>
    </div>
</template>
<script setup lang="ts" >
const emit = defineEmits(['scroll-handle']);

const pizzaChoise = ref(0)
const showDetails = ref(false)
const changePizza=function(payload:any){
    emit('scroll-handle',true)
    showDetails.value=true
        
return pizzaChoise.value=payload
}

const closeTab = function(e:HTMLElement){
    if(e.classList.contains('wraper')){
        emit('scroll-handle',false)
        showDetails.value=false
    }
}

const category = ref('')
const {data, refresh, pending} = await useFetch('/api/pizza')

const pizzasToDisplay =  computed(
    ()=> {
    if(Array.isArray(data.value)){
        return data.value.filter((elem)=>elem.tag.includes(category.value)
    )
}
} 
)
const pizzaToChoise=computed(()=>{
    if(Array.isArray(data.value)){
    return data.value[pizzaChoise.value]}
})
</script>
<style lang="scss">
.pizzaDisplay{
    
   
    &__table{
        margin-inline: auto;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
}




</style>