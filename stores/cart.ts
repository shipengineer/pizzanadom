import { defineStore } from 'pinia';
import type { HTMLAttributes } from 'vue';
export const useCartStore = defineStore('cart', () => {
  type pizzaInCart = {
    id: number;
    diametr: number;
    toppings: string[];
    total: number;
  };

  const pizzas = useFetch('/api/pizza');
  const toppings = useFetch('/api/toppings');
  const multiplier = useFetch('/api/multiplier');
  const showCart = ref(false);

  const toggleCart = function (e: Event) {
    const target = e.target as HTMLInputElement;

    if (
      target.classList.contains('svg') ||
      target.classList.contains('cart') ||
      target.classList.contains('counter__number')
    )
      showCart.value = !showCart.value;

  };
  const cart: globalThis.Ref<pizzaInCart[]> = ref([]);
  const orderTotal = computed(() => {
    return cart.value.reduce((acc, elem) => (acc += elem.total), 0);
  });
  const cartToOrder = computed(() => {
    const result: Array<any> = [];
    cart.value.forEach((pizza: pizzaInCart) => {
      const pizzaToPush = pizzas.data.value?.find(
        (elem) => elem.id == pizza.id
      );
      result.push({
        pizza: pizzaToPush,
        toppings: pizza.toppings,
        diametr: pizza.diametr,
        multiplier: multiplier.data.value?.find(
          (elem) => elem.name == pizza.diametr
        )?.value,
        total: pizza.total,
      });
    });

    return result;
  });
  function addToCart(payload: pizzaInCart) {
    return cart.value.push(payload);
  }
  function removeFromCart(payload: any) {
    cart.value = cart.value.filter(
      (elem) => elem.id != payload.id && elem.toppings != payload.toppings
    );
  }
  return {
    cart,
    cartToOrder,
    addToCart,
    removeFromCart,
    showCart,
    toggleCart,
    orderTotal,
  };
});
