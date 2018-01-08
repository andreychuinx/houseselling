<template>
  <div>
    <el-row class="tabInfo">
      <el-col>
        <h2>{{data.title}}</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        Tipe Properti
      </el-col>
      <el-col :span="8">
        {{data.property}}
      </el-col>
      <el-col :span="4">
        Kamar Mandi
      </el-col>
      <el-col :span="8">
        {{data.kamarMandi}}
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        Harga
      </el-col>
      <el-col :span="8">
        Rp. {{data.harga}}
      </el-col>
      <el-col :span="4">
        Sertifikasi
      </el-col>
      <el-col :span="8">
        {{data.sertificate}}
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        Kamar Tidur
      </el-col>
      <el-col :span="8">
        {{data.kamarTidur}}
      </el-col>
      <el-col :span="4">
        Luas Tanah
      </el-col>
      <el-col :span="8">
        {{data.luasTanah}} M²
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        Jumlah Lantai
      </el-col>
      <el-col :span="8">
        {{data.jumlahLantai}}
      </el-col>
      <el-col :span="4">
        Luas Bangunan
      </el-col>
      <el-col :span="8">
        {{data.luasBangunan}} M²
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        Deskripsi
      </el-col>
      <el-col :span="20">
        {{data.description}}
      </el-col>
    </el-row>
    <el-row>
      <h2>Data Penjual</h2>
    </el-row>
    <el-row>
      <el-col :span="4">
        Nama
      </el-col>
      <el-col :span="8">
        {{data.userId.name}}
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        Email
      </el-col>
      <el-col :span="8">
        {{data.userId.email}}
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: 'houseInfoLayout',
  props: ['data'],
  data() {
    return {
    }
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
</style>