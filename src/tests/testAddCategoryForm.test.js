import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import AddCategoryForm from '../components/AddCategoryForm.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Add new category form test', () => {
  let getters;
  let actions;
  let mutations;
  let store;

  beforeEach(() => {
    getters = {
      getCategoryList: () => ['Transport', 'Food', 'Education', 'Sport'],
    };

    actions = {
      fetchCategories: jest.fn(),
    };

    mutations = {
      setCategoryList: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      actions,
      mutations,
    });
  });

  it('Test input new category', () => {
    const wrapper = shallowMount(AddCategoryForm, {
      store,
      localVue,
    });

    const categoryInput = wrapper.find('input[name="category"]');

    categoryInput.setValue('Home');

    expect(wrapper.vm.category).toBe('Home');
  });

  it('Test save new category', () => {
    const wrapper = shallowMount(AddCategoryForm, {
      store,
      localVue,
    });

    wrapper.find('input[name="category"]').setValue('Home');
    const form = wrapper.find('form');

    form.trigger('submit');

    expect(mutations.setCategoryList).toHaveBeenCalled();
  });
});
