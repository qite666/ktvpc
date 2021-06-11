<template>
  <div>
    <div class="banner">
      <img :src="imgUrl + bannerImg" alt="">
      <div class="discounts">
        <VueMarkdown :source="value"></VueMarkdown>
      </div>
      <div class="qr-code"><img src="../assets/img/patrick.png" alt=""></div>
      <div class="tel">T：13688143752</div>
    </div>
    <div class="navigation">
      <ul class="clearfix">
        <li><a href="javascript:;">首页</a></li>
        <li>&gt;&gt;</li>
        <li><a href="javascript:;">模特展示</a></li>
      </ul>
    </div>
    <div class="modshow-center">
      <div class="cent-left fl">
        <ul class="left-top">
          <li></li>
          <li><p>模特展示</p></li>
          <li></li>
        </ul>
        <div class="left-bot">
          <i></i>
          <span>高端模特</span>
        </div>
      </div>
      <div class="cent-right fr">
        <div class="right-dw">
          <ul>
            <li></li>
            <li><p>模特展示</p></li>
            <li></li>
          </ul>
        </div>
        <div class="right-center">
          <ul>
            <li v-for="val in modelData" :key="val.id">
              <router-link :to="/modelshow2/ + val.id">
                <div class="cent-img">
                  <img :src="imgUrl + val.image" alt="" />
                </div>
                <div class="cent-price">
                  <em>{{val.price}}</em><span>元</span>
                </div>
                <h3>{{val.title}}</h3>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right-fot">
          <span>共有一页</span>
          <span>首页</span>
          <span>上一页</span>
          <i>{{ msg }}</i>
          <span>下一页</span>
          <span>尾页</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
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
.navigation {
  width: 1200px;
  margin: 0 auto;
  ul {
    margin: 10px 0 15px;
    background-color: #f8f8f8;
    padding-left: 5px;
    li {
      line-height: 1.8;
      padding: 5px;
      float: left;
      font-size: 14px;
      color: #2090FF;
      a {
        display: block;
        color: #333333;
      }
    }
  }
}
.modshow-center {
  width: 1210px;
  height: 672px;
  margin: 0 auto;
  .cent-left {
    position: relative;
    width: 360px;
    height: 64px;
    margin-top: 15px;
    border: 1px dashed skyblue;
    .left-top {
      position: absolute;
      top: -15px;
      left: 5px;
      display: flex;
      li:nth-of-type(1) {
        width: 23px;
        height: 30px;
        background: url("../assets/img/MoName_Bg.png") -30px 0;
      }
      li:nth-of-type(2) {
        width: 76px;
        height: 30px;
        line-height: 30px;
        background: url("../assets/img/MoName_Bg.png") 0 -35px;
        p {
          font-size: 14px;
          color: #fff;
        }
      }
      li:nth-of-type(3) {
        width: 30px;
        height: 30px;
        background: url("../assets/img/MoName_Bg.png") 0 -74px;
      }
    }
    .left-bot {
      width: 328px;
      height: 32px;
      text-align: left;
      border-bottom: 1px dashed #ccc;
      padding: 0 10px;
      margin: 26px auto 0;
      display: flex;
      i {
        display: block;
        width: 10px;
        height: 10px;
        margin-top: 6px;
        background: url("../assets/img/arrow.png") -10px -10px;
      }
      span {
        font-size: 14px;
        font-weight: 700;
        &:hover {
          color: #2090ff;
        }
      }
    }
  }
  .cent-right {
    position: relative;
    width: 828px;
    height: 643px;
    margin-top: 15px;
    border: 1px dashed skyblue;
    .right-dw {
      position: absolute;
      top: -15px;
      left: 5px;
      ul {
        display: flex;
        li:nth-of-type(1) {
          width: 23px;
          height: 35px;
          background: url("../assets/img/MoName_Bg.png") -30px 0;
        }
        li:nth-of-type(2) {
          width: 76px;
          height: 35px;
          line-height: 30px;
          background: url("../assets/img/MoName_Bg.png") 0 -35px;
          p {
            font-size: 14px;
            color: #fff;
          }
        }
        li:nth-of-type(3) {
          width: 30px;
          height: 35px;
          background: url("../assets/img/MoName_Bg.png") 0 -70px;
        }
      }
    }
    .right-center {
      width: 818px;
      height: 571px;
      margin-top: 30px;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 272px;
          height: 275px;
          .cent-img {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            border: 1px dashed #ccc;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .cent-price{
            width: 200px;
            height: 35px;
            text-align: left;
            line-height: 35px;
            margin: 0 auto;
            em{
              font-size: 14px;
              color: #E53A3E;
              margin-right: 5px;
            }
            span{
              font-size: 14px;
              color: #999;
            }
          }
          h3{
            width: 200px;
            margin: 0 auto;
            font-weight: 700;
            line-height: 24px;
            font-size: 14px;
            color: #444;
            text-align: left;
            &:hover{
              color: #2090FF;
            }
          }
        }
      }
    }
    .right-fot {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 818px;
      height: 44px;
      span {
        display: block;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        text-align: center;
        border: 1px solid #ddd;
        margin-right: 5px;
        padding: 0 10px;
        cursor: not-allowed;
      }
      i {
        display: block;
        color: #fff;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        text-align: center;
        background-color: #2090ff;
        border: 1px solid #2090ff;
        margin-right: 5px;
        padding: 0 10px;
      }
    }
  }
}
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  data () {
    return {
      msg: 1,
      modelData: [],
      value: '',
      bannerImg: ''
    }
  },
  components: {
    VueMarkdown
  },
  mounted () {
    // 轮播图
    this.$http.get('index.php/api/carousel_map/list').then(res => {
        this.value = res[0].content
        this.bannerImg = res[0].image
    })
    this.$http.get('index.php/api/models/list').then(res => {
        this.modelData = res.filter((val, index) => index <= 5)
    })
  }
}
</script>