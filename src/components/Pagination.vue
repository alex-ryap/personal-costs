<template>
  <div class="pagination">
    <a class="pagination__link" @click="setPage(curPage - 1)">&lt;</a>
    <a
      class="pagination__link"
      :class="{ active: page === curPage }"
      v-for="page in generatePages"
      :key="page"
      @click="setPage(page)"
    >
      {{ page }}
    </a>
    <a class="pagination__link" @click="setPage(curPage + 1)">&gt;</a>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    itemsCount: {
      type: Number,
    },
    curPage: {
      type: Number,
    },
    count: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  computed: {
    generatePages() {
      return Math.ceil(this.itemsCount / this.count);
    },
  },
  methods: {
    setPage(page) {
      if (page < 1 || page > this.generatePages) {
        return;
      }
      this.$emit('paginate', page);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  margin-top: 20px;

  &__link {
    cursor: pointer;
    padding: 5px;

    & + .active {
      background-color: gray;
      color: white;
    }

    &:hover {
      background: gray;
      color: white;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>
