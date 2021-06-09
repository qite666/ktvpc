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
        <!-- <div class="">
            <div><img src="../assets/img/image-10.jpg" alt=""></div>
            <div></div>
        </div> -->
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
            img {
                width: 100%;
            }
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
        text-align: left !important;
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
                            display: flex;
                            align-items: center;
                            overflow: hidden;
                            img {
                                width: 100%;
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
        relatedData: []
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