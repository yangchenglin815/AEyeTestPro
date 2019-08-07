<template>
    <div class="picture">
      <form>
        <fieldset>
          <legend>照片</legend>
          <div class="img">
            <div class="img-box" v-for='(img, index) in imgs' :key="index">
              <img :src="img.src"/>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
</template>

<script>
export default {
  name: 'PictureArea',
  data: function () {
    return {
      imgs: []
    }
  },
  mounted () {
    for (var i = 0; i < 14; ++i) {
      this.imgs.push({src: 'img.jpg'})
    }
  }
}
</script>

<style scoped>
  fieldset{
    border: 1px solid #EEEEEE;
    height: 340px;
  }
  legend{
    text-align: left;
    font-size: 16px;
    color: #000000;
    font-weight: bold;
  }
  .img{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .img:after{
    content: '';
    flex-grow: 99999;
  }
  .img-box{
    flex-grow: 1;
    margin: 2px;
  }
  .img-box img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    min-width: 100%;
  }
</style>
