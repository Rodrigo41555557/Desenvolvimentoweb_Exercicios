<script>
export default {
  props: {
    titulo: {
      type: String,
      default: "titulopadrão",
    },
    subtitulo: {
      type: String,
    },
  },
};
</script>

<template>
  <div class="comp">
    <p>ola</p>
    <hr />
    <h1>{{ titulo }}</h1>
    <h2>{{ subtitulo }}</h2>
  </div>
</template>
