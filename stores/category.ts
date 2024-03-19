// stores/counter.js
import { defineStore } from 'pinia';

export const useCategoryStores = defineStore('category', () => {
  const category = ref('all');
  function setCategory(payload: string) {
    category.value = payload;
  }

  return { category, setCategory };
});
