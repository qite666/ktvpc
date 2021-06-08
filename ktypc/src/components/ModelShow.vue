<template>
  <div>
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
            <li>
              <div class="cent-img">
                <img src="../assets/img/bell_1.jpg" alt="" />
              </div>
              <div class="cent-price">
                <em>1500</em><span>元</span>
              </div>
              <h3>成都夜总会模特</h3>
            </li>
            <li>
              <div class="cent-img2">
                <img src="../assets/img/belle_2.jpg" alt="" />
              </div>
              <div class="cent-price">
                <em>1500</em><span>元</span>
              </div>
              <h3>成都夜场模特</h3>
            </li>
            <li>
              <div class="cent-img3">
                <img src="../assets/img/belle_3.jpg" alt="" />
              </div>
              <div class="cent-price">
                <em>1500</em><span>元</span>
              </div>
              <h3>成都酒吧模特</h3>
            </li>
            <li>
              <div class="cent-img4">
                <img src="../assets/img/belle_4.jpg" alt="" />
              </div>
              <div class="cent-price">
                <em>1500</em><span>元</span>
              </div>
              <h3>成都夜总会模特</h3>
            </li>
            <li>
              <div class="cent-img5">
                <img src="../assets/img/belle_5.jpg" alt="" />
              </div>
              <div class="cent-price">
                <em>1500</em><span>元</span>
              </div>
              <h3>成都夜场模特</h3>
            </li>
            <li>
              <div class="cent-img6">
                <img src="../assets/img/belle_6.jpg" alt="" />
              </div>
              <div class="cent-price">
                <em>1500</em><span>元</span>
              </div>
              <h3>成都酒吧模特</h3>
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
            img {
              width: 160px;
              height: 200px;
            }
          }
          .cent-img2 {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            border: 1px dashed #ccc;
            img {
              width: 113px;
              height: 200px;
            }
          }
          .cent-img3 {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            border: 1px dashed #ccc;
            img {
              width: 162px;
              height: 200px;
            }
          }
          .cent-img4 {
            width: 200px;
            height: 200px;
            line-height: 200px;
            margin: auto;
            border: 1px dashed #ccc;
            img {
              width: 200px;
              height: 150px;
            }
          }
          .cent-img5 {
            width: 200px;
            height: 200px;
            line-height: 200px;
            margin: 0 auto;
            border: 1px dashed #ccc;
            img {
              width: 200px;
              height: 162px;
            }
          }
          .cent-img6 {
            width: 200px;
            height: 200px;
            line-height: 200px;
            margin: 0 auto;
            border: 1px dashed #ccc;
            img {
              width: 200px;
              height: 150px;
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
export default {
  data () {
    return {
      msg: 1
    }
  }
}
</script>