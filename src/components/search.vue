<template>
  <div>
    <header-page>
    </header-page>
    <jumbotron-page>
    </jumbotron-page>
    <el-row>
      <el-col :xs="{span:24}" :sm="{span:12}" :md="{span:8}" :lg="{span:6}" :xl="{span:4}" style="margin-bottom: 20px; padding:20px" v-for="house in getSearch" :key="house._id">
        <el-card :body-style="{ padding: '0px',  }">
          <div class="stretchy-wrapper">
            <div class="houselist" :style="{backgroundImage: 'url('+house.photos[0]+')'}"></div>

          </div>
          <div style="padding: 14px;">
            <span>{{house.title}}</span>
            <div class="bottom clearfix">
              <div style="float:left">Rp {{house.harga}}</div>
              <el-button type="text" class="button" @click="gotoDetailHouse(house)">View details</el-button>
              <slot name="user-toolbox" />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import headerPage from './header'
import jumbotronPage from './jumbotron'

export default {
  name: 'homeLayout',
  components: {
    headerPage,
    jumbotronPage,
  },
  data() {
    return {
      activeIndex2: '1',
      state4: '',
    }
  },
  computed: {
    ...mapGetters(['getSearch']),
  },
  mounted() {
    this.$store.dispatch('searchHouse', {
      search : this.$route.query.title
    })
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>