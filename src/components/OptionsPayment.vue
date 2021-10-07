<template>
  <ul
    class="options__list"
    :style="{ top: settings.curY + 'px', left: settings.curX - 105 + 'px' }"
  >
    <li class="options__item" @click="onEdit">
      <img class="options__img" src="../assets/edit.svg" alt="" />
      Edit
    </li>
    <li class="options__item">
      <img class="options__img" src="../assets/remove.svg" alt="" />
      Remove
    </li>
  </ul>
</template>

<script>
export default {
  name: 'OptionsPayment',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEdit() {
      this.$optionsPayment.hide();
      this.$router.push({
        path: '/add/payment/',
        params: {
          category: this.settings.item.category,
        },
        query: {
          value: this.settings.item.value,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.options__list {
  background-color: #fff;
  position: absolute;
  list-style-type: none;
  border: 1px solid #000;
}

.options__item {
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(220, 220, 220);
  }
}

.options__img {
  margin-right: 10px;
  width: 15px;
  height: 15px;
}
</style>
