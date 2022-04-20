<script>
//por algum motivo os arquvios .vue precisam ter dois nomes
import MenuLateral from "@/components/MenuLateral.vue";
import Cabecalho from "@/components/oCabecalho.vue";
import BlocoPrincipal from "./components/blocoPrincipal.vue";
import Rodape from "./components/oRodape.vue";

export default {
  components: { MenuLateral, Cabecalho, BlocoPrincipal, Rodape },
};
</script>
<template>
  <MenuLateral />
  <Cabecalho />
  <BlocoPrincipal />
  <Rodape />
</template>
<style></style>
