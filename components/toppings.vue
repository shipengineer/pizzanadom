<template>
    <div class="toppings">
        <div v-for="top in toppings" class ='topping' @change="emit('update-toppings',selectedTopings)">
            <input :name="top.name + props.pizzaId" :id="top.name + props.pizzaId" type="checkbox" :value="top.price + '+' + top.name" v-model="selectedTopings">
            <label   :for="top.name + props.pizzaId" ><div :class="{checked:selectedTopings.includes(top.price + '+' + top.name)}" class="toppings__name" ><NuxtImg class="topping__img" src="/toppings/jalapeno.jfif"/><p>{{ top.name }}</p><p style="font-weight: 600;">{{ top.price*diametrMultiplier }}₽</p></div> </label>
        </div>
    </div>
</template>
<script setup lang="ts">
const emit=defineEmits(['update-toppings'])
const selectedTopings=ref([])

const toppings = [
    { name: 'моцарелла', price: 55 },
    { name: 'пепперони', price: 55 },
    { name: 'черри', price: 55 },
    { name: 'бекон', price: 55 },
    { name: 'ветчина', price: 45 },
    { name: 'шампиньоны', price: 45 },
    { name: 'халапеньо', price: 55 },
    { name: 'соленья', price: 55 },
    { name: 'дор блю', price: 65 },
    { name: 'креветки', price: 95 },
    { name: 'ананасы', price: 55 },
  ]
  const props = defineProps({
    pizzaId:{
        default:0,
        type:Number},
    diametrMultiplier:{
        default:1,
        type:Number}
    },
  )
</script>
<style lang="scss">
.checked{
    border: 10px orange solid !important;
}
.toppings{
    margin: -2px;
    grid-column: 2;
        grid-row: 2;
        
    align-self:flex-start ;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    overflow: scroll;
    position: relative;
    scrollbar-width: none;

    .topping{
        
        &__img{
            width: 100px;
            object-fit: cover;
        }
       
    }
    input{
        display: none;
    }
    &__name{
        width: 100px;
        height: 170px;
        background-color: white;
        border: 2px #d3d3d3 solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.2s;
        p{
            font-size: 14px;
        text-align: center;
         text-wrap: wrap;
         line-height: 20px;
            }
        
    }
}</style>