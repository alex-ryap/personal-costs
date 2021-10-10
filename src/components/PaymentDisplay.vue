<template>
  <table class="table">
    <thead>
      <th>#</th>
      <th>Date</th>
      <th>Category</th>
      <th>Value</th>
    </thead>
    <tbody>
      <PaymentItem v-for="item in items" :key="item.id" :item="item" />
    </tbody>
  </table>
</template>

<script>
import PaymentItem from './PaymentItem.vue';

export default {
  name: 'PaymentDisplay',
  components: {
    PaymentItem,
  },
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
