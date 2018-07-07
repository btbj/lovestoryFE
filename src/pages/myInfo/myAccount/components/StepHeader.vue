<template>
  <div>
    <div class="account-step-box">
      <div :class="['step-item-box', stepNum === '1' ? 'selected' : '']">
        <div class="step-rectangle">1 安全验证</div>
        <div class="step-solid-triangle"></div>
      </div>
      <div :class="['step-item-box', stepNum === '2' ? 'selected' : '']"
           style="width: 35%">
        <div class="step-hollow-triangle"></div>
        <div class="step-rectangle" style="width: 90%">2 输入新密码</div>
        <div class="step-solid-triangle"></div>
      </div>
      <div :class="['step-item-box', stepNum === '3' ? 'selected' : '']">
        <div class="step-hollow-triangle"></div>
        <div class="step-rectangle">3 修改成功</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stepNum'],
  data () {
    return {
    }
  }

}
</script>

<style lang="less">
.account-step-box {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  .step-item-box {
    width: 30%;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-right: -30px;
    &:last-child {
      margin-right: 0;
    }
    .step-rectangle {
      width: 90%;
      height: 100%;
      background-color: lightgrey;
      line-height: 40px;
    }
    .step-solid-triangle {
      width: 0;
      height: 0;
      border-top: 20px solid transparent;
      border-left: 40px solid lightgrey;
      border-bottom: 20px solid transparent;
    }
    .step-hollow-triangle {
      width: 0;
      height: 0;
      border-top: 20px solid lightgrey;
      border-left: 40px solid transparent;
      border-bottom: 20px solid lightgrey;
    }
  }
  .selected {
    .step-rectangle {
      background-color: #F1356F;
      color: white;
    }
    .step-solid-triangle {
      border-left: 40px solid #F1356F;
    }
    .step-hollow-triangle {
      border-top: 20px solid #F1356F;
      border-bottom: 20px solid #F1356F;
    }
  }
}
</style>
