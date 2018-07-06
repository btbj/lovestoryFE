<template>
  <div class="index-bottom">
    <div class="bottom-box">
      <div class="bottom-copyright">
        版权所有© 2018 相亲相爱婚介网
      </div>
      <div class="site-register-info">
        浙ICP备180*******号
      </div>
      <div class="bottom-technical-support">
        技术支持：谷多网络
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.index-bottom {
  width: 100%;
  background-color: #F1356F;
  padding: 5px 0 0;
  .bottom-box {
    margin: auto;
    width: 90%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: white;
    font-size: 14px;
    .bottom-copyright {
      margin-right: 25px;
      margin-bottom: 5px;
    }
    .site-register-info{
      flex: 1;
      min-width: 200px;
      text-align: left;
      margin-bottom: 5px;
    }
    .bottom-technical-support {
      margin-bottom: 5px;
    }
  }
}
</style>
