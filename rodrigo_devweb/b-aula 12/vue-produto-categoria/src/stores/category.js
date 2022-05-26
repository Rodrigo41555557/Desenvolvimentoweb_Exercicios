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
        const { data } = await axios.get("http://localhost:3022/category");
        this.categories = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async saveCategory(category){
      try {
        const { data } = axios.post('http://localhost.3022/category', category)
        this.categories.push(data)
        return Promise.resolve()
      }catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    }
  },
});
