<template>
  
    <el-main>
      <div class="block jumbotron">
        <span class="demonstration">Search Here</span>
        
        <el-input v-model="state4" placeholder="Please input"></el-input>
        <el-button @click="handleSearch">Submit
        </el-button>
      </div>
    </el-main>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: "homeLayout",
  data() {
    return {
      activeIndex2: "1",
      state4: ""
    };
  },
  methods: {
    handleSearch() {
      this.$router.push({
        name : 'searchPage',
        query:{
          title: this.state4
        }
        
       })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  height: 350px;
  padding: 100px;
  background-image: url("https://www.acxiom.com/wp-content/uploads/2014/10/houses-banner-1.jpg");
  background-repeat: no-repeat;
}
.jumbotron {
  background-color: aquamarine;
  padding: 5px;
  border: 1ch;
}
.el-autocomplete {
  width: 70%;
}
</style>