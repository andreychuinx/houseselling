<template>
  <el-row>
    <el-col :span="24" style="height:100%">
      <el-carousel :interval="2000" type="card" >
        <el-carousel-item v-for="(photo, item) in data" :key="item">
          <img :src="photo" class="imgphoto">
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "housePhotoLayout",
  props: ['data'],
  data(){
    return {

    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.imgphoto{
  width: 100%;
  position: relative;
}
</style>