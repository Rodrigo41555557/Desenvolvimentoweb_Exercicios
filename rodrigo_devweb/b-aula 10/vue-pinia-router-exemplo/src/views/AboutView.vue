<script>
import { mapActions, mapState, mapStores } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, ["counter", "doubleCount"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
    adicionar() {
      this.increment();
    },
  },
};
</script>

<template>
  <h1>Home</h1>
  <h2>Contador: {{ counter }}</h2>
  <button @click="adicionar">Adicionar</button>
</template>

<style></style>
