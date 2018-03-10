<template lang="pug">
  section.jumbotron.text-center.d-flex.align-items-center(:style="'background-position-y:'+backgroundTop+'px; height:'+jumbotronHeight+'vh'")
    .container
      .row
        .col-md-12
          h1.jumbotron-heading.text-uppercase {{ title }}
          p.lead.text-white {{ message }}
</template>

<script>
const INITAL_HEIGHT = 100;
const PARALLAX_EFFECT = 0.2;

export default {
  name: 'jumbotron',
  props: ['title'],
  data () {
    return {
      backgroundTop: 0,
      jumbotronHeight: INITAL_HEIGHT,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    }
  },
  mounted(){
    this.scrollListener();
  },
  methods: {
    scrollListener() {
      window.addEventListener('scroll', this.parallaxEffect);
    },
    parallaxEffect(){
      let currentScroll = window.pageYOffset;
      this.backgroundTop  = currentScroll * PARALLAX_EFFECT;
      this.jumbotronHeight = INITAL_HEIGHT - (currentScroll * PARALLAX_EFFECT);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/utils/variables";
  .jumbotron {
    background: $primary url(../assets/img/jumbotron-bg.jpg) center top;
    background-size: cover;
    border-radius: 0;
    position: relative;
    margin-bottom: 2rem;
    height: 80vh;
    min-height: 400px;
    @media screen and (min-width: 576px){
      margin-bottom: 5rem;
    }
      &::before {
        content: '';
        background-color: transparentize($primary, 0.7);
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
  }
  .jumbotron-heading{
    color: $yellow;
    font-weight: 700;
    font-style: normal;
    font-size: 30px;
    line-height: 1;
    margin: 75px 0;
    @media screen and (min-width: 576px){
      font-size: 68px;
    }
  }
  .lead{
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: none;
    line-height: 1.5em;
    margin: 20px 0;
    @media screen and (min-width: 576px){
      font-size: 22px;
    }
  }
</style>
