<script>
import DataTable from "../template/DataTable.vue";
import { mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";
export default {

  components: { DataTable },
  data() {
    return {
      columns: ["ID", "Descrição"],
    };
  },
  computed: {
    ...mapStores(useCategoryStore),
    ...mapState(useCategoryStore, ["categories"]),
  },
  methods: {
    ...mapActions(useCategoryStore, [
      "saveCategory",
      "deleteCategory",
    ],
};
</script>
<template>
  <div class="category-list">
    <data-table
      :columns="columns"
      :items="categories"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
    />
  </div>
</template>

<style scoped>
.category-list {
  margin: 3% auto;
  width: 70%;
}
table {
  /* display: table; */
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
}

th {
  border-bottom: 2px solid #444;
  text-align: left;
}

td {
  padding: 10px;
}

thead tr {
  background-color: #444;
  color: whitesmoke;
}

tbody tr:nth-child(odd) {
  background-color: #c3c3c3;
}
tbody tr:nth-child(even) {
  background-color: #ffffff;
}
</style>
