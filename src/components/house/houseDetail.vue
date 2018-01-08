<template>
  <div class="housedetail">
    <header-page>
    </header-page>
    <jumbotron-page>
    </jumbotron-page>
    <el-row>
      <el-col style="padding:20px" v-if="loaded">

        <el-tabs tabPosition="top" style="height: 200px;" @tab-click="showMap">
          <el-tab-pane label="Info">
            <house-info :data="getHouse">
            </house-info>
          </el-tab-pane>
          <el-tab-pane label="Map">
            <house-map :data="getHouse.loc.coordinates" :map="getMap">
            </house-map>
          </el-tab-pane>
          <el-tab-pane label="Photo">
            <house-photo :data="getHouse.photos">
            </house-photo>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import headerPage from '../header'
import jumbotronPage from '../jumbotron'
import houseInfo from './houseInfo'
import houseMap from './houseMap'
import housePhoto from './housePhoto'

export default {
  name: 'houseDetailLayout',
  props: ['id'],
  components: {
    headerPage,
    jumbotronPage,
    houseInfo,
    houseMap,
    housePhoto,
  },
  data() {
    return {
      loaded: false,
      getMap: false,
    }
  },
  computed: {
    ...mapGetters(['getHouse']),
  },
  mounted() {
    this.$store.dispatch('dataHouse', {
      id: this.id,
    })
  },
  methods: {
    showMap(index) {
      if (index.paneName == '1') {
        this.getMap = true
      }
    },
  },
  watch: {
    getHouse() {
      this.loaded = true
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabInfo {
  text-align: left;
}
.el-col {
  text-align: left;
}
.housedetail {
  padding-bottom: 100px;
}
</style>