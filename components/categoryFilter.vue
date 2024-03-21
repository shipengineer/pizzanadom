<template>
    <div  class="filterCategory" @change="()=>{
        category.setCategory(selectedCategory)}" >
    
            <div v-for='option in options' class="filterCategory__option">
                
                <label  :for="option.value" :class="{selected:option.value==selectedCategory}" > {{ option.name }} <input  type="radio" :id="option.value" :value="option.value" v-model="selectedCategory"   name="category"  v-bind:key="option.value"/></label>
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
    margin-top: 10px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    gap: 10px;
    .selected{
        background-color: #a8a8a8 ;
        border: 3px black solid;
    }
    label{
        &:hover{
            cursor: pointer;
        }
        background-color: #cecece ;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:10px 20px;
        height: 50px;
        border-radius: 10px;
        
    }
    input{
      display: none;
    }
}

</style>