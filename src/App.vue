<template>
  <div id="app">
    <div class="container">
      <header>
        <nav>
          <ul class="nav">
            <li class="nav__item">
              <!-- HASH transition -->
              <!-- <a class="nav__link" href="dashboard">Dashboard</a> -->

              <!-- PATH transition -->
              <a class="nav__link" href="dashboard">Dashboard</a>
            </li>
            <li class="nav__item">
              <!-- HASH transition -->
              <!-- <a class="nav__link" href="about">About</a> -->

              <!-- PATH transition -->
              <a class="nav__link" href="about">About</a>
            </li>
            <li class="nav__item">
              <!-- HASH transition -->
              <!-- <a class="nav__link" href="notfound">Not Found</a> -->

              <!-- PATH transition -->
              <a class="nav__link" href="notfound">Not Found</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Dashboard v-if="page === 'dashboard'" />
        <About v-if="page === 'about'" />
        <NotFound v-if="page === 'notfound'" />
      </main>
    </div>
  </div>
</template>

<script>
import './assets/reset.scss';
import Dashboard from './views/Dashboard.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
    About,
    NotFound,
  },
  data: () => ({
    page: 'dashboard',
  }),
  methods: {
    setPage() {
      // HASH transition
      // this.page = location.hash.slice(1);

      // PATH transition
      this.page = location.pathname.slice(1);
    },
  },
  mounted() {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        history.pushState({}, '', link.href);
        this.setPage();
      });
    });
    this.setPage();

    // HASH transition
    // window.addEventListener('hashchange', this.setPage);

    // PATH transition
    window.addEventListener('popstate', this.setPage);
  },
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
