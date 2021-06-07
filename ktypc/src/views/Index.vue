<template>
    <div>
        <my-head></my-head>
        <my-foot></my-foot>
    </div>
</template>
<style scoped>
@import '../assets/css/base.css';
</style>
<script>
import myHead from './Header'
import myFoot from './Footer'
export default {
  data () {
    return {}
  },
  components: {
    myHead: myHead,
    myFoot: myFoot
  }
}
</script>