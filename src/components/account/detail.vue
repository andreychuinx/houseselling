<template>
  <div>
    <el-row class="tabInfo">
      <el-col>
        <h2>Hello {{data.name}}</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <router-link :to="{name : 'addhouse'}">
          <el-button type="primary" >Add House</el-button>
        </router-link> 
        
        <el-button type="warning">Edit User Profile</el-button>
      </el-col>

    </el-row>
    <el-row style="padding: 10px">
      <el-col :span="4">
        Nama
      </el-col>
      <el-col :span="8">
        {{data.name}}
      </el-col>
      <el-col :span="4">
        Email
      </el-col>
      <el-col :span="8">
        {{data.email}}
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: 'accountDetail',
  props: ['data'],
  data() {
    return {
      addHouse : false,
    }
  },
  methods: {
    methodAddHouse(){
      this.addHouse = true
    }
  },
  watch:{
    addHouse(){
      this.$emit('showFormAddHouse', this.addHouse)
    }
  }
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
</style>