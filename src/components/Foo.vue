<template lang="html">
  <div class="">
    <div class="boxFoo">
      <h1>Foo</h1>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.boxFoo {
  border: 2px solid #d73842;
  width: 40vh;
}
</style>
