<template lang="pug">
  section.gallery
    ul
      li(v-for="photo in photos") {{ photo.title }}
</template>

<script>
  import API_getPhotos from './../api';

  export default {
    name: 'gallery',
    data() {
      return {
        photos: {}
      }
    },
    created() {
      this.getPhotos();
    },
    methods: {
      getPhotos() {
        let _this = this;
        API_getPhotos().then(function (response) {
          _this.photos = response;
        }).catch(function (e) {
          console.log(e);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
