<template>
    <div class="pizzaEdit">
        <div class="editWraper">
            <NuxtImg sizes="150px " format="webp" :src="'/pizza-img/' + props.pizza.img + '.webp'" />
            <textarea :value="description" class="name" />
            <div class="diametrs">
                <p>Диаметры и цены</p>
                <p v-for="diametr, index in pizza.size" class="diametr"><input type="text" :value="diametr"
                        :name='diametr.toString()'> см за {{ pizza.price[index] }}
                    <button>Удалить</button><button>Изменить</button>
                </p>
            </div>
            <p class="tags">
            <div v-for="tag, index in pizza.tag" class="tag">
                <input v-model="newTags[index]"><button>Удалить метку</button>
            </div>

            </p>
        </div>



    </div>
</template>

<script setup lang="ts">

import type { PizzaType } from '~/types/PizzaType';


const props = defineProps({
    pizza: {
        type: Object as PropType<PizzaType>,
        required: true
    }

})
const description = computed(() => {
    return props.pizza.description
})
const newTags = ref(props.pizza.tag)
</script>


<style lang="scss" scoped>
.pizzaEdit {
    position: absolute;
    top: 150px;
    left: 0;
    width: 720px;
    height: fit-content;

    background-color: rgba($color: grey, $alpha: 1);

    .editWraper {
        display: flex;
        flex-wrap: wrap;

        .diametrs {
            display: flex;
            flex-direction: column;

            .diametr {}
        }

        .name {
            overflow-wrap: break-word;
            text-wrap: balance;
            resize: none;
        }
    }
}
</style>