<template lang="pug">
  .gallery-item.col-6.col-sm-4.col-md-3.col-lg-2(@click="openModal")
    .photo.card.box-shadow
      img.card-img-top(:src="photo.thumbnailUrl" :alt="photo.title" :title="photo.title")
      .card-body
        h6.card-title.text-truncate.mb-0.photo-album
          b {{ albumTitle }}
        p.card-text.text-capitalize.photo-title.text-truncate.text-muted(:title="photo.title") {{ photo.title }}
</template>

<script>
export default {
  name: 'card',
  props: ['photo','index'],
  methods: {
    openModal(){
      this.$emit('openModal',this.index);
    }
  },
  computed: {
    albumTitle() {
      return 'Album ' + this.photo.albumId;
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/utils/variables";

  .card-body{
    background-color: $white;
    padding: 10px;
    position: relative;
    z-index: 1;
  }

  .gallery-item {
    cursor: pointer;
    padding: 0 5px;
  }
  .photo {
    margin-bottom: 10px;
    overflow: hidden;
    transition: all 200ms ease-in 0s;
    &:hover {
      box-shadow: 0 .5rem 0.8rem rgba(0, 0, 0, .2);
      > img{
        transform: scale(1.1);
      }
    }
    > img {
      position: relative;
      transition: all 200ms ease-in 0s;
      z-index: 0;
    }
  }
  .photo-title {
    font-size: 1rem;
    margin-bottom: 0rem;
  }
</style>
