<template>
  <div class="modal">
    <div class="modal__overlay">
      <h2 class="modal__title">{{ settings.title }}</h2>
      <div class="modal__content">
        <component :is="settings.content" />
      </div>
      <img class="modal__close" src="../assets/close.svg" @click="onClose" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWindowAddPayment',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  components: {
    AddPaymentForm: () =>
      import(/* webpackChunkName: "AddPaymentForm" */ './AddPaymentForm.vue'),
    AddCategoryForm: () =>
      import(
        /* webpackChunkName: "AddCategoryForm" */ './../components/AddCategoryForm.vue'
      ),
  },
  methods: {
    onClose() {
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  &__overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.9);
  }

  &__title {
    margin-top: 100px;
    color: #fff;
  }

  &__close {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
  }
}
</style>
