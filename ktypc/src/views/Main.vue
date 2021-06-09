<template>
    <div>
        <my-head></my-head>
        <keep-alive exclude="newsdetails,aboutus,environmentaldetails">
            <router-view></router-view>
        </keep-alive>
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