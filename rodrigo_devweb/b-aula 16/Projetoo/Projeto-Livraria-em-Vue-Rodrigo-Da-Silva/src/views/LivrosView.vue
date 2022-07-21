<script>
import { mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
import BooksList from "../components/books/BooksList.vue";

export default {
  components: { BooksList },
  data() {
    return {
      currentBook: {
        id: "",
        title: "",
        author: "",
        quantity: "",
        price: "",
      },
      editing: false,
    };
  },

  methods: {
    ...mapActions(useBookStore, ["saveBook"]),
    async save() {
      try {
        const msg = await this.saveBook(this.currentBook);
        alert(msg);
        this.editing = false;
        this.currentBook = {};
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
    prepareToUpdate(book) {
      Object.assign(this.currentBook, book);
      this.editing = true;
    },
  },
};
</script>
<template>
  <div class="book-form">
    <h1 class="title">Cadastro de Livros</h1>
    <input type="text" placeholder="Book's Title" v-model="currentBook.title" />
    <input
      type="text"
      placeholder="Book's Author"
      v-model="currentBook.author"
    />
    <input
      type="number"
      placeholder="Number of Available Books"
      v-model="currentBook.quantity"
    />
    <input type="text" placeholder="Price (R$)" v-model="currentBook.price" />

    <button @click="save">
      {{ editing ? "Salvar" : "Add Book" }}
    </button>
  </div>
  <BooksList :books="books" @edit="prepareToUpdate" />
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
.book-form input {
  width: 75%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
}

.book-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background: linear-gradient(to right, #77003c 0%, indigo 100%);
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}

.book-form {
  margin: 3% auto;
  width: 70%;
}
</style>
