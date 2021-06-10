<template>
  <div>
    <div class="about-top"></div>
    <div class="about-bot">
      <div class="bot-center">
        <div class="center-left fl">
          <ul>
            <li @click="getData(0)">
              <a href="javascript:;" :class="{eart:flag[0]}">关于我们</a>
            </li>
            <li @click="getData(1)">
              <a href="javascript:;" :class="{eart:flag[1]}">联系我们</a>
            </li>
            <li @click="getData(2)">
              <a href="javascript:;" :class="{eart:flag[2]}">招聘要求</a>
            </li>
          </ul>
        </div>
        <div class="center-right">
          <h2>{{title}}</h2>
          <VueMarkdown :source="value"></VueMarkdown>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.about-top {
  width: 100%;
  height: 330px;
  background: url("../assets/img/about.jpg");
  background-size: 100% 100%;
}
.about-bot {
  width: 100%;
  height: 997px;
  background-color: #f9f9f9;
  .bot-center {
    width: 1210px;
    height: 827px;
    padding-top: 50px;
    margin: 0 auto;
    .center-left {
      width: 232px;
      height: 180px;
      ul {
        width: 100%;
        height: 100%;
        li {
          width: 232px;
          height: 50px;
          line-height: 50px;
          background-color: rgb(235, 235, 235);
          &:nth-of-type(2) {
            margin: 15px 0;
          }
          a {
            display: block;
            font-size: 16px;
            color: rgb(102, 102, 102);
          }
          .eart {
            background-color: rgb(60, 181, 213);
            color: #fff;
          }
        }
      }
    }
    .center-right{
      float: right;
      width: 948px;
      padding: 0 20px;
      height: 827px;
      background-color: #fff;
      box-sizing: border-box;
      h2 {
        line-height: 3;
        margin-bottom: 20px;
        font-size: 26px;
        font-weight: 700;
        text-align: left;
        border-bottom: 1px solid #666;
      }
    }
  }
}
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'aboutus',
  data () {
    return {
        data: [],
        value: '',
        flag: [true, false, false],
        title: ''
    }
  },
  components: {
    VueMarkdown
  },
  methods: {
    getData (index) {
      this.flag = [false, false, false]
      this.flag[index] = true
      this.value = this.data[index].content
      this.title = this.data[index].title
    }
  },
  mounted () {
    this.$http.get('index.php/api/about_us/list').then(res => {
      this.data = res
      this.value = this.data[this.$store.state.aboutus].content
      this.title = this.data[this.$store.state.aboutus].title
      // console.log(this.$store.state.aboutus)
    })
  },
  activated () {}
}
</script>