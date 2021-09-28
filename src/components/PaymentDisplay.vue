<template>
  <table class="table">
    <thead>
      <th>#</th>
      <th>Date</th>
      <th>Category</th>
      <th>Value</th>
    </thead>
    <tbody>
      <tr class="table__string" v-for="(item, idx) in items" :key="idx">
        <td>{{ item.id }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.table {
  width: 400px;
  text-align: center;
  border-collapse: collapse;
}

.table__string {
  border-top: 1px solid #ddd;
}

th,
td {
  padding: 10px 20px;
}
</style>
