<template>
    <div class="wraper"  :id="props.pizza?.id">
        <div class="wraper__flex">
            <div class="pizzaDetails">
                <button @click="emit('close-tab')" class="closeButton">ЗАКРЫТЬ</button>
                <NuxtImg format="webp" :src="'/pizza-img/'+props.pizza?.img+'.jpg'" class="pizzaDetails__img"/>
                <p>{{ props.pizza?.name }}</p>
                <div class="diametr">
                    <div v-for="dOption in props.pizza?.size" class="diametr__option">
                        <input type="radio"  :name="'size'+props.pizza?.id" :id ="dOption" :value="dOption" v-model="size" class="diametr__input"/>
                        <label :for="dOption" class="diametr__label">
                            {{ dOption }}
                        </label>
                    </div>
                </div>
                <div  class="toppings">
                    <Toppings :pizzaId="props.pizza?.id" :diametrMultiplier="multiplier" />
                </div>
                <p>{{ props.pizza?.description }}</p>
                

                <button @click ='addToCart'>Выбрать</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['close-tab'])
const multiplier = ref(1)
const showToppings = ref(false)
const addToCart = function(){
    const toCart = {
        id:props.pizza?.id,
        size:size.value,
    }
    console.log(toCart)
}
const size=ref(25)
const props= defineProps({
    pizza:Object})
const summary = ref(props.pizza?.price[0])
</script>
<style lang="scss">
.wraper{
    position: absolute;
    top:0px;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    &__flex{
        position: relative;
        .pizzaDetails{
            max-width: 610px;
            position: sticky;
            top:25px;
            margin-inline: auto;
            display: flex;
            .closeButton{
                position: absolute;
            }
            &__img{
                width: 410px;
                height: 410px;
            }
           
        }
    }
 
}</style>