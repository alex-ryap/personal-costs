<template>
  <div class="payment">
    <h2>Add new payment</h2>
    <AddPaymentForm />
  </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue';

export default {
  name: 'AddPayment',
  components: { AddPaymentForm },
};
</script>

<style>
.payment {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
