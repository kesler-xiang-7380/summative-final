<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
import { auth, firestore } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "@firebase/firestore";

const store = useStore();
const router = useRouter();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");

const registerViaEmail = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("No.");
    return;
  }

  const { user } = await createUserWithEmailAndPassword(
    auth,
    email.value,
    passwordOne.value
  );
  store.user = user;
  router.push("/purchase");
};

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email.value,
      passwordOne.value
    );
    store.user = user;
    router.push("/purchase");
  } catch (error) {
    console.log(error);
  }
};

const registerViaGoogle = async () => {
  const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
  store.user = user;
  const cartDoc = await getDoc(doc(firestore, "carts", user.email));
  if (cartDoc.exists()) {
    store.cart = cartDoc.data().cart;
  } else {
    await setDoc(doc(firestore, "carts", user.email), { cart: [] });
    store.cart = cartDoc.data().cart;
  }
  router.push("/purchase");
};
</script>

<template>
  <div class="auth-container">
    <h1>Login to access our website:</h1>
    <div class="container">
      <h1>Register/Login via Google</h1>
      <button @click="registerViaGoogle()">Google</button>
    </div>
    <div>
      <h1>Register via Email</h1>
      <form class="setup" @submit.prevent="registerViaEmail()">
        <input v-model="email" type="email" placeholder="email" />
        <input
          v-model="passwordOne"
          type="password"
          placeholder="Enter Password"
        />
        <input
          v-model="passwordTwo"
          type="password"
          placeholder="Re-enter Password"
        />
        <input type="submit" value="Register" />
      </form>
      <hr />
      <h1>Login via Email</h1>
      <form class="login" @submit.prevent="loginViaEmail()">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="passwordOne" type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  background-image: url(https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  gap: 5rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: antiquewhite;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.setup,
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container {
  text-align: center;
}
</style>
