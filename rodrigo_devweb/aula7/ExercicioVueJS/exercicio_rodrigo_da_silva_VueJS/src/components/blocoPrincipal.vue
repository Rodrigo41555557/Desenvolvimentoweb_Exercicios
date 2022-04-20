<script>
import Article from "./theArticle.vue";
import BlocoNovo from "./blocoNovo.vue";
export default {
  components: { Article, BlocoNovo },
};
</script>
<template>
  <main id="content">
    <Article />
    <BlocoNovo class="classeNova"/>
    <BlocoNovo class="classeNova"/>
    <BlocoNovo class="classeNova"/>
    <BlocoNovo class="classeNova"/>
    <BlocoNovo class="classeNova"/>
  </main>
</template>
<style></style>
