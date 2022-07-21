<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
<template>
  <table class="data-table">
    <thead>
      <tr>
        <th class="text-left" v-for="(column, i) of columns" :key="i">
          <span>
            <h2>{{ column }}</h2>
          </span>
        </th>
        <th class="text-left">
          <span> <h2>actions</h2> </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) of items" :key="i">
        <td v-for="(data, i) of row" :key="i">{{ data }}</td>
        <td>
          <button @click="$emit('edit', row)">Atualizar Livro</button>
          <button @click="$emit('delete', row)">Apagar Livro</button>
          <RouterLink to="/compra">
            <button><h2>Comprar</h2></button>
          </RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.data-table {
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
  background: #ccc;
}
tbody tr:nth-child(even) {
  background: #fff;
}
</style>
