<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <h1 class="apres">Bem Vindo ao Banco de dados da Livraria Ártica</h1>
    <hr id="hrr" />
    <RouterLink to="/livros">
      <h1 class="consulta">Consulte nosso banco de dados de livros aqui</h1>
    </RouterLink>
  </main>
</template>

<style>
.apres {
  text-align: center;
  color: black;
  padding: 20px;
}
.consulta {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding: 20px;
  font-size: 3em;
  margin-bottom: 3em;
  text-align: center;
  color: Indigo;
}

#hrr {
  border: 3px solid #000;
}
</style>
