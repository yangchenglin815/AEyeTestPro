<template>
  <div class="main">
    <div class="row-one">
    <InputArea ref="inputAgent"></InputArea>
    <params-area ref="getDlgParams"></params-area>
    </div>
    <div class="row-two">
      <FaceSelectedParamsArea ref="getFaceParams"></FaceSelectedParamsArea>
      <ControlArea @getVerNoEvent="getVerNo" @checkDevEvent="checkDev"
      @takePicEvent="takePic" @selectEvent="selectFunc"></ControlArea>
    </div>
    <PictureArea></PictureArea>
  </div>
</template>

<script>
import InputArea from './InputArea'
import ParamsArea from './ParamsArea'
import FaceSelectedParamsArea from './FaceSelectedParamsArea'
import ControlArea from './ControlArea'
import PictureArea from './PictureArea'
export default {
  name: 'FaceDetection',
  components: {InputArea, ParamsArea, FaceSelectedParamsArea, ControlArea, PictureArea},
    methods: {
        getVerNo: function (args) {
            this.$refs.inputAgent.inputText(args)
        },
        checkDev: function (args) {
            alert(this.$refs.getDlgParams.x)
        },
        takePic: function (args) {
            alert(this.$refs.getDlgParams.dlgDragFlag)
        },
        selectFunc: function (args) {
            alert(args)
        }
    }
}
</script>

<style scoped>
.row-one, .row-two{
  display: flex;
  flex-direction: row;
}

</style>
