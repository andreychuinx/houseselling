<template>
  <el-table :data="data" height="250" style="width: 100%; text-align:left;">
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
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'accountHouseList',
  props: ['data'],
  data() {
    return {}
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
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