<template>
  <div class="acountdetail">
    <header-page>
    </header-page>
    <jumbotron-page>
    </jumbotron-page>
    <el-row>
      <router-view v-if="this.$route.name == 'addhouse' || this.$route.name == 'edithouse'">
      </router-view>
      <div v-else>
        <el-col style="padding:20px" v-if="loaded">

        <el-tabs tabPosition="top" style="height: 200px;">
          <el-tab-pane label="Info">
            <account-detail :data="getUser" @showFormAddHouse="methodShowFormAddHouse">
            </account-detail>
          </el-tab-pane>
          <el-tab-pane label="House">
            <account-houses :data="getUserHouses" >
            </account-houses>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col style="padding:20px" v-if="showFormAddHouse">
        <account-addhouse>
        </account-addhouse>
      </el-col>
      </div>
      
    </el-row>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import headerPage from './header'
import jumbotronPage from './jumbotron'
import accountDetail from './account/detail'
import accountHouses from './account/houselist'
import accountAddhouse from './account/addhouse'

export default {
  name: 'accountPage',
  components: {
    headerPage,
    jumbotronPage,
    accountDetail,
    accountHouses,
    accountAddhouse
  },
  data() {
    return {
      loaded : false,
      showFormAddHouse: false,
    }
  },
  computed: {
    ...mapGetters(['getUser', 'getUserHouses']),
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.$store.dispatch('dataUser', {
      user : user.userId
    })
    this.$store.dispatch('dataUserHouses', {
      user : user.userId
    })
  },
  watch: {
    getUserHouses(){
      this.loaded = true
    }
  },
  methods: {
    gotoDetailHouse(house) {
      this.$router.push({
        name: 'houseDetailPage',
        params: {
          id: house._id,
        },
      })
    },
    methodShowFormAddHouse(show){
      console.log('test')
      this.showFormAddHouse = true
      this.loaded = false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accountdetail {
  padding-bottom: 100px;
}
</style>