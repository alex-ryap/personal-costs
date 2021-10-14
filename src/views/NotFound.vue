<template>
  <v-container>
    <v-row justify="center">
      <h3 class="text-h5 text-sm-h5 mt-8 mb-4">Sorry, may be you want open</h3>
    </v-row>
    <v-row justify="center" align="center">
      <v-btn color="teal" plain :ripple="false" to="/dashboard"
        >Dashboard page</v-btn
      >
      or
      <v-btn color="teal" plain :ripple="false" to="/about">About page</v-btn>
    </v-row>
    <v-row justify="center">
      <h2 class="title text-h5 text-sm-h3 mt-10">404 Not Found</h2>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
.title {
  color: #999;
}
</style>
