<script setup>
import { useStore } from "../store/index.js";
const store = useStore();

const removeFromCart = async (index) => {
  await store.removeFromCart(index);
};
</script>

<template>
  <div class="container">
    <div class="container-2">
      <h1>Current purchases:</h1>
    </div>
    <div v-for="(movie, index) in store.cart" :key="index">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
      <button @click="removeFromCart(index)">✖</button>
    </div>
  </div>
</template>

<style scoped>
.container-2{
  text-align: center;
}
.container {
  background-image: url(https://img.freepik.com/free-vector/film-strip-background-with-clapper-board_1017-33456.jpg);
  background-attachment: fixed;
  background-size: 100%;
  min-height: 100vh;
  height: 100%;
  background-repeat: no-repeat;
  align-items: center;  
  color: gray;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>