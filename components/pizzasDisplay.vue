<template>
    <div class="pizzaDisplay" :class="{ modal: showDetails }">
        <p>{{ showDetails }}</p>
        <div class="pizzaDisplay__table">
            <Pizza v-for="pizza in pizzasToDisplay" v-on:choose="changePizza" :pizza="pizza" />
        </div>

        <Teleport to="body">
            <component :is="isAdmin ? pizzaEdit : pizzaDetails" v-if="showDetails" v-on:close-tab="closeTab"
                :pizza="pizzaToChoise">
            </component>
        </Teleport>
    </div>
</template>
<script setup lang="ts">
import { useCategoryStores } from '~/stores/category';
const pizzaEdit = resolveComponent('PizzaEdit');
const pizzaDetails = resolveComponent('PizzaDetails')
const props = defineProps({
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

const emit = defineEmits(['scroll-handle']);
const category = useCategoryStores()
const pizzaChoise = ref(0)
const showDetails = ref(false)
const changePizza = function (payload: any) {
    emit('scroll-handle', true)
    showDetails.value = true

    return pizzaChoise.value = payload
}

const closeTab = function (e: HTMLElement) {
    if (e.classList.contains('wraper') || e.tagName == 'polygon' || e.tagName == 'svg' || e.classList.contains('pizzaDetails__submit') || e.classList.contains('submit')) {

        emit('scroll-handle', false)
        showDetails.value = false
    }
}


const { data, refresh, pending } = await useFetch('/api/pizza')


const pizzaToChoise = computed(() => {
    if (Array.isArray(data.value)) {
        return data.value[pizzaChoise.value]
    }
})
const pizzasToDisplay = computed(
    () => {
        if (Array.isArray(data.value)) {
            return data.value.filter((elem) => elem.tag.includes(category.category)
            )
        }
    }
)






</script>
<style lang="scss">
.pizzaDisplay {


    &__table {
        margin-inline: auto;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
}
</style>