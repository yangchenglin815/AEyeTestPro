<template>
  <div class="FaceSelectedParams">
    <form>
      <fieldset>
        <legend>人脸采集参数</legend>
        <div class="content">
          <div class="row-one">
            <span>照片数 ：</span>
            <input type="text" class="input-pic-num" v-model="picNumber" ref="picNumber">
            <span>超时（s）：</span>
            <input type="text" class="input-timeout" v-model="timeoutVal" ref="timeoutVal">
          </div>
          <div class="row-two">
            <span>输出原始图 ：</span>
            <select class="inputOriPic" v-model="inputOriPicFlag" ref="inputOriPicFlag" @change="getInputOriPicFlag">
              <option value="0">（默认）否</option>
              <option value="1">是</option>
            </select>
            <span>活体动作随机 ：</span>
            <select class="actActionRandom" v-model="actActionFlag" ref="actActionFlag" @change="getActActionFlag">
              <option value="0">（默认）否</option>
              <option value="1">是</option>
            </select>
          </div>
          <div class="row-three">
            <span>活体动作数：</span>
            <input type="text" class="input-active-num" v-model="actActionNumber" ref="actActionNumber">
            <span>活体动作列表：</span>
            <input type="text" class="input-active-list" v-model="actActionList" ref="actActionList">
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FaceSelectedParamsArea',
    data: function () {
        return {
            picNumber: '',
            timeoutVal: '',
            inputOriPicFlag: '0',
            actActionFlag: '0',
            actActionNumber: '',
            actActionList: ''
        }
    },
    methods: {
        getInputOriPicFlag: function () {

        },
        getActActionFlag: function () {

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
  .FaceSelectedParams{
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
  .row-one, .row-two, .row-three{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 12px;
  }
</style>
