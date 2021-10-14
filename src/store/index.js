import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsList(state, payload) {
      state.paymentsList = payload;
    },

    removeItemFromPaymentList(state, id) {
      state.paymentsList.splice(id, 1);
    },

    addDataToPaymentsList(state, payload) {
      payload.id = state.paymentsList.length + 1;
      state.paymentsList.push(payload);
    },

    setCategoryList(state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload];
      }

      state.categoryList.push(...payload);
    },

    editItem(state, payload) {
      state.paymentsList.splice(payload.id, 1, payload.item);
    },
  },
  getters: {
    getPaymentsList: (state) => state.paymentsList,

    getPaymentsListCount: (state) => state.paymentsList.length,

    getFullPaymentsValue: (state) => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },

    getCategoryList: (state) => state.categoryList,
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        resolve([
          {
            id: 1,
            date: '28.03.2021',
            category: 'Food',
            amount: 169,
          },
          {
            id: 2,
            date: '30.03.2021',
            category: 'Transport',
            amount: 350,
          },
          {
            id: 3,
            date: '03.04.2021',
            category: 'Food',
            amount: 258,
          },
          {
            id: 4,
            date: '08.04.2021',
            category: 'Food',
            amount: 935,
          },
          {
            id: 5,
            date: '10.04.2021',
            category: 'Transport',
            amount: 350,
          },
          {
            id: 6,
            date: '15.04.2021',
            category: 'Healthcare',
            amount: 532,
          },
          {
            id: 7,
            date: '16.04.2021',
            category: 'Clothing',
            amount: 500,
          },
          {
            id: 8,
            date: '20.04.2021',
            category: 'Housing',
            amount: 692,
          },
          {
            id: 9,
            date: '23.04.2021',
            category: 'Food',
            amount: 123,
          },
          {
            id: 10,
            date: '25.04.2021',
            category: 'Food',
            amount: 273,
          },
          {
            id: 11,
            date: '29.04.2021',
            category: 'Housing',
            amount: 339,
          },
          {
            id: 12,
            date: '01.05.2021',
            category: 'Food',
            amount: 143,
          },
          {
            id: 13,
            date: '22.05.2021',
            category: 'Clothing',
            amount: 478,
          },
          {
            id: 14,
            date: '08.05.2021',
            category: 'Housing',
            amount: 350,
          },
          {
            id: 15,
            date: '10.05.2021',
            category: 'Food',
            amount: 141,
          },
          {
            id: 16,
            date: '20.05.2021',
            category: 'Healthcara',
            amount: 942,
          },
          {
            id: 17,
            date: '27.05.2021',
            category: 'Food',
            amount: 129,
          },
          {
            id: 18,
            date: '10.05.2021',
            category: 'Transport',
            amount: 152,
          },
          {
            id: 19,
            date: '17.06.2021',
            category: 'Food',
            amount: 169,
          },
          {
            id: 20,
            date: '21.06.2021',
            category: 'Transport',
            amount: 201,
          },
          {
            id: 21,
            date: '28.06.2021',
            category: 'Housing',
            amount: 194,
          },
          {
            id: 22,
            date: '05.07.2021',
            category: 'Food',
            amount: 169,
          },
          {
            id: 23,
            date: '18.07.2021',
            category: 'Transport',
            amount: 350,
          },
          {
            id: 24,
            date: '20.07.2021',
            category: 'Clothing',
            amount: 121,
          },
          {
            id: 25,
            date: '21.07.2021',
            category: 'Food',
            amount: 95,
          },
          {
            id: 26,
            date: '08.08.2021',
            category: 'Clothing',
            amount: 637,
          },
        ]);
      }).then((res) => {
        commit('setPaymentsList', res);
      });
    },

    fetchCategories({ commit }) {
      return new Promise((resolve) => {
        resolve([
          'Food',
          'Transport',
          'Sport',
          'Education',
          'Healthcare',
          'Housing',
          'Clothing',
        ]);
      }).then((res) => {
        commit('setCategoryList', res);
      });
    },
  },
});
