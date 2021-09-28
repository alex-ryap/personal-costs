<template>
  <form class="payment__form" @submit.prevent="save">
    <input
      class="payment__input"
      placeholder="Payment category"
      v-model="category"
    />
    <input
      class="payment__input"
      placeholder="Payment amount"
      v-model="amount"
    />
    <input class="payment__input" placeholder="Payment date" v-model="date" />
    <button class="btn payment__btn" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data() {
    return {
      amount: null,
      date: null,
      category: null,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      const year = today.getFullYear();

      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;
      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    save() {
      const payment = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.amount,
      };

      this.$emit('addNewPayment', payment);
    },
  },
};
</script>

<style lang="scss">
.payment__form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
}

.payment__input {
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.payment__btn {
  margin-top: 15px;
  width: 150px;
  align-self: end;
}
</style>
