<template>
  <div class="top">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <div class="tab">
      <ul>
        <li>
          <a href="javascript:;">首页</a>
        </li>
        <li>
          <a href="javascript:;">关于我们</a>
        </li>
        <li>
          <a href="javascript:;">模特展示</a>
        </li>
        <li>
          <a href="javascript:;">环境展示</a>
        </li>
        <li>
          <a href="javascript:;">夜场新闻</a>
        </li>
        <li>
          <a href="javascript:;">联系我们</a>
        </li>
        <li>
          <a href="javascript:;">招聘要求</a>
        </li>
      </ul>
    </div>
    <div class="msg">
      <span>13688143752</span>
    </div>
    <div class="img">
      <img src="../assets/img/phone.png" alt="" />
    </div>
  </div>
</template>
<style lang="less">
@import "../assets/css/base.css";
.top {
  display: flex;
  width: 1200px;
  height: 101px;
  margin: 0 auto;
  position: relative;
  .logo {
    width: 249px;
    height: 100%;
    line-height: 101px;
    img {
      width: 100%;
      height: 31px;
      cursor: pointer;
    }
  }
  .tab {
    width: 700px;
    height: 101px;
    line-height: 101px;
    ul {
      display: flex;
      li {
        width: 100px;
        height: 100%;
        cursor: pointer;
        &:nth-child(1) {
          width: 100px;
          height: 100%;
          cursor: pointer;
          a {
            padding: 0 22px 30.5px;
          }
        }
        &:hover a {
          color: rgb(60, 181, 213);
          border-bottom: 2px solid rgb(60, 181, 213);
        }
        a {
          font-size: 14px;
          padding: 0 22px 30.5px;
        }
      }
    }
  }
  .msg {
    display: flex;
    width: 22px;
    height: 22px;
    line-height: 101px;
    margin-left: 145px;
    img {
      width: 22px;
      height: 22px;
    }
    span {
      font-size: 16px;
      color: #00b7d9;
    }
  }
  .img {
    position: absolute;
    top: 40px;
    left: 1066px;
    width: 22px;
    height: 22px;
    position: absolute;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>