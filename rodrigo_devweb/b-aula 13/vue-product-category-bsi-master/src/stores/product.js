import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
  }),
  actions: {
    async getAllProducts() {
      try {
        const { data } = await axios.get("http://localhost:4000/product");
        this.products = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404) {
          return Promise.reject("'product' não encontrada!");
        }
      }
    },
    async saveProduct(product) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/product",
          product
        );
        this.products.push(data);
        return Promise.resolve("Produto adicionado com sucesso");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async updateProduct(product_id) {
      try {
        await axios.update(`http://localhost:4000/category/${product_id}`);
        await this.getAllProducts();
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao alterar");
      }
    },
    async deleteProduct(product_id) {
      try {
        await axios.delete(`http://localhost:4000/category/${product_id}`);
        await this.getAllProducts();
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
  },
});
