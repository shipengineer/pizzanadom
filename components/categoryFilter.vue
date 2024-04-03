<template>
    <div class="filterCategory" @change="() => {
        setCategory(selectedCategory)
    }">

        <div v-for='option in allCategories' class="filterCategory__option">

            <label :for="option" :class="{ selected: option == category }"> {{ option }} <input type="radio"
                    :id="option" :value="option" v-model="selectedCategory" name="category"
                    v-bind:key="option" /></label>
        </div>

    </div>
</template>
<script setup lang="ts">
import { useCategoryStores } from '~/stores/category';

const categoryStore = useCategoryStores();
const { category, allCategories } = storeToRefs(categoryStore)
const { setCategory } = categoryStore


const selectedCategory = ref('Все')




</script>
<style>
.filterCategory {
    margin-top: 10px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    gap: 10px;

    .selected {
        background-color: #a8a8a8;
        border: 3px black solid;
    }

    label {
        &:hover {
            cursor: pointer;
        }

        background-color: #cecece;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:10px 20px;
        height: 50px;
        border-radius: 10px;

    }

    input {
        display: none;
    }
}
</style>