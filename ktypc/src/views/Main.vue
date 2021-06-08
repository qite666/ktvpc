<template>
    <div>
        <my-head></my-head>
        <router-view></router-view>
        <my-foot></my-foot>
    </div>
</template>
<script>
import myHead from './Header'
import myFoot from './Footer'
export default {
    components: {
        myHead: myHead,
        myFoot: myFoot
    }
}
</script>