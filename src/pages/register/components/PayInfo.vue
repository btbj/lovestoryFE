<template>
  <div class="pay-body-container">
    <div class="pay-form">
      <div class="form-title">
        <div class="title-text">用户注册</div>
        <div class="title-tail">填写的不是资料，是一辈子的幸福</div>
      </div>
      <div class="pay-instruction">
        <div class="instruction-title">会员付款同意书</div>
        <div class="instruction-content">
          {{conetent}}
        </div>
      </div>
      <el-button class="register-btn" @click="StartPay">同意并立即付款</el-button>
    </div>
  </div>
</template>

<script>
import alipayService from '@/services/alipayService'

export default {
  data () {
    return {
      conetent: `合同条款：当事人通过文字将订立合同的合意条理化、体系化、固定化，是合同当事人权利义务确定的依据。合同条款可分为必要条款和一般条款。 [2]
                  种类介绍
                  根据合同条款的地位和作用，合同条款主要有以下几条：
                  一、必备条款和非必备条款
                  所谓必备条款又称主要条款，是指根据合同的性质和当事人的特别约定所必须具备的条款，
                  订立合同
                  订立合同
                  缺少这些条款将影响合同的成立。所谓非必备条款又称普通条款，是指合同的性质在合同中不是必须具备的条款，即使合同不具备这些条款也不应当影响合同的成立，如有关履行期限、数量、质量等条款在缺少这些条款情况下，完全可以根据《合同法》第61条、第62条的规定填补漏洞。《合同法》第12条规定，合同一般包括当事人的名称和住所、标的、数量、质量等八项条款，有的学者称这是合同的提示条款，这些条款中有的是合同必备条款，有的是非必备条款。
                  二、格式条款和非格式条款
                  格式条款是指由一方为了反复使用而预先制订的，在订立合同时不能与对方协商的条款。非格式条款是指当事人在订立合同时可以与对方协商的条款。
                  三、实体条款和程序条款
                  凡是规定当事人在合同中所享有的实体权利义务内容的条款都是实体条款。如有关合同标的、数量、质量的规定等都是实体条款。而程序条款主要是指当事人在合同中规定的履行合同义务的程序及解决合同争议的条款。
                  四、有责条款和免责条款
                  有责条款是指当事人在合同约定的当事人违反合同应承担的责任条款，即违约条款。免责条款指当事人在合同中约定的，免除排除或限制其末来责任的条款。`
    }
  },
  methods: {
    async StartPay () {
      try {
        let token = this.$store.getters.token
        let res = await alipayService.getAlipayUrl({ token })
        console.log(res)
        window.location.href = (res.data.url + '?token=' + token)
        // window.open(res.data.url)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less">
.pay-body-container {
  flex: 1;
  width: 100%;
  height: 100%;
  border-top: 2px solid #F3487E;
  box-sizing: border-box;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .pay-form{
    flex: 1;
    margin: 20px 0;
    height: 100%;
    background: white;
    width: 840px;
    box-sizing: border-box;
    padding: 20px;
    .form-title{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
      .title-tail{
        color: #F3487E;
      }
    }
    .pay-instruction{
      box-sizing: border-box;
      padding: 15px;
      .instruction-title{
        font-size: 20px;
        margin-bottom: 15px;
      }
      .instruction-content{
        line-height: 40px;
        max-height: 500px;
        overflow: auto;
      }
    }
  }
  .register-btn{
    color: white;
    background: #F3487E;
    border-radius: 0;
    border: none;
    width: 300px;
  }
}
</style>
