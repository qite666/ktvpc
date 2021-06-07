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
            <div class="circumstances">
                <h2>ENVIRONMENTAL DISPLAY</h2>
                <p>环境/AMBIENT</p>
                <div class="border"></div>
                <ul>
                    <li><a href="javascript:;"></a></li>
                </ul>
                <div></div>
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
    .circumstances {
        width: 100%;
        background-color: ##f3f3f3;
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