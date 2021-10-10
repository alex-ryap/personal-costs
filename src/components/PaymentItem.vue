<template>
  <tr class="table__string">
    <td>{{ item.id }}</td>
    <td>{{ item.date }}</td>
    <td>{{ item.category }}</td>
    <td>{{ item.value }}</td>
    <td>
      <img
        class="options"
        src="../assets/options.svg"
        alt="options"
        @click="showOptions($event)"
      />
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PaymentItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showOptions(event) {
      this.$optionsPayment.show({
        title: 'Options',
        curX: event.pageX,
        curY: event.pageY,
        item: this.item,
      });
    },
  },
};
</script>

<style lang="scss">
.options {
  cursor: pointer;
  width: 6px;
  height: 15px;
}
</style>
