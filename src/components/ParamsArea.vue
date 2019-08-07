<template>
    <div class="paramsArea">
      <form>
        <fieldset>
          <legend>窗口参数</legend>
          <div class="content">
            <div class="row-one">
              <span>x（像素）：</span>
              <input type="text" class="input-x" v-model="x" ref="x">
              <span>y（像素）：</span>
              <input type="text" class="input-y" v-model="y" ref="y">
            </div>
            <div class="row-two">
              <span>宽（像素）：</span>
              <input type="text" class="input-w" v-model="w" ref="w">
              <span>高（像素）：</span>
              <input type="text" class="input-h" v-model="h" ref="h">
            </div>
            <div class="row-three">
              <span>窗口背景 ：</span>
              <input type="text" class="input-dlgBack" v-model="dlgBackground" ref="dlgBackground">
              <span>窗口可拖动 ：</span>
              <select class="dlg-drag" v-model="dlgDragFlag" ref="dlgDragFlag" @change="getDlgDragFlag">
                <option value="1">（默认）是</option>
                <option value="0">否</option>
              </select>
            </div>
            <div class="row-four">
              <span>按钮背景 ：</span>
              <input type="text" class="input-btnBack" v-model="btnBackground" ref="btnBackground">
              <span>按钮悬浮背景 ：</span>
              <input type="text" class="input-btnBack-hover" v-model="btnHovBackground" ref="btnHovBackground">
            </div>
            <div class="row-five">
              <span>允许中止 ：</span>
              <select class="allowAbort" v-model="allowAbortFlag" ref="allowAbortFlag" @change="getAllowAbortFlag">
                <option value="0">（默认）否</option>
                <option value="1">是</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
</template>

<script>
export default {
  name: 'ParamsArea',
    data: function() {
      return {
          x: '',
          y: '',
          w: '',
          h: '',
          dlgBackground: '',
          btnBackground: '',
          btnHovBackground: '',
          dlgDragFlag: '1',
          allowAbortFlag: '0'
      }
    },
    methods: {
        getDlgDragFlag: function () {
            alert(this.dlgDragFlag)
        },
        getAllowAbortFlag: function () {

        }
    }
}
</script>

<style scoped>
  fieldset{
    border: 1px solid #EEEEEE;
    height: 250px;
  }
  legend{
    text-align: left;
    font-size: 16px;
    color: #000000;
    font-weight: bold;
  }
  input{
    margin-right: 50px;
    width: 132px;
    height: 22px;
  }
  select{
    width: 136px;
    height: 28px;
    font-size: 14px;
  }
  .paramsArea{
    width: 50%;
  }
  .row-one, .row-two, .row-three, .row-four, .row-five{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 12px;
  }
  span{
    width: 120px;
    text-align: right;
  }
</style>
