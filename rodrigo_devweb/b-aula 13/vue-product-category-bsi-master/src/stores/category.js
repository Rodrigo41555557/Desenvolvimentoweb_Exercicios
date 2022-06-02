import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    categories: [],
  }),
  actions: {
    async getAllCategories() {
      try {
        const { data } = await axios.get("http://localhost:4000/category");
        this.categories = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404){
          return Promise.reject("'category' não encontrada!");
        }
      }
    },
    async saveCategory(category) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/category",
          category
        );
        this.categories.push(data);
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async deleteCategory(category_id) {
      try{
        await axios.delete(`http://localhost:4000/category/${category_id}`);
        await this.getAllCategories();
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    }
  },
});
