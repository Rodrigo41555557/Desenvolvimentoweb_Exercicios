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
    ...mapActions(useCategoryStore, [
      "getAllCategories",
      "saveCategory",
      "deleteCategory",
      "updateCategory",
    ]),
    save() {
      this.saveCategory(this.currentCategory);
    },
    async updateItem(category_id) {
      try {
        await this.updateCategory(category_id);
        alert("Categoria alterada com sucesso");
      } catch (e) {
        alert("That's too bad! erro ao alterar");
      }
    },
    async deleteItem(category_id) {
      try {
        await this.deleteCategory(category_id);
        alert("item excluído com sucesso.");
      } catch (e) {
        alert("That's too bad! erro ao excluir");
      }
    },
  },
  async mounted() {
    try {
      await this.getAllCategories();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <div class="background-categ">
    <h1 class="titulo">Cadastro de Categorias</h1>
    <div class="category-form">
      <input type="text" v-model="currentCategory.description" />
      <button @click="save" id="butao">Adicionar</button>
    </div>
    <div class="category-list">
      <table class="table">
        <thead>
          <tr>
            <th class="text-left">
              <span> <h2>ID</h2> </span>
            </th>
            <th class="text-left">
              <span> <h2>Descrição</h2> </span>
            </th>
            <th class="text-left">
              <span> <h2>Ações</h2> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category of categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.description }}</td>
            <td>
              <button @click="updateItem(category.id)">Update</button>
              <button @click="deleteItem(category.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.category-form input {
  width: 75%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
}

.category-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: rgb(63, 63, 125);
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}

.category-list,
.category-form {
  margin: 3% auto;
  width: 70%;
}
table {
  /* display: table; */
  border-collapse: separate;
  border-color: gray;
  width: 100%;
  border: 4px solid #000;
  border-radius: 15px;
  padding: 10px;
  background-color: #000;
}

th {
  border-bottom: 2px solid #444;
  text-align: center;
}

td {
  padding: 10px;
  border: 2px solid #000;
}

thead tr {
  background-color: #444;
  color: whitesmoke;
}

tbody tr:nth-child(odd) {
  background-color: #c3c3c3;
}
tbody tr:nth-child(even) {
  background-color: #ffffff;
}
.background-categ {
  background-color: #ffffff;
  padding: 3%;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
}

.titulo {
  text-align: center;
}

#butao {
  background-color: #72083d;
}
</style>
