// Import the necessary functions from 'pinia'
import { defineStore } from 'pinia';
import { firestore } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

export const useStore = defineStore('store', {
  state: () => ({
    user: null,
    cart: [],
    counter: 0,
  }),
  actions: {
    async addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });
      this.counter++;
      await setDoc(doc(firestore, "carts", this.user.email), { cart: this.cart });
    }
  }
});
