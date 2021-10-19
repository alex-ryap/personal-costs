<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Doughnut, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'Chart',
  extends: Doughnut,
  mixins: [reactiveProp],
  data: () => {
    return {
      options: {
        responsive: true,
        legend: {
          position: 'right',
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>

<style></style>
