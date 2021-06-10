<template>
  <div class="body-fot">
    <div class="fot">
      <div class="fot-top">
        <div class="left-center fl">
          <h2>锦缘国际夜总会</h2>
          <span>{{describe}}</span>
          <span>咨询电话：{{phone}}</span>
          <span>公司地址：{{address}}</span>
        </div>
        <div class="left-code fr">
          <img :src="imgUrl + image" alt="" />
          <span>关注加好友更优惠</span>
        </div>
      </div>
      <div class="fot-bot">
        <p>{{record}}</p>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import "../assets/css/base.css";
.body-fot {
  width: 100%;
  height: 328px;
  background-color: rgb(38, 44, 56);
  .fot {
    width: 1200px;
    height: 328px;
    margin: 0 auto;
    .fot-top {
      width: 100%;
      height: 274px;
      border-bottom: 1px solid rgb(152, 152, 152);
      .left-center {
        text-align: left;
        h2 {
          font-weight: 400;
          font-size: 36px;
          user-select: text;
          margin: 40px 0 30px;
          color: rgb(255, 255, 255);
        }
        span {
          display: block;
          user-select: text;
        }
        span:nth-of-type(1) {
          font-size: 14px;
          color: #989898;
          width: 496px;
          cursor: default;
          margin-bottom: 50px;
          animation: move 1s;
        }
        span:nth-of-type(2) {
          font-size: 14px;
          color: #00b7d9;
          cursor: text;
          margin-bottom: 8px;
          animation: move 1s;
        }
        span:nth-of-type(3) {
          font-size: 14px;
          cursor: text;
          color: #00b7d9;
          animation: move 1s;
        }
      }
      .left-code {
        width: 162px;
        height: 100%;
        overflow: hidden;
        img {
          width: 162px;
          height: 162px;
          cursor: pointer;
          margin: 40px 0 5px;
          animation: move 1s;
        }
        span {
          display: block;
          font-size: 14px;
          cursor: text;
          user-select: text;
          color: #989898;
        }
      }
    }
    .fot-bot {
      width: 100%;
      height: 53px;
      line-height: 53px;
      text-align: center;
      p {
        font-size: 12px;
        cursor: text;
        user-select: text;
        color: rgb(152, 152, 152);
      }
    }
  }
}
@keyframes move {
  0% {
    opacity: 0;
    transform: translate(0, 274px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
<script>
export default {
  data () {
    return {
      phone: '',
      describe: '',
      record: '',
      address: '',
      image: ''
    }
  },
  mounted () {
    this.$http.get('index.php/api/footer/get').then(res => {
      if (res) {
        console.log(res)
        this.phone = res.phone
        this.describe = res.describe
        this.record = res.record
        this.address = res.address
        this.image = res.image
      }
    })
  }
}
</script>