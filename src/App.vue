<template>
  <YDHeader />
  <router-view />
  <YDFooter />

</template>

<script>
import YDHeader from './components/YDHeader.vue';
import YDFooter from './components/YDFooter.vue';


export default {
  components: {
    YDHeader,
    YDFooter
  }
}

</script>

<style>
@import "./assets/style.css";

</style>