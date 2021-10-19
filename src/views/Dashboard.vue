<template>
  <v-container>
    <v-row>
      <div class="text-h5 text-sm-h3 my-8">My personal costs</div>
    </v-row>
    <v-row class="d-flex">
      <v-col
        :class="
          $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
            ? 'order-2'
            : 'order-1'
        "
        sm="12"
        md="6"
      >
        <PaymentDisplay :items="paymentsList" :categories="categoryList" />
      </v-col>
      <v-col
        :class="
          $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
            ? 'order-1'
            : 'order-2'
        "
        sm="12"
        md="6"
      >
        <Chart :chart-data="chartData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PaymentDisplay from './../components/PaymentDisplay.vue';
import Chart from '../components/Chart.vue';

export default {
  name: 'Dashboard',
  components: {
    PaymentDisplay,
    Chart,
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

    chartData() {
      return {
        labels: this.categoryList.map((category) => category),
        datasets: [
          {
            label: '# of Votes',
            data: this.categoryList.map((category) => {
              return this.paymentsList.reduce((total, payment) => {
                if (payment.category === category) {
                  total += payment.amount;
                }
                return total;
              }, 0);
            }),
            backgroundColor: [
              '#1266F1',
              '#B23CFD',
              '#00B74A',
              '#F93154',
              '#FFA900',
              '#39C0ED',
              '#1DE9B6',
            ],
            borderColor: [
              '#1266F1',
              '#B23CFD',
              '#00B74A',
              '#F93154',
              '#FFA900',
              '#39C0ED',
              '#1DE9B6',
            ],
            borderWidth: 1,
          },
        ],
      };
    },
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
