<template>
    <div class="veinSelectedParams">
      <form>
        <fieldset>
          <legend>指静脉采集参数</legend>
          <div class="content">
            <div class="row-one">
              <span>待采集手指 ：</span>
              <input type="text" class="input-vein" v-model="selectedVein" ref="selectedVein">
              <span>超时（秒）：</span>
              <input type="text" class="input-timeout" v-model="timeoutVal" ref="timeoutVal">
            </div>
            <div class="row-two">
              <span>开启语音提示 ：</span>
              <select class="soundTipOn" v-model="soundTipFlag" ref="soundTipFlag" @change="getSoundTipFlag">
                <option value="1">默认（是）</option>
                <option value="0">否</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
</template>

<script>
    export default {
        name: "VeinSelectedParamsArea",
        data: function () {
            return {
                selectedVein: '',
                timeoutVal: '',
                soundTipFlag: '1'
            }
        },
        methods: {
            getSoundTipFlag:function () {
                
            }
        }
    }
</script>

<style scoped>
  fieldset{
    border: 1px solid #EEEEEE;
    height: 150px;
  }
  legend{
    text-align: left;
    font-size: 16px;
    color: #000000;
    font-weight: bold;
  }
  .veinSelectedParams{
    width: 50%;
  }
  input{
    margin-right: 50px;
    width: 132px;
    height: 22px;
  }
  span{
    width: 120px;
    text-align: right;
  }
  select{
    width: 136px;
    height: 28px;
    font-size: 14px;
    margin-right: 50px;
  }
  .row-one, .row-two{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 12px;
  }
</style>
