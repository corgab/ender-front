<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  <div id="app">
    <AppHeader></AppHeader>
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <main>
      <RouterView />
    </main>
    <AppFooter></AppFooter>
  </div>

</template>


<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>
