<template>
<div class="box">
  <div class="top">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <div class="tab">
      <ul>
        <li @click="current(0)" :class="{current:$store.state.flag[0]}">
          <router-link to="/index">首页</router-link>
        </li>
        <li @click="current(1),getAbout(0)" :class="{current:$store.state.flag[1]}">
          <router-link to="/aboutus">关于我们</router-link>
        </li>
        <li @click="current(2)" :class="{current:$store.state.flag[2]}">
          <router-link to="/modelshow">模特展示</router-link>
        </li>
        <li @click="current(3)" :class="{current:$store.state.flag[3]}">
          <router-link to="/environmental">环境展示</router-link>
        </li>
        <li @click="current(4)" :class="{current:$store.state.flag[4]}">
          <router-link to="/journalism">夜场新闻</router-link>
        </li>
        <li @click="current(5),getAbout(1)" :class="{current:$store.state.flag[5]}">
          <router-link to="/aboutus">联系我们</router-link>
        </li>
        <li @click="current(6),getAbout(2)" :class="{current:$store.state.flag[6]}">
          <router-link to="/aboutus">招聘要求</router-link>
        </li>
      </ul>
    </div>
    <div class="msg">
      <span>13688143752</span>
    </div>
    <div class="img">
      <img src="../assets/img/phone.png" alt="" />
    </div>
  </div>
</div>
</template>
<style lang="less">
@import "../assets/css/base.css";
.box {
  width: 100%;
  background-color: #fff;
}
.top {
  display: flex;
  width: 1200px;
  height: 101px;
  margin: 0 auto;
  position: relative;
  .logo {
    width: 249px;
    height: 100%;
    line-height: 101px;
    img {
      width: 100%;
      height: 31px;
      cursor: pointer;
    }
  }
  .tab {
    width: 700px;
    height: 101px;
    line-height: 101px;
    ul {
      display: flex;
      li {
        width: 100px;
        height: 100%;
        cursor: pointer;
        &:nth-child(1) {
          width: 100px;
          height: 100%;
          cursor: pointer;
          a {
            padding: 0 22px 39.5px;
          }
        }
        &:hover a {
          color: rgb(60, 181, 213);
          border-bottom: 2px solid rgb(60, 181, 213);
        }
        a {
          font-size: 14px;
          padding: 0 22px 39.5px;
        }
      }
      .current {
        a {
          color: rgb(60, 181, 213);
          border-bottom: 2px solid rgb(60, 181, 213);
        }
      }
    }
  }
  .msg {
    display: flex;
    width: 22px;
    height: 22px;
    line-height: 101px;
    margin-left: 145px;
    img {
      width: 22px;
      height: 22px;
    }
    span {
      font-size: 16px;
      color: #00b7d9;
    }
  }
  .img {
    position: absolute;
    top: 40px;
    left: 1066px;
    width: 22px;
    height: 22px;
    position: absolute;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    current (index) {
      var arr = [false, false, false, false, false, false, false]
      arr[index] = true
      this.$store.commit('getflag', arr)
    },
    getAbout (num) {
      this.$store.commit('getAbout', num)
    }
  }
}
</script>