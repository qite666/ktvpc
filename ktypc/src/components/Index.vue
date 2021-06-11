<template>
    <div>
        <div class="bg"></div>
        <div class="content">
            <div class="banner">
                <img :src="imgUrl + bannerImg" alt="">
                <div class="discounts">
                    <VueMarkdown :source="value"></VueMarkdown>
                </div>
                <div class="qr-code"><img src="../assets/img/patrick.png" alt=""></div>
                <div class="tel">T：13688143752</div>
            </div>
            <div class="circumstances-box">
                <div class="circumstances">
                    <div class="headline">
                    <h2>ENVIRONMENTAL DISPLAY</h2>
                    <p>环境/AMBIENT</p>
                    <div class="border"></div>
                    </div>
                    <ul class="clearfix">
                        <li v-for="val in environmental" :key="val.image">
                            <a href="javascript:;">
                                <div class="list-top"><img :src="imgUrl + val.image" alt=""></div>
                                <div class="list-btm">
                                    <h3>{{val.title}}</h3>
                                    <p>联系人：{{val.contacts}}</p>
                                    <p>手 机：{{val.phone}}</p>
                                    <p>地 址：成都</p>
                                    <div class="list-btm-btm">
                                        <div><img src="../assets/img/7936683_1538965745.png" alt=""><span>：夜场模特</span></div>
                                        <div><img src="../assets/img/7936704_1538965778.png" alt=""><span>：{{val.frequency}}人</span></div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="more"><router-link to="/environmental">查看更多</router-link></div>
                </div>
            </div>
            <div class="about">
                <h3>关于/ABOUT</h3>
                <h2>锦缘国际夜总会</h2>
                <p>成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，设备齐全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢</p>
                <div><router-link to="/aboutus">了解详细</router-link></div>
            </div>
            <div class="model-box">
                <div class="model">
                    <h2>高端KTV夜总会模特</h2>
                    <div></div>
                    <ul>
                        <li v-for="val in modelData" :key="val.id">
                            <router-link :to="'/modelshow2/' + val.id">
                                <img :src="imgUrl + val.image" alt="">
                                <p>{{val.title}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="journalism-box">
                <div class="journalism">
                    <h2>新闻咨询</h2>
                    <p>T E A C H E R</p>
                    <div class="border"></div>
                    <div class="journalism-hd clearfix">
                        <div class="journalism-lf">
                            <img src="../assets/img/image-110.jpeg" alt="">
                        </div>
                        <div class="journalism-rt">
                            <ul>
                                <li v-for="val in journalism" :key="val.id">
                                    <router-link :to="'/environmentaldetails/' + val.id">
                                        <div class="img">
                                            <img :src="imgUrl + val.image" alt="">
                                        </div>
                                        <div class="con">
                                            <h2>{{val.title}}</h2>
                                            <p>{{val.content}}</p>
                                        </div>
                                        <div class="date">{{val.time}}</div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
            p {
                color: rgb(255, 255, 255);
                font-size: 22px;
                line-height: 2;
                &:last-of-type {
                    margin-top: 10px;
                    font-weight: 400;
                    line-height: 1.3;
                    color: rgb(255, 255, 0);
                    font-size: 20px;
                }
            }
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
    .circumstances-box {
        width: 100%;
        background-color: #f3f3f3;
        .circumstances {
            width: 1200px;
            height: 948px;
            margin: 0 auto;
                animation: move 1s;
                h2 {
                    padding-top: 66px;
                    color: #212121;
                    font-size: 36px;
                    font-weight: 700;
                }
                p {
                    padding: 15px 0 8px;
                    color: #989898;
                    font-size: 18px;
                    line-height: 2;
                }
                .border {
                    width: 36px;
                    height: 2px;
                    margin: 0 auto;
                    background-color: rgb(60, 181, 213);
                }
            ul {
                margin-top: 90px;
                animation: move 1s;
                li {
                    float: left;
                    width: 380px;
                    height: 440px;
                    &:nth-of-type(-n+2) {
                        margin-right: 30px;
                    }
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: #fff;
                        .list-top {
                            width: 100%;
                            height: 220px;
                            overflow: hidden;
                            img {
                                width: 100%;
                                transition: all 0.5s;
                            }
                            &:hover {
                                img {
                                    transform: scale(1.1);
                                }
                            }
                        }
                        .list-btm {
                            width: 100%;
                            height: 220px;
                            overflow: hidden;
                            h3 {
                                padding: 10px 0 20px;
                                font-size: 18px;
                                color: #666666;
                                line-height: 1.9;
                            }
                            p {
                                font-size: 14px;
                                color: #989898;
                                line-height: 1.8;
                                padding: 0;
                            }
                            .list-btm-btm {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                padding: 26px 36px 0;
                                color: #989898;
                                font-size: 14px;
                                line-height: 1.8;
                                img {
                                    width: auto;
                                }
                            }
                        }
                    }
                }
            }
            .more {
                width: 146px;
                height: 50px;
                line-height: 50px;
                margin: 90px auto 0;
                border-radius: 6px;
                background-color: rgb(60, 181, 213);
                a {
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
    }
    .about {
        width: 1200px;
        height: 556px;
        margin: 84px auto;
        background-color: rgba(0, 0, 0, .3);
        h3 {
            padding-top: 28px;
            font-size: 18px;
            color: #FFFFFF;
            line-height: 1.9;
            animation: movetwo 1s;
        }
        h2 {
            padding: 30px 0;
            font-size: 40px;
            font-family: AlibabaPuHuiTi-Heavy, AlibabaPuHuiTi-Heavy_1609925904501;
            color: #FFFFFF;
            line-height: 1.9;
        }
        p {
            width: 601px;
            margin: 0 auto;
            color: #FFFFFF;
            font-size: 18px;
            line-height: 2;
        }
        div {
            width: 240px;
            height: 45px;
            line-height: 45px;
            margin: 116px auto;
            border: 2px solid #fff;
            a {
                display: block;
                font-size: 16px;
                color: #fff;
            }
        }
    }
    .model-box {
        width: 100%;
        height: 1230px;
        background-color: rgb(225, 229, 232);
        .model {
            width: 1200px;
            margin: 0 auto;
            h2 {
                padding: 52px 0 25px;
                font-family: 微软雅黑;
                font-size: 32px;
                color: #333333;
                line-height: 1.9;
                animation: movetree 1s;
            }
            div {
                width: 36px;
                height: 2px;
                margin: 0 auto;
                background-color: rgb(60, 181, 213);
                animation: movetree 1s;
            }
            ul {
                width: 100%;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                margin-top: 46px;
                padding: 10px 0;
                background-color: #fff;
                li {
                    margin: 0 10px;
                    a {
                        display: block;
                        img {
                            width: 300px;
                            height: 400px;
                        }
                        p {
                            line-height: 3;
                            color: #444;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
    .journalism-box {
        width: 100%;
        background-color: #fff;
    }
    .journalism {
        width: 1200px;
        height: 860px;
        margin: 0 auto;
        &>h2 {
            padding-top: 66px;
            color: #212121;
            font-size: 36px;
            font-weight: 700;
            animation: moveform 1s;
        }
        &>p {
            padding: 15px 0 8px;
            color: #989898;
            font-size: 18px;
            line-height: 2;
            animation: moveform 1s;
        }
        .border {
            width: 36px;
            height: 2px;
            margin: 0 auto;
            background-color: rgb(60, 181, 213);
            animation: moveform 1s;
        }
        .journalism-hd {
            width: 100%;
            margin-top: 60px;
            .journalism-lf {
                float: left;
                width: 433px;
                height: 480px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .journalism-rt {
                float: right;
                width: 600px;
                ul {
                    li {
                        width: 600px;
                        margin-bottom: 20px;
                        a {
                            width: 600px;
                            height: 100px;
                            display: block;
                            .img {
                                float: left;
                                width: 100px;
                                height: 80px;
                                border: 1px solid #ccc;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                overflow: hidden;
                                img {
                                    width: 100%;
                                }
                            }
                            .con {
                                float: left;
                                width: 330px;
                                margin-left: 40px;
                                h2 {
                                    font-size: 18px;
                                    font-weight: 700;
                                    color: rgb(102, 102, 102);
                                    text-align: left;
                                }
                                p {
                                    height: 80px;
                                    font-size: 14px;
                                    color: rgb(152, 152, 152);
                                    line-height: 20px;
                                    text-align: left;
                                    text-indent: 2em;
                                    overflow: hidden;
                                }
                            }
                            .date {
                                float: right;
                                text-align: right;
                                font-size: 14px;
                                color: #989898;
                                line-height: 2;
                            }
                        }
                    }
                }
            }
        }
    }
}
.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1000px;
    z-index: -1;
    background: url('../assets/img/banner-1.jpg') top center;
}
@keyframes move {
  0% {
    opacity: 0;
    transform: translate(0, 440px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes movetwo {
  0% {
    opacity: 0;
    transform: translate(0, 62px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes movetree {
  0% {
    opacity: 0;
    transform: translate(0, 159px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes moveform {
  0% {
    opacity: 0;
    transform: translate(0, 146px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  data () {
    return {
        value: '',
        modelData: [],
        journalism: [],
        bannerImg: '',
        environmental: []
    }
  },
  components: {
    VueMarkdown
  },
  mounted () {
    this.$http.get('index.php/api/ambient/list').then(res => {
        if (res) {
            this.environmental = res.filter((val, index) => val.id <= 3)
        }
    })
    // 轮播图
    this.$http.get('index.php/api/carousel_map/list').then(res => {
        this.value = res[0].content
        this.bannerImg = res[0].image
    })
    this.$http.get('index.php/api/models/list').then(res => {
        this.modelData = res.filter((val, index) => index <= 5)
    })
    this.$http.get('index.php/api/ambient/get?id=4').then(res => {
        // console.log(res)
    })
    this.$http.get('/index.php/api/journalism/list').then(res => {
        // console.log(res)
        this.journalism = res
        this.journalism.forEach(val => {
            val.time = val.time.slice(0, 10)
        })
    })
  }
}
</script>