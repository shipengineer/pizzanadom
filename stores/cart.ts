import { defineStore } from 'pinia';
type pizzaInCart={
  id:number,
  diametr:number,
  toppings:string[],
}

export const useCartStore =  defineStore('cart', () => {
  const cart:Array<pizzaInCart> = [] 
  function addToCart(payload: pizzaInCart) {
    cart.push(payload)
  }
  function removeFromCart(payload:number){
    return cart.filter(elem => elem.id!=payload)
  }
  return { cart, addToCart };
});
