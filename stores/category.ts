// stores/counter.js
import { defineStore } from 'pinia';

export const useCategoryStores = defineStore('category', () => {
  const category = ref('Все');
  const pizzas = useFetch('/api/pizza');
  const allCategories = computed(() => {
    const result: string[] = [];
    if (pizzas.data.value) {
      pizzas.data.value.map((elem: { tag: string[] }) =>
        result.push(...elem.tag)
      );
    }
    return new Set(result);
  });

  function setCategory(payload: string) {
    category.value = payload;
  }

  return { category, allCategories, setCategory };
});
