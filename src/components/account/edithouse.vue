<template>
  <div>
     <el-row style="padding: 10px" v-if="loaded">
    <el-col :span="18">
      <h1>EDIT HOUSE {{getHouse.title}}</h1>
      <el-form ref="getHouse" label-width="120px" size="mini">
        <el-form-item label="Title" prop="title">
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
          
          <el-upload action="" list-type="picture-card" :on-change="fileInput" :on-remove="handleRemove" :auto-upload="false" v-model="formInput.dialogImageUrl" :file-list="formInput.photos">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="formInput.dialogVisible" size="tiny">
            <img width="100%" :src="formInput.dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>



        <form-gmap :coordinates="getHouse.loc.coordinates" :addressDef="getHouse.address" :model="formInput.coordinates" @gmap="locationFromGmap">
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
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import formGmap from './formgmapedit'
export default {
  name: 'editHouse',
  components: {
    formGmap,
  },
  data(){
    return {
      loaded : false,
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
  computed: {
    ...mapGetters(['getHouse'])
  },
  mounted(){
    this.$store.dispatch('dataHouse', {
      id: this.$route.params.id
    })
  },
  methods: {
    locationFromGmap(location){
      this.formInput.coordinates = location.coordinates
      this.formInput.address = location.address
    },
    onSubmit() {
      this.$store.dispatch('editHouse', {
        data : this.formInput,
        id : this.$route.params.id
      })
      .then(()=>{
        this.$message({
          type: 'success',
          message: 'Edit House Successfull'
        })
        this.$router.push({name : 'accountPage'})
      })
      .catch(err =>{
        console.log(err)
      })
      console.log(this.formInput)
    },
    handleRemove(file, fileList) {
      console.log(this.formInput.photos[0])
      console.log(file.uid)
      this.formInput.photos = this.formInput.photos.filter(photo => {
        return photo.uid !== file.uid
        })
      
    },
    fileInput(file, fileList) {
      console.log(file)
      this.formInput.photos = fileList.map(photo => photo.raw)
    },
  },
  watch: {
    getHouse(){
      this.loaded = true
      this.formInput.title = this.getHouse.title
      this.formInput.description = this.getHouse.description
      this.formInput.jumlahLantai = this.getHouse.jumlahLantai
      this.formInput.luasTanah = this.getHouse.luasTanah
      this.formInput.luasBangunan = this.getHouse.luasBangunan
      this.formInput.harga = this.getHouse.harga
      this.formInput.kamarMandi = this.getHouse.kamarMandi
      this.formInput.kamarTidur = this.getHouse.kamarTidur
      this.formInput.address = this.getHouse.address
      this.formInput.property = this.getHouse.property
      this.formInput.sertificate = this.getHouse.sertificate
      this.formInput.coordinates = this.getHouse.loc.coordinates
      this.getHouse.photos.forEach(link => {
        this.formInput.photos.push({url : link})
      });
      // this.formInput.photos = this.getHouse.photos
      
    }
  }
}
</script>

<style>
.el-col {
  text-align: left;
}
</style>
