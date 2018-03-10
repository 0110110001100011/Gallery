<template lang="pug">
  #app(v-cloak)
    .wrapper.bg-light
      navbar
      main(role="main")
        jumbotron(:title="title")
        gallery
</template>

<script>
  import navbar from './components/navbar';
  import jumbotron from './components/jumbotron';
  import gallery from './components/gallery';

  export default {
    name: 'app',
    data() {
      return {
        title: 'Album example'
      }
    },
    components: {
      navbar,
      jumbotron,
      gallery
    }
  }
</script>

<style lang="scss">

</style>
