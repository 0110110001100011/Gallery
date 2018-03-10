<template lang="pug">
  transition(name="modal")
    .modal-overlay.d-flex.align-items-center.justify-content-center(@click="closeModal")
      .modal-wrapper.p-3
        .modal-container
          img.img-fluid(:src="photo.url")
          h6.modal-title.mb-0
            b {{ modalTitle }}
          p.text-capitalize.modal-description.text-muted {{ photo.title }}
</template>
<script>
  export default {
    name: 'modal',
    props: ['photo'],
    methods: {
      closeModal () {
        this.$emit('close');
      }
    },
    computed: {
      modalTitle () {
        return 'Album ' + this.photo.albumId;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/utils/variables";

  .modal-overlay {
    background-color: rgba(0, 0, 0, .8);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transition: opacity .3s ease;
    width: 100%;
    z-index: 9998;
  }
  .modal-wrapper {
    overflow: auto;
  }
  .modal-container {
    background-color: $white;
    border-radius: 5px 5px 3px 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    max-width: 500px;
    overflow: hidden;
    transition: all .3s ease;
    width: 100%;
  }
  .modal-title{
    padding: 10px 10px 0;
  }
  .modal-description {
    padding: 0 10px 10px;
  }

  /**
  * Transition effects
  **/
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-enter .modal-container  {
    transform: translateY(-200px) scale(1.1);
  }
  .modal-leave-active .modal-container {
    transform: translateY(200px) scale(0.8);
  }
</style>
