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
    <div class="details">
      <div class="wxfx">
        <div class="wxfx-top">
          <ul>
            <li>分享到 - 微信</li>
            <li>X</li>
          </ul>
        </div>
        <div class="wxfx-bot">
          <img src="../assets/img/barCode.jpg" alt="" />
        </div>
      </div>
      <div class="details-l fl">
        <div class="l-top">
          <img src="../assets/img/MoHead_Bg.png" alt="" />
          <span>模特展示</span>
        </div>
        <div class="l-fot">
          <i></i>
          <span>高端模特</span>
        </div>
      </div>
      <div class="details-r fr">
        <div class="r-top">
          <img src="../assets/img/MoHead_Bg.png" alt="" />
          <span>详细说明</span>
        </div>
        <div class="r-magnifyingglass">
          <div class="moreicon">
            <div class="moreicon-share">
              <a href="">分享到</a>
              <a href="">X</a>
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
          <div class="levo">
            <div class="levoimg" ref="levoimg" @mousemove="move">
              <img :src="imgUrl + img" alt="">
              <div class="levomask" ref="levomask" :style="{top: levomaskY + 'px', left: levomaskX + 'px'}"></div>
              <div class="levo-collect">
                <div class="levo-coltwo">
                  <i></i>
                  <span>收藏</span>
                </div>
              </div>
              <div class="levodiv" ref="levodiv">
                <img :src="imgUrl + img" :style="{top: imgY + 'px', left: imgX + 'px'}" ref="img">
              </div>
            </div>
            <div class="levo-icon">
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
          <div class="ocutome">
            <h1>成都夜总会模特</h1>
            <div class="ocutome-price">
              <span>价格</span>
              <span>1500</span>
            </div>
          </div>
        </div>
        <div class="description">
          <ul>
            <li>产品说明</li>
            <li></li>
          </ul>
          <div class="description-img">
            <img :src="imgUrl + img" alt="" />
          </div>
        </div>
        <div class="related">
          <div class="related-t">
            <p>相关产品</p>
          </div>
          <div class="related-center">
            <div class="related-r-dw" @click="shift('you')"></div>
            <ul :style="{left:left + 'px'}">
              <li v-for="val in relatedData" :key="val.id" @click="getData(val.id)">
                <div class="related-img">
                  <img :src="imgUrl + val.image" alt="" />
                </div>
                <div class="related-price">
                  <p>{{val.price}}元</p>
                </div>
                <h3>{{val.title}}</h3>
              </li>
            </ul>
            <div class="related-l-dw" @click="shift('zuo')"></div>
          </div>
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
.details {
  width: 1210px;
  height: 2018px;
  margin: 10px auto 10px;
  .wxfx {
    display: none;
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
    .wxfx-top {
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
          &:nth-of-type(1) {
            margin-left: 15px;
          }
          &:nth-of-type(2) {
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
  .details-l {
    width: 358px;
    height: 77px;
    border: 1px solid #ccc;
    .l-top {
      width: 100%;
      height: 32px;
      line-height: 32px;
      text-align: left;
      border-bottom: 2px solid #2090ff;
      img {
        width: 2px;
        height: 13px;
        margin: 0 7px;
      }
      span {
        font-size: 14px;
        color: #2090ff;
      }
    }
    .l-fot {
      display: flex;
      align-items: center;
      width: 328px;
      height: 32px;
      margin: 5px auto 0;
      padding: 0 10px;
      border-bottom: 1px dashed #ccc;
      span {
        font-size: 14px;
        font-weight: 700;
        color: #2090ff;
      }
      i {
        display: block;
        width: 10px;
        height: 10px;
        margin-right: 5px;
        background: url("../assets/img/arrow.png") 0 -19px;
      }
    }
  }
  .details-r {
    width: 828px;
    height: 2018px;
    border: 1px solid #ccc;
    .r-top {
      width: 100%;
      height: 32px;
      line-height: 32px;
      text-align: left;
      border-bottom: 2px solid #2090ff;
      img {
        width: 2px;
        height: 13px;
        margin: 0 7px;
      }
      span {
        font-size: 14px;
        color: #2090ff;
      }
    }
    .r-magnifyingglass {
      width: 818px;
      height: 467px;
      margin: 5px;
      display: flex;
      justify-content: space-around;
      .moreicon {
        display: none;
        position: absolute;
        top: 115px;
        left: 400px;
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
      .levo {
        width: 420px;
        height: 467px;
        .levoimg {
          position: relative;
          width: 418px;
          height: 420px;
          text-align: center;
          border: 1px solid #3b5fcb;
          img {
            width: auto;
            height: 100%;
          }
          .levomask {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 175px;
            height: 175px;
            background-color: #fc980f;
            opacity: 0.5;
            cursor: move;
          }
          .levo-collect {
            display: none;
            position: absolute;
            bottom: 8%;
            right: -100px;
            z-index: 100;
            width: 74px;
            height: 32px;
            transform: translate(-100px, 0);
            transition: all ease .2s;
            background: url("../assets/img/icon1.png") 0 0;
            .levo-coltwo {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              width: 100%;
              height: 100%;
              i {
                display: block;
                width: 18px;
                height: 19px;
                background: url("../assets/img/icon1.png") 0 -83px;
              }
              span {
                display: block;
                font-size: 14px;
                color: #fff;
              }
            }
          }
          .levodiv {
            display: none;
            position: absolute;
            top: 0;
            right: -346px;
            width: 336px;
            height: 300px;
            overflow: hidden;
            border: 1px solid #999;
            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 200%;
              height: auto;
            }
          }
          &:hover{
            .levomask,
            .levo-collect,
            .levodiv{
              display: block;
            }
          }
        }
        .levo-icon {
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
              background: url("../assets/img/more.png");
              background-size: 100% 100%;
            }
          }
        }
      }
      .ocutome {
        width: 386px;
        height: 467px;
        text-align: left;
        h1 {
          height: 32px;
          line-height: 32px;
          font-size: 16px;
          font-weight: 700;
          color: #555;
          margin-bottom: 10px;
        }
        .ocutome-price {
          width: 386px;
          height: 38px;
          display: flex;
          line-height: 38px;
          background-color: #f9f9f9;
          span {
            display: block;
            &:nth-of-type(1) {
              width: 70px;
              height: 100%;
              text-align: center;
              font-size: 12px;
              color: #888;
            }
            &:nth-of-type(2) {
              font-size: 24px;
              color: #e53a3e;
            }
          }
        }
      }
    }
    .description {
      width: 816px;
      height: 1155px;
      margin: 0 auto;
      border: 1px solid #74cbe8;
      ul {
        display: flex;
        width: 100%;
        height: 31px;
        li:nth-of-type(1) {
          width: 15%;
          height: 100%;
          line-height: 31px;
          font-size: 14px;
          background: #fff;
        }
        li:nth-of-type(2) {
          width: 85%;
          height: 100%;
          background: #d5f1fc;
          border-left: 1px solid #74cbe8;
          border-bottom: 1px solid #74cbe8;
        }
      }
      .description-img {
        width: 804px;
        height: 1100px;
        margin: 10px auto 0;
        overflow: auto;
        text-align: left;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .related {
      width: 816px;
      height: 325px;
      margin: 10px auto 20px;
      border: 1px solid #ccc;
      .related-t {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: left;
        border-bottom: 2px solid #ccc;
        p {
          font-weight: 700;
          font-size: 16px;
          color: #555;
          padding-left: 5px;
        }
      }
      .related-center {
        position: relative;
        width: 796px;
        height: 273px;
        margin: 0 auto;
        overflow: hidden;
        .related-r-dw {
          position: absolute;
          top: 50%;
          left: 0;
          width: 28px;
          height: 56px;
          display: none;
          background: url("../assets/img/manual_move_btn.png") 0 0;
          z-index: 5;
        }
        .related-l-dw {
          position: absolute;
          top: 50%;
          right: 0;
          width: 28px;
          height: 56px;
          display: none;
          background: url("../assets/img/manual_move_btn.png") -28px 0;
        }
        ul {
          position: absolute;
          top: 0;
          left: 0;
          width: 1600px;
          height: 273px;
          margin-top: 15px;
          transform: left 1s;
          li {
            float: left;
            width: 202px;
            height: 252px;
            margin-right: 20px;
            .related-img {
              width: 200px;
              height: 200px;
              cursor: pointer;
              text-align: center;
              border: 1px solid #ccc;
              &:hover {
                border-color: #2090ff;
              }
              img {
                width: 100%;
                height: 100%;
              }
            }
            .related-price {
              width: 200px;
              height: 20px;
              margin-top: 5px;
              text-align: left;
              line-height: 20px;
              p {
                font-weight: 700;
                font-size: 14px;
                color: #e53a3e;
              }
            }
            h3 {
              width: 200px;
              height: 20px;
              cursor: pointer;
              line-height: 20px;
              text-align: center;
              font-size: 14px;
              font-weight: 700;
              color: #444;
              &:hover {
                color: #2090ff;
              }
            }
          }
        }
        &:hover{
          .related-r-dw,
          .related-l-dw{
            display: block;
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
    data () {
        return {
            levomaskX: 0,
            levomaskY: 0,
            imgX: 0,
            imgY: 0,
            id: 0,
            data: [],
            img: '',
            title: '',
            relatedData: [],
            left: 0,
            flag: true,
            msg: 1,
            modelData: [],
            value: '',
            bannerImg: ''
        }
    },
    methods: {
      move (event) {
        var mouseX = event.pageX - this.$refs.levoimg.offsetLeft
        var mouseY = event.pageY - this.$refs.levoimg.offsetTop
        this.levomaskX = mouseX - this.$refs.levomask.offsetWidth / 2
        this.levomaskY = mouseY - this.$refs.levomask.offsetHeight / 2
        var maxX = this.$refs.levoimg.offsetWidth - this.$refs.levomask.offsetWidth
        var maxY = this.$refs.levoimg.offsetHeight - this.$refs.levomask.offsetHeight
        var maxBigX = this.$refs.img.offsetWidth - this.$refs.levodiv.offsetWidth
        var maxBigY = this.$refs.img.offsetHeight - this.$refs.levodiv.offsetHeight
        if (this.levomaskX > maxX) {
            this.levomaskX = maxX
        } else if (this.levomaskX < 0) {
            this.levomaskX = 0
        }
        if (this.levomaskY > maxY) {
            this.levomaskY = maxY
        } else if (this.levomaskY < 0) {
            this.levomaskY = 0
        }
        this.imgX = -maxBigX / maxX * this.levomaskX
        this.imgY = -maxBigY / maxY * this.levomaskY
      },
      getData (id) {
        this.id = id
        this.id = parseInt(this.id)
        var index = this.data.findIndex(val => this.id === val.id)
        this.img = this.data[index].image
        this.title = this.data[index].title
        this.relatedData = this.data.filter((val, index) => this.id !== val.id)
      },
      shift (val) {
        if (this.flag) {
          if (val === 'zuo') {
            if (this.relatedData.length * 222 - 796 + this.left > 0) {
              this.flag = false
              var num = 0
              var timer = setInterval(() => {
                num++
                this.left -= 1
                if (num === 222) {
                  this.flag = true
                  clearInterval(timer)
                }
              }, 1)
            }
          } else if (val === 'you') {
            if (this.left < 0) {
              this.flag = false
              var num2 = 0
              var timer2 = setInterval(() => {
                num2++
                this.left += 1
                if (num2 === 222) {
                  this.flag = true
                  clearInterval(timer2)
                }
              }, 1)
            }
          }
        }
      }
    },
  components: {
    VueMarkdown
  },
    mounted () {
        this.id = parseInt(this.$route.params.id)
        this.$http.get('index.php/api/models/list').then(res => {
            this.data = res
            this.relatedData = this.data.filter((val, index) => this.id !== val.id)
            var index = this.data.findIndex(val => this.id === val.id)
            this.img = this.data[index].image
            this.title = this.data[index].title
        })
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
