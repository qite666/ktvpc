<template>
    <div>
        <my-head></my-head>
        <div class="content">
            <div class="banner">
                <img src="../assets/img/image-10.jpg" alt="">
                <div class="discounts">
                    <p>全场所有啤酒均可享受买二送一，还有更多豪礼等着你!</p>
                    <p>当晚本包间消费满6666以上，当晚可赠送豪华名宿酒店一套，限当天使用。</p>
                    <p>小包低消1080元 中包低消1280 大包低消1380 豪包低消2680</p>
                </div>
                <div class="qr-code"><img src="../assets/img/patrick.png" alt=""></div>
                <div class="tel">T：13688143752</div>
            </div>
            <div class="circumstances-box">
                <div class="circumstances">
                    <h2>ENVIRONMENTAL DISPLAY</h2>
                    <p>环境/AMBIENT</p>
                    <div class="border"></div>
                    <ul class="clearfix">
                        <li>
                            <a href="javascript:;">
                                <div class="list-top"><img src="../assets/img/14455970_1563958962.jpg" alt=""></div>
                                <div class="list-btm">
                                    <h3>成都夜总会环境</h3>
                                    <p>联系人：周经理</p>
                                    <p>手 机：13688143752（微信同号）</p>
                                    <p>地 址：成都</p>
                                    <div class="list-btm-btm">
                                        <div><img src="../assets/img/7936683_1538965745.png" alt=""><span>：夜场模特</span></div>
                                        <div><img src="../assets/img/7936704_1538965778.png" alt=""><span>：1203人</span></div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="list-top"><img src="../assets/img/14455970_1563958962.jpg" alt=""></div>
                                <div class="list-btm">
                                    <h3>成都夜场环境</h3>
                                    <p>联系人：周经理</p>
                                    <p>手 机：13688143752（微信同号）</p>
                                    <p>地 址：成都</p>
                                    <div class="list-btm-btm">
                                        <div><img src="../assets/img/7936683_1538965745.png" alt=""><span>：夜场模特</span></div>
                                        <div><img src="../assets/img/7936704_1538965778.png" alt=""><span>：1203人</span></div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div class="list-top"><img src="../assets/img/14455970_1563958962.jpg" alt=""></div>
                                <div class="list-btm">
                                    <h3>成都酒吧环境</h3>
                                    <p>联系人：周经理</p>
                                    <p>手 机：13688143752（微信同号）</p>
                                    <p>地 址：成都</p>
                                    <div class="list-btm-btm">
                                        <div><img src="../assets/img/7936683_1538965745.png" alt=""><span>：夜场模特</span></div>
                                        <div><img src="../assets/img/7936704_1538965778.png" alt=""><span>：1203人</span></div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="more"><a href="javascript:;">查看更多</a></div>
                </div>
            </div>
            <div class="about">
                <h3>关于/ABOUT</h3>
                <h2>锦缘国际夜总会</h2>
                <p>成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，设备齐全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢</p>
                <div><a href="javascript:;">了解详细</a></div>
            </div>
        </div>
        <my-foot></my-foot>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/css/base.css';
.content {
    width: 100%;
    .banner {
        position: relative;
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
}
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