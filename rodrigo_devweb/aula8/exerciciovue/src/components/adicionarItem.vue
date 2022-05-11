<script>
export default {
  methods: {
    adicionarTarefa() {
      this.$emit("adicionarTarefa", this.novaTarefa);
      this.novaTarefa = "Adicionar_Tarefa";
    },
  },
};
</script>
<template>
  <article class="envio first container box">
    <form class="adicionamento">
      <input type="text" name="Adicionar_Tarefa" />
      <input @click="adicionarTarefa" type="submit" value="Adicionar Tarefa" />
    </form>
  </article>
</template>

<style>
/*verdadeira dor de cabeça abaixo, o importante é que um tá do lado do outro*/
.adicionamento {
  align-content: center;
}
.box {
  display: flex;
  justify-content: space-between;
  padding: 100%;
  align-content: center;
}

.envio {
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 2%;
  text-decoration: none;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  grid-template-rows: 10% auto 10%;
  grid-template-areas: "auto";
}
.first {
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

@media all and (max-width: 30em) {
  .envio {
    display: block;
    margin: 0.4em auto;
  }
}
</style>
