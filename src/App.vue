<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <TestImg />
</template>

<script>
// import TestImg from '~/components/LoadTest'
export default {
  // components: {
  //   TestImg
  // },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase(){
      this.count += 1
   }
  }
}
</script>

<style lang=scss>
  h1 {
    font-size: 50px;
    color: royalblue;
  }
</style>
