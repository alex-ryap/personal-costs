<template>
  <div class="dashboard">
    <h1 class="title">My personal costs</h1>
    <div class="content">
      <div class="buttons">
        <button
          class="btn content__btn"
          @click="showPaymentForm = !showPaymentForm"
        >
          Add new cost
        </button>
        <button
          class="btn content__btn"
          @click="showCategoryForm = !showCategoryForm"
        >
          Add new category
        </button>
      </div>
      <div class="forms">
        <AddPaymentForm v-if="showPaymentForm" />
        <AddCategoryForm v-if="showCategoryForm" />
      </div>
      Total payments: {{ totalPayments }}
      <PaymentDisplay :items="paymentsList" />
      <Pagination
        :pagesCount="pagesCount"
        :curPage="currentPage"
        :count="paymentsCountOfPage"
        @paginate="setPage"
      />
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './../components/AddPaymentForm.vue';
import AddCategoryForm from './../components/AddCategoryForm.vue';
import PaymentDisplay from './../components/PaymentDisplay.vue';
import Pagination from './../components/Pagination.vue';
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Dashboard',
  components: {
    AddPaymentForm,
    AddCategoryForm,
    PaymentDisplay,
    Pagination,
  },
  data: () => ({
    paymentsList: [],
    showPaymentForm: false,
    showCategoryForm: false,
    currentPage: 1,
    paymentsCountOfPage: 10,
  }),
  computed: {
    ...mapGetters({
      totalPayments: 'getFullPaymentsValue',
      getPaymentsList: 'getPaymentsList',
      pagesCount: 'getPagesCount',
    }),
    displayedPayments() {
      return this.paymentsList.slice(
        this.currentPage * this.paymentsCountOfPage - this.paymentsCountOfPage,
        this.currentPage * this.paymentsCountOfPage
      );
    },
  },
  methods: {
    ...mapMutations({
      loadPayments: 'setPaymentsList',
    }),

    ...mapActions(['fetchData']),

    setPage(page) {
      this.currentPage = page;
      this.fetchData(this.currentPage).then(() => {
        this.paymentsList = this.getPaymentsList;
      });
    },
  },
  created() {
    this.currentPage = Number(this.$route.params.page) || 1;
    this.fetchData(this.currentPage).then(() => {
      this.paymentsList = this.getPaymentsList;
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
