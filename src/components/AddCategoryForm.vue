<template>
  <form class="category__form" @submit.prevent="save">
    <input
      class="category__input"
      placeholder="Category"
      v-model="category"
      name="category"
    />
    <button class="btn category__btn" type="submit">Add</button>
  </form>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AddCategoryForm',
  data() {
    return {
      category: '',
    };
  },
  computed: {
    ...mapGetters(['getCategoryList']),
  },
  methods: {
    ...mapMutations(['setCategoryList']),

    ...mapActions(['fetchCategories']),

    save() {
      if (!this.getCategoryList.length) {
        this.fetchCategories();
      }
      this.setCategoryList(this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.category__form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
}

.category__input {
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.category__btn {
  margin-top: 15px;
  width: 150px;
  align-self: end;
}
</style>
