<template>
<h1>{{ message }}</h1>
<TestImg />
</template>

<script>
import TestImg from '~/components/LoadTest'
export default {
  components: {
    TestImg
  },
  data() {
    return {
      message: 'Test'
    }
  }
}
</script>
