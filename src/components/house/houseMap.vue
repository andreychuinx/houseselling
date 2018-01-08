<template>
<el-row>
  <el-col :span="24" >
    <gmap-map :center="center" v-if="map" :zoom="15" style="width: 100%; height: 500px">
    <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
  </gmap-map>
  </el-col>
</el-row>
</template>
 
<script>
export default {
  name: "houseMapLayout",
  props: ['data', 'map'],
  data() {
    return {
      loaded : false,
      center: { lat: this.data[1], lng: this.data[0] },
      markers: [
        {
          position: { lat: this.data[1], lng: this.data[0] }
        },
      ]
    };
  },
  mounted(){
    this.setTimeout()
  },
  methods : {
    setTimeout(){
      var v = this;
      setTimeout(function () {
        v.loaded = true;
    }, 3000);
    }
  }
};
</script> 