<script setup>
import axios from 'axios';
import { useStore } from "../store";

const store = useStore();
const props = defineProps(["id"]);

const movie = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "f5fc46e0e9d2c42522efbf294b903f7b",
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="$emit('toggleModal')">
      <div class="modal-inner-container">
        <button @click="$emit('toggleModal')">X</button>
        <div v-if="movie">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
          <button @click="store.addToCart(movie.poster_path, movie.title)">Click Me</button>
          <h1>{{ movie.title }}</h1>
          <h2>{{ movie.release_date }}</h2>
          <button @click="store.addToCart(movie.poster_path, movie.title)">Click Me</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 5;
}

.modal-outer-container .modal-inner-container {
  background-color: #3b444b;
  width: clamp(280px, 100%, 900px);
  height: 50vh;
  position: relative;
}

.modal-outer-container .modal-inner-container button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: 1rem;
  border-color: antiquewhite;
  background: #3b444b;
  font-weight: bold;
}

.modal-outer-container .modal-inner-container .icon {
  font-size: 1.25rem;
  color: white;
}

img {
  width: 200px;
}
button{
  color: antiquewhite;
  border-radius: 2vw;
  border: #00000099;
}
</style>