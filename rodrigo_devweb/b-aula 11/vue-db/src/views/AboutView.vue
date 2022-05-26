<script>
import axios from "axios";
export default {
  data() {
    return {
      tasks: [],
    };
  },
  async mounted() {
    try {
      const result = await axios.get("http://localhost:3001/tasks");
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<template>
  <div class="about">
    <h1>Tasks</h1>
    <hr />
    <h1>{{ tasks }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
