<template lang="pug">
  header
    nav.navbar.navbar-expand-md.fixed-top.navbar-dark.bg-primary.box-shadow.justify-content-between
      .navbar-brand.d-flex.align-items-center.text-white(@click="scrollTop")
        svg.mr-2(xmlns='http://www.w3.org/2000/svg', width='25', height='25', viewbox='0 0 24 24', fill='none', stroke='currentColor', stroke-width='2', stroke-linecap='round', stroke-linejoin='round')
          path(d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z')
          circle(cx='12', cy='13', r='4')
        strong {{ title }}
      p.text-white.text-xs.text-small
        span.d-none.d-sm-inline-block {{ message }}
        span {{ totalCards }}
</template>

<script>
  export default {
    name: 'navbar',
    props: [ 'title', 'album' ],
    data() {
      return {
        message: 'Visible cards: '
      }
    },
    methods: {
      scrollTop(e) {
        document.querySelector('.jumbotron').scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    computed: {
      totalCards () {
        return ' ('+this.album.visibleCards+'/'+this.album.totalCards+')';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    transform: translateZ(0);
  }
  .navbar-brand {
    cursor: pointer;
  }
</style>
