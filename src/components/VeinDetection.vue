<template>
    <div class="Vein">
      <div class="row-one">
        <InputArea ref="inputAgent"></InputArea>
        <params-area ref="getDlgParams"></params-area>
      </div>
      <div class="row-two">
        <VeinSelectedParamsArea ref="getVeinParams"></VeinSelectedParamsArea>
        <ControlArea @getVerNoEvent="getVerNo" @checkDevEvent="checkDev"
        @takePicEvent="takePic" @selectEvent="selectFunc" ref="getControl"></ControlArea>
      </div>
      <PictureArea></PictureArea>
    </div>
</template>

<script>
    import InputArea from './InputArea'
    import ParamsArea from './ParamsArea'
    import ControlArea from './ControlArea'
    import PictureArea from './PictureArea'
    import VeinSelectedParamsArea from './VeinSelectedParamsArea'
    export default {
        name: "VeinDetection",
        components: {InputArea, ParamsArea, ControlArea, PictureArea, VeinSelectedParamsArea},
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
        },
        mounted() {
            this.$refs.getControl.checkDevIsShow = false;
            this.$refs.getControl.takePicIsShow = false;
        }
    }
</script>

<style scoped>
  .row-one, .row-two{
    display: flex;
    flex-direction: row;
  }
</style>
