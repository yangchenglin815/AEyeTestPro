<template>
    <div class="control">
      <form>
        <fieldset>
          <legend>控制台</legend>
          <div class="content">
            <button class="getVerNo" @click="getVerisonNo" type="button">获取版本号</button>
            <button class="checkDev" @click="checkDevice" v-show="checkDevIsShow" type="button">检查设备</button>
            <button class="takePic" @click="takePicture" v-show="takePicIsShow" type="button">拍照</button>
            <button class="selected" @click="selectFunc" type="button">采集</button>
          </div>
        </fieldset>
      </form>
    </div>
</template>

<script>
export default {
  name: 'ControlArea',
    data: function() {
      return {
          checkDevIsShow: true,
          takePicIsShow: true
      }
    },
  methods: {
      getVerisonNo: function () {
          this.$emit("getVerNoEvent", 'getVerNo')
      },
      checkDevice: function () {
          this.$emit("checkDevEvent", 'checkDev')
      },
      takePicture: function () {
          this.$emit("takePicEvent", 'takePic')
      },
      selectFunc: function () {
          this.$emit("selectEvent", 'select')
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
  .control{
    width: 50%;
  }
  button{
    width: 160px;
    height: 35px;
    margin: 12px 12px;
    font-size: 14px;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
  }
</style>
