<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";

export default {
  data() {
    return {
      currentCategory: {
        id: "",
        description: "",
      },
    };
  },
  computed: {
    ...mapStores(useCategoryStore),
    ...mapState(useCategoryStore, ["categories"]),
  },
  methods: {
    ...mapActions(useCategoryStore, ["getAllCategories"]),
  },
  mounted() {
    this.getAllCategories();
  },
};
</script>
<template>
  <h1>Cadastro de Categorias</h1>
  <div class="category-form">
    <input type="text" v-model="currentCategory.description" />
    <button>Adicionar</button>
  </div>
  <div class="category-list">
    <table class="table">
      <thead>
        <tr>
          <th class="text-left">
            <span> <h2>ID</h2> </span>
          </th>
          <th class="text-left">
            <span> <h2>Descricao</h2> </span>
          </th>
          <th class="text-left">
            <span> <h2>Acões</h2> </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category of categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.category-form input {
  width: 75%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding-left: 20px;
  font-size: 1.2em;
}

.category-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: fuchsia;
  color: whitesmoke;
  border-radius: 20px;
  border: 0;
}

.category-list {
  margin: 3% auto;
  width: 70%;
}
table {
  /*display: table;*/
  border-collapse: separate;
  border-spacing: 2px;
  border-color: mediumvioletred;
  width: 100%;
}

th {
  border-bottom: 2px solid #222;
  text-align: left;
}

tr:nth-child(odd) {
  background-color: #ccc;
}
</style>
