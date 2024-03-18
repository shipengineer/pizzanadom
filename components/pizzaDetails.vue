<template>
    <div @click="emit('close-tab')" class="wraper"  :id="props.pizza?.id">
        <div class="wraper__flex">
            <div class="pizzaDetails">
                <button @click="emit('close-tab')" class="closeButton">ЗАКРЫТЬ</button>
                <NuxtImg format="webp" :src="'/pizza-img/'+props.pizza?.img+'.jpg'" class="pizzaDetails__img"/>
                <p class="pizzaDetails__name">{{ props.pizza?.name }}</p>
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
                <p class="pizzaDetails__description">{{ props.pizza?.description }}</p>
                

                <button @click ='addToCart' class="pizzaDetails__submit">В корзину {{ summary }}₽</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['close-tab'])
const addToCart = function(){
    const toCart = {
        id:props.pizza?.id,
        size:size.value,
    }
    console.log(toCart)
}



const multiplier = computed(()=>{
    switch (size.value) {
        case 25:
            return 1
        case 30:
            return 2
        case 35:
            return 3
        default:
           return 1
    }
})
const size=ref(25)
const props= defineProps({
    pizza:Object})
const summary = ref(props.pizza?.price[0])
</script>
<style lang="scss">
.wraper{
    z-index: 1000;
    position: absolute;
    
    width: 100%;
    height: 100%;
    background-color: rgba($color: #D3D3D3, $alpha:0.5);
    
    display: flex;
    justify-content: center;
    &__flex{
        background-color: #D3D3D3;
        position: relative;
        display: flex;
        align-self: center;
        .pizzaDetails{
            max-width: 610px;
            position: sticky;
            top:25px;
            margin-inline: auto;
            display:grid;
            grid-template: 25px 350px 25px /350px 200px ;
            
            .closeButton{
                position: absolute;
            }
            .diametr{
                grid-column: 2;
                grid-row: 1;
                display: flex;
            }
            .toppings{
                grid-column: 2;
                grid-row: 2 /span 1;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            }
            &__name{
                grid-row: 3;
                grid-column: 1;
            }
            &__img{
                grid-row: 2;
                grid-column: 1;
                width: 350px;
                height: 350px;
            }
            &__description{
                grid-row: 4;
                grid-column: 1 /span 2  ;
            }
            &__submit{
                grid-column: 2;
                grid-row: 3;
            }
           
        }
    }
 
}</style>