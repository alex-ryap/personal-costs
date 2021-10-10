import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import AddPaymentForm from '../components/AddPaymentForm.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const $route = {
  path: '/some/path',
  params: {
    category: {},
  },
  query: {
    value: '',
  },
};

describe('Add new payment form test', () => {
  let getters;
  let actions;
  let mutations;
  let store;

  beforeEach(() => {
    getters = {
      getPaymentsListCount: () => 3,
      getCategoryList: () => ['Transport', 'Food', 'Education', 'Sport'],
    };

    actions = {
      fetchCategories: jest.fn(),
    };

    mutations = {
      addDataToPaymentsList: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      actions,
      mutations,
    });
  });

  it('Test select category', () => {
    const wrapper = shallowMount(AddPaymentForm, {
      store,
      localVue,
      propsData: {
        item: {},
      },
      mocks: {
        $route,
      },
    });

    const options = wrapper.find('select[name="category"]').findAll('option');

    options.at(1).setSelected();

    expect(wrapper.vm.category).toBe('Food');
  });

  it('Test input amount', () => {
    const wrapper = shallowMount(AddPaymentForm, {
      store,
      localVue,
      propsData: {
        item: {},
      },
      mocks: {
        $route,
      },
    });

    const amountInput = wrapper.find('input[name="amount"]');

    amountInput.setValue(250);

    expect(wrapper.vm.amount).toBe(250);
  });

  it('Test input date', () => {
    const wrapper = shallowMount(AddPaymentForm, {
      store,
      localVue,
      propsData: {
        item: {},
      },
      mocks: {
        $route,
      },
    });

    const dateInput = wrapper.find('input[name="date"]');

    dateInput.setValue('10.10.2021');

    expect(wrapper.vm.date).toBe('10.10.2021');
  });

  it('Test save new payment', async () => {
    const wrapper = shallowMount(AddPaymentForm, {
      store,
      localVue,
      propsData: {
        item: {},
      },
      mocks: {
        $route,
      },
    });

    const form = wrapper.find('form');

    form.trigger('submit');

    expect(mutations.addDataToPaymentsList).toHaveBeenCalled();
  });
});
