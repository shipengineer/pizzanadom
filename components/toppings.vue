<template>
    <div class="toppings">
        <div v-for="top in toppings" class ='topping'>
            <input :name="top.name + props.pizzaId" type="checkbox">
            <label :for="top.name + props.pizzaId" >{{ top.name }}&nbsp;<span>{{ top.price*diametrMultiplier }}₽</span> </label>
        </div>
    </div>
</template>
<script setup>
const toppings = [
    { name: 'моцарелла', price: 55 },
    { name: 'пепперони', price: 55 },
    { name: 'черри', price: 55 },
    { name: 'бекон', price: 55 },
    { name: 'ветчина', price: 45 },
    { name: 'шампиньоны', price: 45 },
    { name: 'халапеньо', price: 55 },
    { name: 'соленые огурчики', price: 55 },
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