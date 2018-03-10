<template lang="pug">
  section.jumbotron
    .container
      .row
        .col-md-12
          h1.jumbotron-heading {{ title }}
</template>

<script>
export default {
  name: 'jumbotron',
  props: ['title']
}
</script>

<style lang="scss">

</style>
