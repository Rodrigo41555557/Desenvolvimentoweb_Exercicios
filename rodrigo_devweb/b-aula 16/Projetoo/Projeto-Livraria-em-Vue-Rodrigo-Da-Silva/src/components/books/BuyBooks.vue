<script>
import BookTable from "../tables/BookTable.vue";
</script>

<template>
  <h1 class="title">Compre seu Livro</h1>
  <div class="caixa"><BookTable /></div>
</template>

<style scoped>
.title {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
  font-size: 3em;
  margin-bottom: 3em;
  text-align: center;
  color: black;
}
.caixa {
  width: 80%;
  border-radius: 20px;
  padding: 20px;
  margin-left: 10%;
  font-size: 3em;
  text-align: center;
  background-color: whitesmoke;
}
</style>
