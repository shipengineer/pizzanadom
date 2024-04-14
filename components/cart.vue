<template>
    <div class="cart" @click="cart.toggleCart" :class="{ show: showCart }">

        <div class="pizzasContainer">
            <div v-if="cart.cartToOrder.length" class="item" v-for="item in cart.cartToOrder">
                <NuxtImg format="webp" :src="'/pizza-img/' + item.pizza.img + '.webp'" class="item__img" />
                <p class="item__name">
                <p class="item__total">{{ item.total }}₽</p>{{ item.pizza.name }} <p class="item__describe">
                    {{ item.diametr }} см + <span v-for="top in item.toppings">{{ top }}&nbsp;</span>
                </p>
                <button @click="cart.removeFromCart(item)" class="item__button">Убрать</button></p>

            </div>
            <div v-else>
                А пицц то и нет</div>
            <p v-if="cart.cartToOrder.length" class="orderTotal"> Сумма заказа: {{ cart.orderTotal }}₽</p>
            <button v-if="cart.cartToOrder.length" class="prepareOrder">Оформить заказ</button>

        </div>


    </div>

</template>
<script setup>

const cart = useCartStore()
const { showCart } = storeToRefs(cart)
console.log(showCart)
</script>
<style lang="scss">
.pizzasContainer {
    padding: 20px;
    width: 450px;
    background-color: lightgray;
    height: 100vh;
    overflow-y: scroll;
    scrollbar-width: none;
}

.cart {

    color: black;
    z-index: 3;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: -100vw;
    background-color: rgba(#d3d3d3, 0.5);
    transition: 1s;
    display: flex;
    flex-direction: column;

}

.cart-wraper {
    width: 100vw;
    height: 100vh;
}

.item {

    background-color: white;
    display: grid;
    grid-template: 225px / 1fr 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 10px;

    &__total {
        font-weight: 600;
    }

    &__img {
        grid-column: 1;
        grid-row: 1;

    }

    &__name {
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: rgba(orange, 0.5);
        grid-row: 1;
        grid-column: 2;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        justify-content: center;
    }

    &__describe {
        grid-column: 2;

    }

    &__button {
        grid-column: 2;
        background-color: lightgray;
        border-radius: 15px;
        width: 50%;


    }
}

.prepareOrder {
    padding: 10px;
    width: fit-content;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
}

@media screen and (max-width : 720px) {
    .item{
        grid-template: 225px / 100px 220px;
        *{
            width: auto;
        }
    }
    .cart{
        left: -100vh;
        .pizzasContainer{
            width: 100%;
        }
    }
    
}
.show {
    left: 0;
}
</style>