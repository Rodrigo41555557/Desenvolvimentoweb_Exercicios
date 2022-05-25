<script>
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },
};
</script>

<template>
  <header>
      <RouterLink to='/'>Home</RouterLink> |
      <RouterLink to='about'>Sobre</RouterLink>
  </header>
</template>
