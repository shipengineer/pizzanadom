<template>
    <div class="toppings">
        <div v-for="top in data" class='topping' @change="emit('update-toppings', selectedTopings)">
            <input :name="top.name + props.pizzaId" :id="top.name + props.pizzaId" type="checkbox"
                :value="top.price + '+' + top.name" v-model="selectedTopings">
            <label :for="top.name + props.pizzaId">
                <div :class="{ checked: selectedTopings.includes(top.price + '+' + top.name) }" class="toppings__name">
                    <NuxtImg width="100" height="100" class="topping__img" :src="/toppings/ + top.img" />
                    <p>{{ top.name }}</p>
                    <p style="font-weight: 600;">{{ top.price * diametrMultiplier }}₽</p>
                </div>
            </label>
        </div>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update-toppings'])
const selectedTopings = ref([])
const { data } = await useFetch('/api/toppings')


const props = defineProps({
    pizzaId: {
        default: 0,
        type: Number
    },
    diametrMultiplier: {
        default: 1,
        type: Number
    }
},
)
</script>
<style lang="scss">
.checked {
    border: 10px orange solid !important;
}

.toppings {
    margin: -2px;
    grid-column: 2;
    grid-row: 2;

    align-self: flex-start;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    overflow: scroll;
    position: relative;
    scrollbar-width: none;


    input {
        display: none;
    }

    &__name {
        width: 100px;
        height: 150px;
        background-color: white;
        border: 2px #d3d3d3 solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.2s;

        p {
            font-size: 14px;
            text-align: center;
            text-wrap: wrap;
            line-height: 20px;
        }

    }
}
</style>