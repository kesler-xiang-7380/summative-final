<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="header-container">
    <h1>Dave's movie website</h1>
    <button @click="router.push('/login')">Login</button>
  </div>
</template>

<style scoped>
.header-container {
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vw;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
h1 {
  color: grey;
}
button {
  width: 150px;
  height: 50px;
  border: 1vw;
}
</style>
