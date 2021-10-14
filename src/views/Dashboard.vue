<template>
  <v-container>
    <v-row>
      <div class="text-h5 text-sm-h3 my-8">My personal costs</div>
    </v-row>
    <v-row>
      <PaymentDisplay :items="paymentsList" :categories="categoryList" />
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PaymentDisplay from './../components/PaymentDisplay.vue';

export default {
  name: 'Dashboard',
  components: {
    PaymentDisplay,
  },
  data: () => ({
    paymentsList: [],
    categoryList: [],
  }),
  computed: {
    ...mapGetters({
      getPaymentsList: 'getPaymentsList',
      getCategoryList: 'getCategoryList',
    }),
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategories']),
  },
  created() {
    this.fetchData().then(() => {
      this.paymentsList = this.getPaymentsList;
    });

    this.fetchCategories().then(() => {
      this.categoryList = this.getCategoryList;
    });
  },
};
</script>

<style>
.dashboard {
  margin-top: 30px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 400px;
}

.btn {
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: teal;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}

.btn:hover {
  opacity: 1;
}

.content__btn {
  margin-bottom: 15px;
}
</style>
