<template lang="pug">
  section.gallery
    modal(v-if='isModalVisible', @close='closeModal', :photo='photoSelected')
    .container
      .row
        .col-md-12
          h2.text-center.gallery-title
            b {{ title }}
          hr
      .row
        card(v-for="(photo, index) in photos" :key="photo.id" :index="index" :photo="photo" v-if="isCardVisible(index)" @openModal='openModal')
</template>

<script>
  import API_getPhotos from './../api';
  import card from './card';
  import modal from './modal';
  const ITEMS = 100;

  export default {
    name: 'gallery',
    data() {
      return {
        photos: {},
        photoSelected: {},
        isModalVisible: false,
        title: "Photos",
        totalItems: ITEMS
      }
    },
    created() {
      this.getPhotos();
    },
    mounted() {
      this.scrollListener();
    },
    methods: {
      closeModal() {
        this.isModalVisible = false;
      },
      getPhotos() {
        let _this = this;
        API_getPhotos().then(function (response) {
          _this.photos = response;
          _this.$emit('getTotalCards', _this.photos.length);
          _this.$emit('getVisibleCards',_this.totalItems);
        }).catch(function (e) {
          console.log(e);
        });
      },
      increaseItemsLimit() {
        let currentScroll = window.pageYOffset;
        let offset = (window.innerHeight * 2);
        let triggerBottom = document.body.offsetHeight - offset;
        if (currentScroll >= triggerBottom) {
          this.totalItems += this.totalItems < this.photos.length ? ITEMS : 0;
          this.$emit('getVisibleCards',this.totalItems);
        }
      },
      isCardVisible(index) {
        return (index < this.totalItems);
      },
      openModal(index) {
        this.isModalVisible = true;
        this.photoSelected = this.photos[index];
      },
      scrollListener() {
        window.addEventListener('scroll', this.increaseItemsLimit);
      }
    },
    components: {
      card,
      modal
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/variables';
  .gallery {
    padding-bottom: 100px;
  }
  .gallery-title {
    font-weight: 700;
    margin: 0;
  }
  hr {
    margin: 15px auto 2rem;
    border-top: 3px solid $primary;
    max-width: 30px;
    @media screen and (min-width: 576px){
      margin-bottom: 5rem;
    }
  }
</style>
