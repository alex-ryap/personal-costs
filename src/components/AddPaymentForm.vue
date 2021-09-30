<template>
  <form class="payment__form" @submit.prevent="save">
    <select class="payment__input" v-model="category">
      <option
        v-for="category in categoryList"
        :key="category"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
    <input
      class="payment__input"
      placeholder="Payment amount"
      type="number"
      v-model.number="amount"
    />
    <input class="payment__input" placeholder="Payment date" v-model="date" />
    <button class="btn payment__btn" type="submit">Add</button>
  </form>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

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
    ...mapGetters({
      paymentsCount: 'getPaymentsListCount',
      categoryList: 'getCategoryList',
    }),

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
    ...mapMutations(['addDataToPaymentsList']),

    ...mapActions(['fetchCategories']),

    save() {
      const payment = {
        id: this.paymentsCount + 1,
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.amount,
      };

      this.addDataToPaymentsList(payment);
    },
  },
  mounted() {
    if (!this.categoryList.length) {
      this.fetchCategories();
    }
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
