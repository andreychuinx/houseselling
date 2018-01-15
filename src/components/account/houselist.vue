<template>
  <div>
    <edit-house v-if="statusEdit">
    </edit-house>
    <el-table v-else :data="data" height="250" style="width: 100%; text-align:left;">
      <el-table-column prop="title" label="Title">
      </el-table-column>
      <el-table-column prop="property" label="property">
      </el-table-column>
      <el-table-column prop="sertificate" label="Sertificate">
      </el-table-column>
      <el-table-column prop="harga" label="harga">
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <router-link :to="`account/${scope.row._id}/edithouse`">
            <el-button size="mini">Edit</el-button>
          </router-link>
            
          
          <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
import editHouse from './addhouse'
export default {
  name: 'accountHouseList',
  props: ['data'],
  components: {
    editHouse,
  },
  data() {
    return {
      statusEdit : false
    }
  },
  methods: {
    handleEdit(test2) {
      console.log( test2, 'from method')
    },
    handleDelete(id) {
      this.$store.dispatch('deleteHouse', {
        id: id
      })
      .then((data) =>{
        this.$message({
          type: 'success',
          message: 'Delete House Successfull'
        })
        this.data = this.data.filter(house => {
          return house._id !== data._id
        })
      })
      .catch(err =>{
        console.log(err)
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-col {
  text-align: left;
}
</style>