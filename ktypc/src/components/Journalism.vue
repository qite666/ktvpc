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
                <li><a href="javascript:;">夜场展示</a></li>
            </ul>
        </div>
        <div class="joumalism">
            <div class="joumalism-top">
                <h2>夜场新闻</h2>
                <ul class="clearfix">
                    <li v-for="val in type" :key="val.name" @click="gettype(val.id)">{{val.name}}</li>
                </ul>
            </div>
            <div class="joumalism-btm">
                <h2>夜场新闻</h2>
                <ul class="clearfix">
                    <li v-for="(val,index) in listData" :key="val.id">
                        <router-link :to="'/newsdetails/' + index">{{val.title}}</router-link>
                    </li>
                </ul>
                <div class="page-turner">
                    <span>共有一页</span>
                    <span>首页</span>
                    <span>上一页</span>
                    <i>1</i>
                    <span>下一页</span>
                    <span>尾页</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/css/base.css';
.content {
    width: 100%;
    border: 1px solid #f7f7f7;
    background-color: #f7f7f7;
    box-sizing: border-box;
    .banner {
        position: relative;
        left: 0;
        right: 0;
        width: 100%;
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
        }
    .navigation {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 30px;
        ul {
            border-left: 2px solid #2090FF;
            margin: 40px 0 0;
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
    .joumalism {
        width: 1200px;
        margin: 0 auto 120px;
        border: 1px solid #999;
        .joumalism-top {
            width: 100%;
            border-bottom: 1px solid #999;
            h2 {
                height: 32px;
                line-height: 32px;
                color: #2090FF;
                border-bottom: 2px solid #2090FF;
                font-size: 14px;
                text-align: left;
                background: url('../assets/img/MoHead_Bg.png') no-repeat 7px center;
                padding-left: 14px;
            }
            ul {
                height: 50px;
                line-height: 50px;
                padding-left: 14px;
                font-size: 14px;
                text-align: left;
                li {
                    float: left;
                    padding: 0 10px;
                }
            }
        }
        .joumalism-btm {
            width: 100%;
            h2 {
                height: 32px;
                line-height: 32px;
                color: #2090FF;
                border-bottom: 2px solid #2090FF;
                font-size: 14px;
                text-align: left;
                background: url('../assets/img/MoHead_Bg.png') no-repeat 7px center;
                padding-left: 14px;
            }
            ul {
                li {
                    float: left;
                    padding: 0 5px;
                    width: 390px;
                    height: 30px;
                    line-height: 30px;
                    a {
                        display: block;
                        padding-left: 14px;
                        font-size: 14px;
                        text-align: left;
                        border-bottom: 1px dashed #ccc;
                    }
                }
            }
            .page-turner {
                width: 100%;
                height: 50px;
            }
        }
        .page-turner {
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
        listData: [],
        value: '',
        bannerImg: '',
        type: []
    }
  },
  components: {
    VueMarkdown
  },
  methods: {
    gettype (id) {
      this.$http.get('/index.php/api/journalism/list?pageNumber=1&pageSize=21&journalismtypeid=' + id).then(res => {
          console.log(res)
        this.listData = res
      })
    }
  },
  mounted () {
    this.$http.get('/index.php/api/journalism/list').then(res => {
        this.listData = res
    })
    // 轮播图
    this.$http.get('index.php/api/carousel_map/list').then(res => {
        this.value = res[0].content
        this.bannerImg = res[0].image
    })
    this.$http.get('/index.php/api/journalismtype/list').then(res => {
        console.log(res)
        this.type = res
    })
  }
}
</script>