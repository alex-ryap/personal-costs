<template>
  <div id="app">
    <div class="container">
      <header>
        <h1 class="title">My personal costs</h1>
      </header>
      <main>
        <div class="content">
          <button
            class="btn content__btn"
            @click="showPaymentForm = !showPaymentForm"
          >
            Add new cost
          </button>
          <AddPaymentForm @addNewPayment="addPayment" v-if="showPaymentForm" />
          <PaymentDisplay :items="displayedPayments" />
          <Pagination
            :itemsCount="paymentsList.length"
            :curPage="currentPage"
            :count="paymentsCountOfPage"
            @paginate="setPage"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue';
import PaymentDisplay from './components/PaymentDisplay.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentDisplay,
    Pagination,
  },
  data: () => ({
    paymentsList: [],
    showPaymentForm: false,
    currentPage: 1,
    paymentsCountOfPage: 10,
  }),
  computed: {
    displayedPayments() {
      return this.paymentsList.slice(
        this.currentPage * this.paymentsCountOfPage - this.paymentsCountOfPage,
        this.currentPage * this.paymentsCountOfPage
      );
    },
  },
  methods: {
    fetchData() {
      return [
        {
          id: 1,
          date: '28.03.2021',
          category: 'Food',
          value: 169,
        },
        {
          id: 2,
          date: '30.03.2021',
          category: 'Transport',
          value: 350,
        },
        {
          id: 3,
          date: '03.04.2021',
          category: 'Food',
          value: 258,
        },
        {
          id: 4,
          date: '08.04.2021',
          category: 'Food',
          value: 935,
        },
        {
          id: 5,
          date: '10.04.2021',
          category: 'Transport',
          value: 350,
        },
        {
          id: 6,
          date: '15.04.2021',
          category: 'Healthcare',
          value: 532,
        },
        {
          id: 7,
          date: '16.04.2021',
          category: 'Clothing',
          value: 500,
        },
        {
          id: 8,
          date: '20.04.2021',
          category: 'Housing',
          value: 692,
        },
        {
          id: 9,
          date: '23.04.2021',
          category: 'Food',
          value: 123,
        },
        {
          id: 10,
          date: '25.04.2021',
          category: 'Food',
          value: 273,
        },
        {
          id: 11,
          date: '29.04.2021',
          category: 'Housing',
          value: 339,
        },
        {
          id: 12,
          date: '01.05.2021',
          category: 'Food',
          value: 143,
        },
        {
          id: 13,
          date: '022.05.2021',
          category: 'Clothing',
          value: 478,
        },
        {
          id: 14,
          date: '08.05.2021',
          category: 'Housing',
          value: 350,
        },
        {
          id: 15,
          date: '10.05.2021',
          category: 'Food',
          value: 141,
        },
        {
          id: 16,
          date: '20.05.2021',
          category: 'Healthcara',
          value: 942,
        },
        {
          id: 17,
          date: '27.05.2021',
          category: 'Food',
          value: 129,
        },
        {
          id: 18,
          date: '10.05.2021',
          category: 'Transport',
          value: 152,
        },
        {
          id: 19,
          date: '17.06.2021',
          category: 'Food',
          value: 169,
        },
        {
          id: 20,
          date: '21.06.2021',
          category: 'Transport',
          value: 201,
        },
        {
          id: 21,
          date: '28.06.2021',
          category: 'Housing',
          value: 194,
        },
        {
          id: 22,
          date: '05.07.2021',
          category: 'Food',
          value: 169,
        },
        {
          id: 23,
          date: '18.07.2021',
          category: 'Transport',
          value: 350,
        },
        {
          id: 24,
          date: '20.07.2021',
          category: 'Clothing',
          value: 121,
        },
        {
          id: 25,
          date: '21.07.2021',
          category: 'Food',
          value: 95,
        },
        {
          id: 26,
          date: '08.08.2021',
          category: 'Clothing',
          value: 637,
        },
      ];
    },

    addPayment(payment) {
      payment.id = this.paymentsList.length + 1;
      this.paymentsList.push(payment);
    },

    setPage(page) {
      this.currentPage = page;
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  padding: 0 50px;
  width: 100%;
}

.title {
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
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
