<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
</style>
