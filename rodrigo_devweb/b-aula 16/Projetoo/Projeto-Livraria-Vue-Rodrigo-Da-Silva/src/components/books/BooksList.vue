<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
import BookTable from "../tables/BookTable.vue";
export default {
  components: { BookTable },
  data() {
    return {
      columns: ["Id", "title", "author", "quantity", "price"],
    };
  },
  computed: {
    ...mapStores(useBookStore),
    ...mapState(useBookStore, ["books"]),
  },
  methods: {
    ...mapActions(useBookStore, ["getAllBooks", "deleteBook", "buyBook"]),
    async deleteItem(book) {
      try {
        await this.deleteBook(book.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    async buyItem(book){
      try{
        await this.buyBook(book.id, book.quantity);
      }
    }
  },
  async mounted() {
    try {
      await this.getAllBooks();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <div class="book-list">
    <book-table
      :columns="columns"
      :items="books"
      @edit="$emit('edit', $event)"
      @delete="deleteItem"
      @buy="buyItem"
    />
  </div>
</template>

<style scoped>
.book-list {
  margin: 3% auto;
  width: 70%;
}
</style>
