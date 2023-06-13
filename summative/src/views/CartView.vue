<script setup>
import { useStore } from "../store/index.js";
const store = useStore();
console.log(store.cart);
</script>

<template>
  <div id="apple">
    <div v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style>
.apple{
  background-image: url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fgrocery-store-checkout&psig=AOvVaw2dkuFeQQNloUjxKtMbahpl&ust=1686780401238000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDa-eegwf8CFQAAAAAdAAAAABAE);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
</style>