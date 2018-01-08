<template>
  <el-row>
    <el-col :span="18">
      <el-form ref="form" label-width="120px" size="mini">
        <el-form-item label="Title">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" v-model="description">
          </el-input>

        </el-form-item>
        <el-form-item label="property">
          <el-select v-model="property" filterable placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="harga">
          <el-input v-model="harga"></el-input>
        </el-form-item>
        <el-form-item label="Kamar Mandi">
          <el-input-number v-model="kamarMandi" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="Kamar Tidur">
          <el-input-number v-model="kamarTidur" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="Sertificate">
          <el-select v-model="value8" filterable placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Luas Tanah">
          <el-input-number v-model="luasTanah" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="Luas Bangunan">
          <el-input-number v-model="luasBangunan" :min="1" :max="1000"></el-input-number>
        </el-form-item>
        <el-form-item label="Photos">
          <el-upload action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :auto-upload="false">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <form-gmap :model="coordinates">
        </form-gmap>

        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
import formGmap from './formgmap'
export default {
  name: 'addHouse',
  props: ['data'],
  components: {
    formGmap
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      title: '',
      description: '',
      luasTanah: 0,
      luasBangunan: 0,
      property: '',
      harga: '',
      kamarMandi: '',
      kamarTidur: '',
      photos: '',
      coordinates: '',
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      value8: '',
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
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