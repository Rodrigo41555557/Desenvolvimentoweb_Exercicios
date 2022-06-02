<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/categorias">Categorias</RouterLink> |
    <RouterLink to="/produtos">Produtos</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
}

header {
  height: 10%;
  background: linear-gradient(to top, #72083d 0%, #165c74 50%);
  color: whitesmoke;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

main {
  padding: 10px;
  background: #72083d;
}
</style>
