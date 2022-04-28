<script>
import oComponente from "@/components/oComponente.vue"
import OComponente from "./components/oComponente.vue"
export default {
    components: (MeuComponente: oComponente),
    components: { OComponente }
}
</script>

<template>
  <h1>ola</h1>
  <OComponente titulo="fazer" />
  <O-Componente />
</template>