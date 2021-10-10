<template>
  <div class="overlay" @click="onClose">
    <ul
      class="options__list"
      :style="{
        top: settings.curY + 15 + 'px',
        left: settings.curX - 115 + 'px',
      }"
    >
      <li class="options__item" @click="onEdit">
        <img class="options__img" src="../assets/edit.svg" alt="" />
        Edit
      </li>
      <li class="options__item" @click="onRemove">
        <img class="options__img" src="../assets/remove.svg" alt="" />
        Remove
      </li>
    </ul>
  </div>
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
      this.onClose();
      this.$modal.show({
        title: 'Edit payment',
        content: 'AddPaymentForm',
        item: this.settings.item,
      });
      // this.$router.push({
      //   path: `/add/payment/${this.settings.item.category}`,
      //   query: {
      //     value: this.settings.item.value,
      //   },
      // });
    },
    onClose() {
      this.$optionsPayment.hide();
    },

    onRemove() {
      this.onClose();
      this.$optionsPayment.removeItem(this.settings.item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(220, 220, 220, 0.2);
}

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
