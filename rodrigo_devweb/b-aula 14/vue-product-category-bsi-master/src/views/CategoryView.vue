<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";
import ListCategory from "../components/category/ListCategory.vue";

export default {
  components: { ListCategory },
  data() {
    return {
      currentCategory: {
        id: "",
        description: "",
      },
      editing: false,
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
    ]),
    async save() {
      try {
        const msg = await this.saveCategory(this.currentCategory);
        alert(msg);
        this.editing = false;
        this.currentCategory = {};
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
    async deleteItem(category) {
      try {
        await this.deleteCategory(category.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    prepareToUpdate(category) {
      Object.assign(this.currentCategory, category);
      this.editing = true;
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
  <h1>Cadastro de Categorias</h1>
  <div class="category-form">
    <input type="text" v-model="currentCategory.description" />
    <button @click="save">
      {{ editing ? "Salvar" : "Adicionar" }}
    </button>
  </div>
  <ListCategory
    :categories="categories"
    @delete="deleteItem"
    @edit="prepareToUpdate"
  />
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

.category-form {
  margin: 3% auto;
  width: 70%;
}
tbody tr:nth-child(even) {
  background-color: #ffffff;
}
tbody tr:nth-child(odd) {
  background-color: #c3c3c3;
}
</style>
