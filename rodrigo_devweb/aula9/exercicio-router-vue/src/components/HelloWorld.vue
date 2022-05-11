<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="containerr">
    <nav>
      <h1 class="igor">Bem Vindo</h1>
    </nav>
  </header>
</template>

<style scoped>
@import "./../assets/base.css";
</style>
