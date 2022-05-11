<script>
import ItemLista from "./itemLista.vue";
import AdicionarItem from "./adicionarItem.vue";

const todo = ["item A", "item B"];
const doing = ["item C", "item D"];
const done = ["item E", "item F"];
export default {
  props: {
    titulo: {
      type: String,
      default: "Endenberg Productions ©",
    },
    subtitulo: {
      type: String,
      default: "308 Negra Arroyo Lane, Albuquerque, New Mexico - US",
    },
  },
  components: { ItemLista, AdicionarItem },

  data() {
    return {
      todo,
      doing,
      done,
    };
  },

  methods: {
    concluirTarefaTodo(pos) {
      this.doing.push(this.todo[pos]);
      this.todo.splice(pos, 1);
    },
    concluirTarefaDoing(pos) {
      this.done.push(this.doing[pos]);
      this.doing.splice(pos, 1);
    },
    refazerTarefaDoing(pos) {
      this.todo.push(this.todo[pos]);
      this.doing.splice(pos, 1);
    },
    refazerTarefaDone(pos) {
      this.doing.push(this.doing[pos]);
      this.done.splice(pos, 1);
    },
  },
};
</script>

<template>
  <main>
    <AdicionarItem @adicionarTarefa="adicionarTarefa" :item="item" />
    <div class="container">
      <div class="itemm">
        <h2 class="titulo">To Do</h2>
        <ItemLista
          v-for="(item, i) of todo"
          :key="i"
          :item="item"
          @concluirTarefa="concluirTarefaTodo(i)"
        />
      </div>
      <div class="itemm">
        <h2 class="titulo">Doing</h2>
        <ItemLista
          v-for="(item, i) of doing"
          :key="i"
          :item="item"
          @concluirTarefa="concluirTarefaDoing(i)"
          @refazerTarefa="refazerTarefaDoing(i)"
        />
      </div>
      <div class="itemm">
        <h2 class="titulo">Done</h2>
        <ItemLista
          v-for="(item, i) of done"
          :key="i"
          :item="item"
          @refazerTarefa="refazerTarefaDone(i)"
        />
      </div>
    </div>
    <br />
    <div class="container">
      <p>ola</p>
      <hr />
      <div>
        <h1>{{ titulo }}</h1>
        <h5>{{ subtitulo }}</h5>
      </div>
    </div>
  </main>
</template>

<style>
body {
  background: linear-gradient(to top right, #33ccff 0%, #000066 100%);
}

.container {
  display: grid;
  grid-template-columns: auto auto auto;
}

.itemm {
  border: 3px solid crimson;
  background: gray;
  width: 98%;
  height: 1200px;
  margin: auto;
  border-radius: 10px;
}

.titulo {
  margin: auto;
  text-align: center;
  padding: 50px;
  background: linear-gradient(to bottom, crimson 0%, gray 100%);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
