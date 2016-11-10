<template lang="html">
  <div class="">
    <div class="boxBar">
      <h1>Bar</h1>
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
.boxBar {
  border: 2px solid #36d053;
  width: 40vh;
}
</style>
