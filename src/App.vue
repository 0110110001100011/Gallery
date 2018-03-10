<template lang="pug">
  #app(v-cloak)
    .wrapper.bg-light
      navbar(:title="title" :album="album")
      main(role="main")
        jumbotron(:title="title")
        gallery(@getVisibleCards="getVisibleCards" @getTotalCards="getTotalCards")
</template>

<script>
  import navbar from './components/navbar';
  import jumbotron from './components/jumbotron';
  import gallery from './components/gallery';

  export default {
    name: 'app',
    data() {
      return {
        title: 'Photo Gallery',
        album: {
          visibleCards: 0,
          totalCards: 0
        }
      }
    },
    methods: {
      getTotalCards (total) {
        this.album.totalCards = total;
      },
      getVisibleCards(newValue) {
        this.album.visibleCards = newValue;
      }
    },
    components: {
      navbar,
      jumbotron,
      gallery
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    min-width: 320px;
    padding-bottom: 100px;
    padding-top: 56px;
  }
</style>
