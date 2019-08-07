<template>
  <div class="inputArea">
    <form>
       <fieldset>
          <legend>输出</legend>
          <textarea class="input" readonly="true" v-model="content"></textarea>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputArea',
    data() {
      return {
          content: ''
      }
    },
  methods: {
      inputText: function (args) {
          this.content = args;
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
  .inputArea{
    width: 50%;
  }
  .input{
    resize: none;
    margin-top: 12px;
    width: 100%;
    height: 210px;
  }
</style>
