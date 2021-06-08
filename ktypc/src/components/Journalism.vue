<template>
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
        <div class="navigation">
            <ul class="clearfix">
                <li><a href="javascript:;">首页</a></li>
                <li>&gt;&gt;</li>
                <li><a href="javascript:;">夜场展示</a></li>
            </ul>
        </div>
        <div class="joumalism">
            <div class="joumalism-top">
                <h2>夜场新闻</h2>
                <p>成都夜场</p>
            </div>
            <div class="joumalism-btm">
                <h2>夜场新闻</h2>
                <ul class="clearfix">
                    <li v-for="val in listData" :key="val.id">
                        <a href="javascript:;">{{val.title}}</a>
                    </li>
                </ul>
                <div class="page-turner"></div>
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
        // padding: 120px;
        border: 1px solid #999;
        .joumalism-top {
            width: 100%;
            border-bottom: 1px solid #999;
            h2 {
                width: 100%;
                height: 32px;
                line-height: 32px;
                color: #2090FF;
                border-bottom: 2px solid #2090FF;
                font-size: 14px;
                text-align: left;
                background: url('../assets/img/MoHead_Bg.png') no-repeat 7px center;
                padding-left: 14px;
            }
            p {
                height: 50px;
                line-height: 50px;
                padding-left: 14px;
                font-size: 14px;
                text-align: left;
            }
        }
        .joumalism-btm {
            width: 100%;
            h2 {
                width: 100%;
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
    }
}
</style>
<script>
export default {
  data () {
    return {
        listData: []
    }
  },
  mounted () {
    this.$http.get('/index.php/api/journalism/list').then(res => {
        console.log(res)
        this.listData = res
    })
  }
}
</script>