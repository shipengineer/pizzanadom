<template>
    <div @click="emit('close-tab',$event.target)" class="wraper"  :id="props.pizza?.id">
        <div class="wraper__flex">
            <div class="pizzaDetails">
                <button  class="closeButton" @click="emit('close-tab',$event.target)"><svg fill="#d3d3d3" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-289.1 -289.1 1068.20 1068.20" xml:space="preserve" stroke="#d3d3d3" stroke-width="49"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg></button>
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
    
    position: absolute;
    
    width: 100%;
    height: 100%;
    background-color: rgba($color: #7f7f80, $alpha:0.8);
    
    display: flex;
    justify-content: center;
    &__flex{
        z-index: 2;
        background-color: #D3D3D3;
        position: relative;
        display: flex;
        align-self: center;
        padding: 20px;
        border-radius: 10px;
        .pizzaDetails{
            max-width: 610px;
            position: sticky;
            top:25px;
            margin-inline: auto;
            display:grid;
            grid-template: 25px 350px 25px /350px 200px ;
            
            .closeButton{
                position: absolute;
                top: -75px;
                right: -75px;
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