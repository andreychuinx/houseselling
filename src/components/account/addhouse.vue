<template>
  <el-row style="padding: 10px">
    <el-col :span="18">
      <h1>ADD HOUSE</h1>
      <el-form ref="form" label-width="120px" size="mini">
        <el-form-item label="Title">
          <el-input v-model="formInput.title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" v-model="formInput.description">
          </el-input>

        </el-form-item>
        <el-form-item label="property">
          <el-select v-model="formInput.property" filterable placeholder="Select">
            <el-option v-for="item in formInput.options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="harga">
          <el-input v-model="formInput.harga"></el-input>
        </el-form-item>
        <el-form-item label="Kamar Mandi">
          <el-input-number v-model="formInput.kamarMandi" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="Kamar Tidur">
          <el-input-number v-model="formInput.kamarTidur" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="Jumlah Lantai">
          <el-input-number v-model="formInput.jumlahLantai" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="Sertificate">
          <el-select v-model="formInput.sertificate" filterable placeholder="Select">
            <el-option v-for="item in formInput.setificates" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Luas Tanah">
          <el-input-number v-model="formInput.luasTanah" :min="1" :max="1000"></el-input-number>
        </el-form-item>
        <el-form-item label="Luas Bangunan">
          <el-input-number v-model="formInput.luasBangunan" :min="1" :max="1000"></el-input-number>
        </el-form-item>


        <el-form-item label="Photos">
          <el-upload action="" list-type="picture-card" :on-change="fileInput" :on-remove="handleRemove" :auto-upload="false" v-model="formInput.dialogImageUrl" >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="formInput.dialogVisible" size="tiny">
            <img width="100%" :src="formInput.dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>



        <form-gmap :coordinates="coordinateDefault" :model="formInput.coordinates" @gmap="locationFromGmap">
        </form-gmap>

        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <router-link :to="{name : 'accountPage'}">
            <el-button>Cancel</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
import formGmap from './formgmap'
export default {
  name: 'addHouse',
  components: {
    formGmap,
  },
  data() {
    return {
      coordinateDefault : [106.7546955, -6.2372179],
      formInput: {
        jumlahLantai: 1,
        dialogImageUrl: '',
        dialogVisible: false,
        title: '',
        description: '',
        luasTanah: 0,
        luasBangunan: 0,
        property: '',
        harga: '',
        kamarMandi: 1,
        kamarTidur: 1,
        photos: [],
        coordinates: [],
        sertificate: '',
        address : '',
        options: [
          {
            value: 'Rumah',
            label: 'Rumah',
          },
          {
            value: 'Apartement',
            label: 'Apartement',
          },
          {
            value: 'Kost-kostan',
            label: 'Kost-kostan',
          },
          {
            value: 'Villa',
            label: 'Villa',
          },
        ],
        value8: '',
        setificates: [
          {
            value: 'SHM',
            label: 'SHM',
          },
          {
            value: 'SHM2',
            label: 'SHM2',
          },
        ],
      },
    }
  },
  methods: {
    locationFromGmap(location){
      this.formInput.coordinates = location.coordinates
      this.formInput.address = location.address
      // console.log(location, 'location')
      // console.log(this)
    },
    onSubmit() {
      this.$store.dispatch('addHouse', {
        data : this.formInput
      })
      .then(()=>{
        this.$message({
          type: 'success',
          message: 'Add House Successfull'
        })
        this.$router.push({name : 'accountPage'})
      })
      .catch(err =>{
        console.log(err)
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    fileInput(file, fileList) {
      this.formInput.photos = fileList.map(photo => photo.raw)
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