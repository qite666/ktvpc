<template>
    <div class="content">
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
                <li><router-link to="/index">首页</router-link></li>
                <li>&gt;&gt;</li>
                <li><a href="javascript:;">环境展示</a></li>
            </ul>
        </div>
        <div class="type">
            <ul class="clearfix">
                <li>
                    <a href="javascript:;">夜场环境</a>
                </li>
            </ul>
        </div>
        <div class="list">
             <ul class="clearfix">
                <li v-for="(val) in listData" :key="val.id">
                    <router-link :to="'/environmentaldetails/' + val.id">
                        <div class="list-top">
                            <img :src="'http://49.235.93.38:82' + val.image" alt="">
                        </div>
                        <div class="list-btm">
                            <p>{{val.title}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="right-fot">
          <span>共有一页</span>
          <span>首页</span>
          <span>上一页</span>
          <i>1</i>
          <span>下一页</span>
          <span>尾页</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/css/base.css';
.content {
    width: 100%;
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
    .type {
        width: 1200px;
        margin: 0 auto;
        ul {
            padding-bottom: 20px;
            li {
                width: 170px;
                line-height: 30px;
                border: 1px solid #f7f7f7;
                float: left;
                font-size: 14px;
                a {
                    display: block;
                    color: #333333;
                }
            }
        }
    }
    .list {
        width: 1200px;
        margin: 0 auto;
        ul {
            padding-bottom: 20px;
            li {
                width: 270px;
                height: 330px;
                padding: 20px 10px;
                margin-right: 10px;
                margin-bottom: 10px;
                border: 1px solid #f7f7f7;
                float: left;
                font-size: 14px;
                a {
                    color: #333333;
                    .list-top {
                        display: flex;
                        align-items: center;
                        width: 280px;
                        height: 280px;
                        overflow: hidden;
                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }
                    .list-btm {
                        text-align: left;
                        line-height: 2;
                    }
                }
                &:nth-of-type(4n) {
                    margin-right: 0;
                }
            }
        }
    }
    .right-fot {
      display: flex;
      align-items: center;
      justify-content: center;
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
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  data () {
    return {
        listData: [],
        value: '',
        bannerImg: ''
    }
  },
  components: {
    VueMarkdown
  },
  mounted () {
    this.$http.get('index.php/api/ambient/list').then(res => {
        console.log(res)
        this.listData = res
    })
    // 轮播图
    this.$http.get('index.php/api/carousel_map/list').then(res => {
        this.value = res[0].content
        this.bannerImg = res[0].image
    })
  }
}
</script>