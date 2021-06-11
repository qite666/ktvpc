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
                <li><router-link to="/index">首页</router-link></li>
                <li>&gt;&gt;</li>
                <li><router-link to="/environmental">环境展示</router-link></li>
                <li>&gt;&gt;</li>
                <li><a href="javascript:;">{{title}}</a></li>
            </ul>
        </div>
        <div class="introduce clearfix">
            <div class="introduce-lf">
                <div class="box" ref="picture">
                    <div class="picture" @mousemove="move">
                        <img :src="imgUrl + img" alt="">
                        <div class="small" ref="small" :style="{left: smallX + 'px',top: smallY + 'px'}"></div>
                    </div>
                    <div class="enlargement" ref="enlargement">
                        <img :src="imgUrl + img" alt="" :style="{left: imgX + 'px',top: imgY + 'px'}" ref="img">
                    </div>
                </div>
                <div class="share">
                    <a href="javascript:;" title="分享到微信" @click="wxfx(true)"></a>
                    <a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932551.html%3Fbsh_bid%3D5616688263&pics=&title=%3F%3F%3F%3F%3F&summary=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F." title="分享到朋友网" target="_blank"></a>
                    <a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932551.html%3Fbsh_bid%3D5616671184&title=%3F%3F%3F%3F%3F&pics=&summary=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F.&desc=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F." title="分享到QQ空间" target="_blank"></a>
                    <a href="http://v.t.sina.com.cn/share/share.php?appkey=583395093&title=%3F%3F%3F%3F%3F%20-%20%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F.%20%20&url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932551.html%3Fbsh_bid%3D5616686444&source=bshare&retcode=0&ralateUid=" title="分享到新浪微博"  target="_blank"></a>
                    <a href="javascript:;" title="更多平台">
                        <div class="moreicon">
                            <div class="moreicon-share">
                                <a href="javascript:;">分享到</a>
                                <a href="javascript:;">X</a>
                            </div>
                            <div class="moreicon-center">
                                <div class="center-t">
                                    <ul>
                                        <li>
                                            <i></i>
                                            <p>微信</p>
                                        </li>
                                        <li>
                                            <i></i>
                                            <p>新浪微博</p>
                                        </li>
                                        <li>
                                            <i></i>
                                            <p>QQ空间</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="center-b">
                                    <ul>
                                        <li>
                                            <i></i>
                                            <span>QQ好友</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>新华微博</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>腾讯微博</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>百度空间</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>一键通</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>手机快传</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>搜狐微博</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>人人网</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>天涯</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>手机</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>凤凰微博</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>网易微博</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>朋友网</span>
                                        </li>
                                        <li>
                                            <i></i>
                                            <span>开心网</span>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <div class="moreicon-more">
                            <div class="more-l">
                                <span>更多平台...</span>
                                <span>(133)</span>
                            </div>
                            <div class="more-r">
                                <span>b</span>
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <div class="price">
                <h2>{{title}}</h2>
                <p>暂无价格</p>
            </div>
        </div>
        <div class="instructions">
            <h2>产品说明</h2>
            <img :src="imgUrl + img" alt="">
        </div>
        <div class="related-products">
            <h2>相关产品</h2>
            <div class="related-products-list">
                <ul class="clearfix">
                    <li v-for="val in relatedData" :key="val.id">
                        <a href="javascript:;" @click="getData(val.id)">
                            <div class="top"><img :src="imgUrl + val.image" alt=""></div>
                            <div class="bottom">{{val.title}}</div>
                        </a>
                    </li>
                </ul>
                <div class="left-arrow"></div>
                <div class="right-arrow"></div>
            </div>
        </div>
        <div class="wxfx" v-if="wxfxflag">
            <div class="wxfx-top">
                <ul>
                    <li>分享到 - 微信</li>
                    <li @click="wxfx(false)" style="cursor: pointer;">X</li>
                </ul>
            </div>
            <div class="wxfx-bot">
                <img src="../assets/img/barCode.jpg" alt="">
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
            font-size: 22px;
            color: rgb(255, 255, 255);
            line-height: 2;
            }
        }
    .introduce {
        width: 1200px;
        margin: 0 auto;
        .introduce-lf {
            float: left;
            width: 430px;
            .box {
                position: relative;
                width: 420px;
                height: 420px;
                .picture {
                    width: 420px;
                    height: 420px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    margin-right: 10px;
                    img {
                        width: 100%;
                    }
                    .small {
                        display: none;
                        width: 180px;
                        height: 180px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: rgba(255, 255, 0, .5);
                    }
                    &:hover {
                        .small {
                            display: block;
                        }
                    }
                }
                .enlargement {
                    display: none;
                    position: absolute;
                    top: 0;
                    right: -310px;
                    width: 300px;
                    height: 300px;
                    // align-items: center;
                    // justify-content: center;
                    overflow: hidden;
                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 200%;
                    }
                }
                &:hover {
                    .enlargement {
                        display: block;
                    }
                }
            }
            .share {
                display: flex;
                justify-content: flex-end;
                width: 422px;
                height: 30px;
                margin-top: 5px;
                a {
                    display: block;
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                    &:nth-of-type(1) {
                        background: url("../assets/img/weixin.png");
                        background-size: 100% 100%;
                    }
                    &:nth-of-type(2) {
                        background: url("../assets/img/icon2.png") 0 -216px;
                    }
                    &:nth-of-type(3) {
                        background: url("../assets/img/icon2.png") 0 -234px;
                    }
                    &:nth-of-type(4) {
                        background: url("../assets/img/icon2.png") 0 -270px;
                    }
                    &:nth-of-type(5) {
                        position: relative;
                        background: url("../assets/img/more.png");
                        background-size: 100% 100%;
                        .moreicon {
                            display: none;
                            position: absolute;
                            bottom: 14px;
                            left: 14px;
                            z-index: 100;
                            width: 270px;
                            height: 298px;
                            background-color: #fff;
                            border: 6px solid #999;
                            border-radius: 5px;
                            .moreicon-share {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                width: 258px;
                                height: 21px;
                                padding: 0 6px;
                                background-color: #f2f2f2;
                                a {
                                    display: block;
                                    font-size: 12px;
                                    font-weight: bold;
                                    color: #666;
                                    background: none;
                                    width: auto;
                                }
                            }
                            .moreicon-center {
                                width: 258px;
                                height: 256px;
                                margin: 0 6px;
                                .center-t {
                                    width: 100%;
                                    height: 56px;
                                    border-bottom: 1px solid #ccc;
                                    ul {
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        width: 100%;
                                        height: 100%;
                                        li {
                                            width: 70px;
                                            height: 48px;
                                            text-align: center;
                                            &:nth-of-type(1) {
                                                i {
                                                    display: block;
                                                    width: 24px;
                                                    height: 24px;
                                                    margin: auto;
                                                    background: url("../assets/img/weixin.png");
                                                    background-size: 100% 100%;
                                                }
                                            p {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(2) {
                                            i {
                                                display: block;
                                                width: 24px;
                                                height: 24px;
                                                margin: auto;
                                                background: url("../assets/img/xinlangweibo.png");
                                                background-size: 100% 100%;
                                            }
                                            p {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(3) {
                                            i {
                                                display: block;
                                                width: 24px;
                                                height: 24px;
                                                margin: auto;
                                                background: url("../assets/img/qqkongjian.png");
                                                background-size: 100% 100%;
                                            }
                                            p {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                    }
                                }
                            }
                            .center-b {
                                width: 258px;
                                height: 182px;
                                margin: 0 6px;
                                ul {
                                    display: flex;
                                    justify-content: space-between;
                                    flex-wrap: wrap;
                                    width: 100%;
                                    height: 100%;
                                    margin: 3px 0;
                                    li {
                                        display: flex;
                                        align-items: center;
                                        width: 121px;
                                        height: 22px;
                                        margin: 3px 0;
                                        text-align: left;
                                        &:nth-of-type(1) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/qqim.png");
                                                background-size: 100% 100%;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(2) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/xinhuamb.png");
                                                background-size: 100% 100%;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(3) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -197px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(4) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 0;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(5) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -18px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(6) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/share.png");
                                                background-size: 100% 100%;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(7) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -306px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(8) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -250px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(9) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -324px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(10) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/slogos_sprite8.png") 0 -1710px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(11) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -90px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(12) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -162px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(13) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -216px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                        &:nth-of-type(14) {
                                            i {
                                                display: block;
                                                width: 16px;
                                                height: 16px;
                                                margin-right: 8px;
                                                background: url("../assets/img/icon2.png") 0 -126px;
                                            }
                                            span {
                                                font-size: 12px;
                                                color: #666;
                                            }
                                        }
                                    }
                                }
                            }
                            }
                            .moreicon-more {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                width: 258px;
                                height: 20px;
                                border-top: 1px solid #e8e8e8;
                                background-color: #f2f2f2;
                                padding: 0 6px;
                                .more-l {
                                    display: flex;
                                    span {
                                        display: block;
                                        font-size: 12px;
                                        color: #666;
                                        &:nth-of-type(1) {
                                            font-weight: 700;
                                        }
                                    }
                                }
                                .more-r {
                                    display: flex;
                                    span {
                                        display: block;
                                        font-size: 10px;
                                        color: #666;
                                        &:nth-of-type(1) {
                                            color: #f60;
                                        }
                                    }
                                }
                            }
                        }
                        &:hover {
                            .moreicon {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
        .price {
            float: left;
            width: 770px;
            text-align: left;
            h2 {
                font-size: 18px;
                color: #000000;
                line-height: 36px;
                margin-bottom: 10px;
            }
            p {
                color: #666;
                font-size: 16px;
                line-height: 35px;
                background-color: #f7f7f7;
            }
        }
    }
    .navigation {
        width: 1200px;
        margin: 0 auto;
        ul {
            margin-bottom: 15px;
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
    .instructions {
        width: 1200px;
        margin: 0 auto;
        border: 1px solid #ccc;
        text-align: left;
        overflow: hidden;
        h2 {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background-color: #f7f7f7;
            font-size: 14px;
            text-indent: 2em;
        }
        img {
            width: auto;
            margin: 8px 5px 14px;
        }
    }
    .related-products {
        width: 1200px;
        margin: 0 auto 30px;
        h2 {
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            text-indent: 2em;
            border-bottom: 1px dashed #ccc;
            text-align: left;
        }
        .related-products-list {
            position: relative;
            width: 1160px;
            margin-top: 15px;
            ul {
                overflow: hidden;
                li {
                    margin: 10px;
                    float: left;
                    a {
                        .top {
                            width: 200px;
                            height: 200px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .bottom {
                            line-height: 30px;
                            font-size: 14px;
                            color: #000000;
                        }
                    }
                }
            }
            .left-arrow {
                display: none;
                position: absolute;
                left: 0;
                top: 50%;
                margin-top: -28px;
                width: 28px;
                height: 56px;
                background: url('../assets/img/manual_move_btn.png') no-repeat center left;
            }
            .right-arrow {
                display: none;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -28px;
                width: 28px;
                height: 56px;
                background: url('../assets/img/manual_move_btn.png') no-repeat center right;
            }
            &:hover {
                .left-arrow {
                    display: block;
                }
                .right-arrow {
                    display: block;
                }
            }
        }
    }
    .wxfx {
        left: 50%;
        top: 50%;
        margin-left: -110px;
        margin-top: -122.5px;
        position: fixed;
        z-index: 101;
        height: 245px;
        width: 220px;
        border: 5px solid #888;
        border-radius: 5px;
        background-color: #fff;
        .wxfx-top{
            width: 100%;
            height: 25px;
            background-color: #f2f2f2;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                li {
                    font-size: 12px;
                    color: #666;
                    &:nth-of-type(1){
                        margin-left: 15px;
                    }
                    &:nth-of-type(2){
                        font-weight: 700;
                        margin-right: 10px;
                        font-size: 14px;
                    }
                }
            }
        }
        .wxfx-bot {
            width: 220px;
            height: 220px;
            line-height: 220px;
            text-align: center;
            img {
                width: 178px;
                height: 178px;
            }
        }
    }
}
</style>
<script>
export default {
    name: 'environmentaldetails',
    data () {
        return {
            data: [],
            img: '',
            title: '',
            id: 0,
            relatedData: [],
            smallX: 0,
            smallY: 0,
            imgX: 0,
            imgY: 0,
            wxfxflag: false
        }
    },
    methods: {
        getData (id) {
            this.id = id
            this.id = parseInt(this.id)
            var index = this.data.findIndex(val => this.id === val.id)
            this.img = this.data[index].image
            this.title = this.data[index].title
            this.relatedData = this.data.filter((val, index) => this.id !== val.id)
        },
        move (event) {
            var mouseX = event.pageX - this.$refs.picture.offsetLeft
            var mouseY = event.pageY - this.$refs.picture.offsetTop
            this.smallX = mouseX - this.$refs.small.offsetWidth / 2
            this.smallY = mouseY - this.$refs.small.offsetHeight / 2
            var maxX = this.$refs.picture.offsetWidth - this.$refs.small.offsetWidth
            var maxY = this.$refs.picture.offsetHeight - this.$refs.small.offsetHeight
            var maxBigX = this.$refs.img.offsetWidth - this.$refs.enlargement.offsetWidth
            var maxBigY = this.$refs.img.offsetHeight - this.$refs.enlargement.offsetHeight
            if (this.smallX > maxX) {
                this.smallX = maxX
            } else if (this.smallX < 0) {
                this.smallX = 0
            }
            if (this.smallY > maxY) {
                this.smallY = maxY
            } else if (this.smallY < 0) {
                this.smallY = 0
            }
            this.imgX = -maxBigX / maxX * this.smallX
            this.imgY = -maxBigY / maxY * this.smallY
        },
        wxfx (flag) {
            this.wxfxflag = flag
        }
    },
    mounted () {
        this.id = parseInt(this.$route.params.id)
        this.$http.get('index.php/api/ambient/list').then(res => {
            this.data = res
            this.relatedData = this.data.filter((val, index) => this.id !== val.id)
            var index = this.data.findIndex(val => this.id === val.id)
            console.log(this.relatedData)
            this.img = this.data[index].image
            this.title = this.data[index].title
        })
    }
}
</script>