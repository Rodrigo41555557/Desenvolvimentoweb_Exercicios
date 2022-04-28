<script>
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
  
};
</script>

<template>
  <div class="container">
    <div class="itemm">
      <h2 class="titulo">To Do</h2>
    </div>
    <div class="itemm">
      <h2 class="titulo">Doing</h2>
    </div>
    <div class="itemm">
      <h2 class="titulo">Done</h2>
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
</template>

<style>
body {
  background: linear-gradient(to top right, #33ccff 0%, #000066 100%);
}

.container {
  display: grid;
  grid-template-columns: auto auto auto;
  
}

.itemm{
  border: 3px solid crimson;
  background: gray;
  width: 98%;
  height: 1200px;
  margin: auto;
  border-radius: 10px;
}

.titulo{
  margin: auto;
  text-align:center;
  padding:50px;
  background:linear-gradient(to bottom, crimson 0%, gray 100%);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
</style>
