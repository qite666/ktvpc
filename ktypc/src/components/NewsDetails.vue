<template>
    <div class="content">
        <div class="banner">
            <img :src="imgUrl + bannerImg" alt="">
            <div class="discounts">
                <VueMarkdown :source="value2"></VueMarkdown>
            </div>
            <div class="qr-code"><img src="../assets/img/patrick.png" alt=""></div>
            <div class="tel">T：13688143752</div>
        </div>
        <div class="img"><img src="../assets/img/tmp1.jpg" alt=""></div>
        <div class="about-bot">
            <div class="navigation">
                <ul class="clearfix">
                    <li><router-link to="/index">首页</router-link></li>
                    <li>&gt;&gt;</li>
                    <li><router-link to="/journalism">环境展示</router-link></li>
                    <li>&gt;&gt;</li>
                    <li><a href="javascript:;">{{title}}</a></li>
                </ul>
            </div>
            <div class="bot-center clearfix">
                <div class="center-left fl">
                    <ul>
                        <li>
                            <a href="javascript:;" class="eart">{{name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="center-right">
                    <h2>{{title}}</h2>
                    <VueMarkdown :source="value"></VueMarkdown>
                    <div class="fanye" v-if="data.length > 0">
                        <div class="fanye-lf" v-if="index > 0">
                            <span>上一篇</span><a href="javascript:;" @click="getData(index - 1)">{{data[index - 1].title}}</a>
                        </div>
                        <div class="fanye-rt" v-if="index < data.length - 1">
                            <span>下一篇</span>
                            <a href="javascript:;" @click="getData(index + 1)">{{data[index + 1].title}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.content {
    .banner {
        position: relative;
        left: 0;
        right: 0;
        width: 100%;
        height: 600px;
        &>img {
            height: 100%;
        }
        .discounts {
            position: absolute;
            left: 50%;
            top: 128px;
            width: 803px;
            height: 185px;
            margin-left: -401.5px;
            padding: 25px;
            background-color: rgba(102, 0, 0, .7);
            box-sizing: border-box;
            font-size: 22px;
            color: rgb(255, 255, 255);
            line-height: 2;
        }
        .qr-code {
            position: absolute;
            width: 134px;
            height: 134px;
            top: 408px;
            left: 50%;
            margin: -67px;
        }
        .tel {
            position: absolute;
            width: 135px;
            height: 45px;
            line-height: 45px;
            left: 50%;
            top: 556px;
            margin: -67px;
            background-color: #d9534f;
            border-color: #d43f3a;
            font-size: 16px;
            color: #fff;
            text-align: center;
        }
    }
    .img {
        width: 100%;
        img {
            width: 100%;
        }
    }
}
.about-bot {
  width: 100%;
  background-color: #f9f9f9;
  .navigation {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 30px;
        padding-top: 30px;
        ul {
            border-left: 2px solid #2090FF;
            padding-left: 5px;
            li {
                line-height: 1;
                padding: 5px;
                float: left;
                font-size: 16px;
                a {
                    display: block;
                    color: #333333;
                }
            }
        }
    }
  .bot-center {
    width: 1210px;
    // padding-top: 50px;
    padding-bottom: 100px;
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
      padding: 0 20px 40px;
      background-color: #fff;
      box-sizing: border-box;
      h2 {
          line-height: 3;
          margin-bottom: 20px;
          font-size: 20px;
          text-align: left;
          border-bottom: 1px dashed;
      }
      .fanye {
          float: right;
          width: 100%;
          height: 44px;
          font-size: 14px;
          color: #666;
          line-height: 24px;
          padding: 10px;
          margin: 50px 0 0;
          background-color: #f5f5f5;
          box-sizing: border-box;
          .fanye-lf {
            float: left;
          }
          .fanye-rt {
              float: right;
          }
          a {
              font-size: 14px;
              color: #666;
              margin-left: 10px;
              &:hover {
                  color: #2090FF;
              }
          }
      }
    }
  }
}
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    name: 'newsdetails',
  data () {
    return {
        data: [],
        value: '',
        value2: '',
        title: '',
        index: 0,
        name: '',
        bannerImg: ''
    }
  },
  components: {
    VueMarkdown
  },
  methods: {
      getData (index) {
          this.index = index
          this.index = parseInt(this.index)
          this.value = this.data[this.index].content
          this.title = this.data[this.index].title
          this.name = this.data[this.index].name
      }
  },
  mounted () {
    this.index = parseInt(this.$route.params.id)
    this.$http.get('/index.php/api/journalism/list').then(res => {
      this.data = res
      console.log(this.data)
      this.value = this.data[this.index].content
      this.title = this.data[this.index].title
      this.name = this.data[this.index].name
    })
    // 轮播图
    this.$http.get('index.php/api/carousel_map/list').then(res => {
        this.value2 = res[0].content
        this.bannerImg = res[0].image
    })
  }
}
</script>