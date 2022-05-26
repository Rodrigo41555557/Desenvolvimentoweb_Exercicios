<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header class="rolna">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/categorias">Categorias</RouterLink> |
    <RouterLink to="/produtos">Produtos</RouterLink>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

header {
  height: 10%;
  background-color: darkmagenta;
  color: lightpink;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  padding-top: 1%;
  padding-bottom: 1%;
}

.rolna {
  background: linear-gradient(to left, #72083d 0%, #165c74 100%);
}
</style>
