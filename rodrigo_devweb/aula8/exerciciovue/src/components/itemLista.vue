<script>
export default {
  props: {
    item: {
      type: String,
      default: "ítem",
    },
  },
  
  methods: {
    concluirTarefa() {
      this.$emit("concluirTarefa");
    },
    refazerTarefa() {
      this.$emit("refazerTarefa");
    },
  },
};
</script>
<template>
  <button name="alala" class="tarefa container">
    {{ item }}
    <button name="alala" class="botao container" @click="concluirTarefa">
      Concluir
    </button>
    <button name="alala" class="botao container" @click="refazerTarefa">
      Refazer
    </button>
  </button>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: "auto auto auto";
}

.tarefa {
  display: inline-block;
  padding: 10% 30%;
  border: 0.1em solid magenta;
  background: black;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: bold;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size-adjust: inherit;
  color: white;
  text-align: center;
  transition: all 0.2s;
}

.botao {
  display: inline-block;
  padding: 10% 30%;
  border: 0.1em solid magenta;
  background: black;
  cursor: pointer;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: bold;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size-adjust: inherit;
  color: white;
  text-align: center;
  transition: all 0.2s;
}

.botao:hover {
  color: black;
  background-color: white;
}
@media all and (max-width: 30em) {
  .botao {
    display: block;
    margin: 0.4em auto;
  }
}
</style>
