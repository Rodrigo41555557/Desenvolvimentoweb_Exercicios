<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <h1>Bem Vindo ao Banco de dados da Livraria NaN</h1>
    <RouterLink to="/livros">
      <h2>Consulte nosso banco de dados aqui</h2>
    </RouterLink>
  </main>
</template>

<style>
main {
  padding-left: 40px;
}
</style>
