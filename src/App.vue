<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <!-- 디렉티브 -->
  <div v-if="count > 4">
    4보다 큽니다~!
  </div>
  <ul>
    <li
      v-for="fruit in fruits"
      :key="fruit">
      {{ fruit }}
    </li>
  </ul>
</template>

<script>
// import TestImg from '~/components/LoadTest'
export default {
  // components: {
  //   TestImg
  // },
  data() {
    return {
      // 반응성 데이터가 갱신되면 반영됨
      count: 0,
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  methods: {
    increase(){
      this.count += 1
   }
  }
}
</script>

<style lang="scss">
  h1 {
    font-size: 50px;
    color: royalblue;
  }
  ul {
    li {
      font-size: 20px;
    }
  }
</style>
