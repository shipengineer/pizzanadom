<template>
    <div  class="filterCategory" @change="()=>{
        console.log(selectedCategory)
        category.setCategory(selectedCategory)}" >
    
            <div v-for='option in options'>
                <input  type="radio" :id="option.value" :value="option.value" v-model="selectedCategory" name="category"  />
                <label :for="option.value" > {{ option.name }} </label>
            </div>
                
        </div>
</template>
<script setup lang="ts">
import { useCategoryStores } from '~/stores/category';

const options = [
    {
        name:'Все',
        value:'all'
    },
    {
        name:'Острое',
        value:'hot'
    },{
        name:'Без мяса',
        value:'meatless'
    },{
        name:'Детям',
        value:'child'
    },
]
const selectedCategory = ref('all')
const category = useCategoryStores()




</script>
<style>
.filterCategory{
    background-color: lightgrey;
}
</style>