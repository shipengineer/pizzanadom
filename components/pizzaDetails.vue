<template>
    <div @click="emit('close-tab',$event.target)" class="wraper"  :id="props.pizza?.id">
        <div class="wraper__flex">
            <div class="pizzaDetails">
                <button  class="closeButton" @click="emit('close-tab',$event.target)"><svg fill="#d3d3d3" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-289.1 -289.1 1068.20 1068.20" xml:space="preserve" stroke="#d3d3d3" stroke-width="49"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg></button>
                <NuxtImg format="webp" :src="'/pizza-img/'+props.pizza?.img+'.webp'" class="pizzaDetails__img"/>
                <p class="pizzaDetails__name">{{ props.pizza?.name }}</p>
                <p class="pizzaDetails__description">{{ props.pizza?.description }}</p>
                
                <div class="diametr">
                    <div v-for="dOption in props.pizza?.size" class="diametr__option">
                        <input style="display: none;" type="radio"  :name="'size'+props.pizza?.id" :id ="dOption" :value="dOption" v-model="size" class="diametr__input"/>
                        <label :class="{checked:size==dOption}" :for="dOption" class="diametr__label">
                            {{ dOption }} см
                        </label>
                    </div>
                </div>
                
                    <Toppings :pizzaId="props.pizza?.id" :diametrMultiplier="multiplier" v-on:update-toppings="updateToppings" />
                
                <button  class="pizzaDetails__submit" @click="emit('close-tab',$event.target)"><span v-if="inCart" class="submit" @click ='removeFromCart'>Убрать из корзины</span><span v-else class="submit" @click="addToCart">В корзину {{ toppingsPrice*multiplier+diametrPrice }}₽</span></button>
            </div>
            
            
        </div>
    </div>
</template>
<script setup lang="ts">
const props= defineProps({
    pizza:Object})
const inCart = ref(false)
const emit = defineEmits(['close-tab'])
const cart = useCartStore();
const size=ref(25)
const selectedTopings = ref([])
const toppingsPrice=ref(0)
const diametrPrice = ref(props.pizza?.price[0])

const updateToppings=function(payload: any[]){
    toppingsPrice.value = payload.reduce((a,b)=>a+ Number(b.split('+')[0]),0)
    selectedTopings.value = payload.reduce((a,b)=>[...a,b.split('+')[1]],[])
    
}


const addToCart = function(e:Event){
    
    inCart.value=true
    cart.addToCart({id:props.pizza?.id,diametr:size.value,toppings:selectedTopings.value,total:toppingsPrice.value*multiplier.value+diametrPrice.value})
}
const removeFromCart = function(){
    inCart.value = false
    cart.removeFromCart(props.pizza?.id)
}
const multiplier = computed(()=>{
    switch (size.value) {
        case 25:
        diametrPrice.value =props.pizza?.price[0]
            return 1
        case 30:
        diametrPrice.value =props.pizza?.price[1]

            return 2
        case 35:
        diametrPrice.value =props.pizza?.price[2]

            return 3
        default:
           return 1
    }
})

</script>
<style lang="scss">
.submit{
    display: block;
    width: 100%;
}
.checked{
   border-radius: 10px;
    transition:0.2s
}
.diametr__label{
    border: 5px gray solid;
    transition: 0.2s;
    padding: 2px;
    &:hover{
        cursor: pointer;
    }
}
.wraper{
    
    position: absolute;
    
    width: 100%;
    height: 100%;
    background-color: rgba($color: #7f7f80, $alpha:0.8);
    
    display: flex;
    justify-content: center;
    &__flex{
        width: 700px;
        z-index: 2;
        background-color: #D3D3D3;
        position: relative;
        display: flex;
        align-self: center;
        padding: 20px;
        border-radius: 10px;
    }
}
        .closeButton{
                position: absolute;
                top: -75px;
                right: -75px;
            }
           
            .diametr{

                align-self: flex-start;
                grid-column: 2;
                grid-row: 1;
                display: flex;
                gap: 20px;
                justify-content: center;
                
            }
        
    
    .pizzaDetails{
            position: sticky;
            top:25px;
            display:grid;
            grid-template: 40px 350px 25px /350px 300px ;
            column-gap: 10px;
            &__name{
                grid-row: 3;
                grid-column: 1;
            }
            &__img{
                grid-row: 2;
                grid-column: 1;
                align-self: flex-start;
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
                background-color: orange;
                border-radius: 10px;
                font-weight: 600;
            }
           
        }
    
 
</style>