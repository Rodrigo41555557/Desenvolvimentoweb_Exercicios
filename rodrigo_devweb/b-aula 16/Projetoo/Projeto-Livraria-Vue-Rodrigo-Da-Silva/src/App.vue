<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/livros">Livros</RouterLink> |
    <RouterLink to="/login">Login</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
  background-color: #bd89a3;
}

header {
  height: 10%;
  background: linear-gradient(to right, #77003c 0%, indigo 100%);
  color: whitesmoke;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

main {
  padding: 10px;
}
</style>
