<template>
  <div id="app">
    <div class="container">
      <header>
        <nav>
          <ul class="nav">
            <li class="nav__item">
              <router-link class="nav__link" to="/dashboard"
                >Dashboard</router-link
              >
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/about">About</router-link>
            </li>
            <li class="nav__item">
              <router-link class="nav__link" to="/404">Not Found</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import './assets/reset.scss';

export default {
  name: 'App',
  components: {},
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  padding: 0 50px;
}

.nav {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  background-color: #2c3e50;
  padding: 20px;
  border-radius: 0 0 20px 20px;

  &__link {
    text-decoration: none;
    color: #fff;
    padding: 10px;
    font-weight: 600;

    &:hover {
      border-radius: 15px;
      background-color: #fff;
      color: #2c3e50;
    }
  }
}
</style>
