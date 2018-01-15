import axios from 'axios'
import * as types from './mutation_types'

export default {
  signin(context, { email, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/signin', {
          email,
          password,
        })
        .then(result => {
          context.commit(types.SAVE_TOKEN, {
            token: result.data.data.authorization,
            user: result.data.data.user,
          })
          resolve()
        })
        .catch(err => {
          console.log(err)
        })
    })
  },
  signup(context, { name, email, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/signup', {
          name,
          email,
          password,
        })
        .then(result => {
          console.log(result)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  dataHouses(context) {
    axios
      .get('/houses')
      .then(result => {
        context.commit(types.GET_HOUSES, {
          data: result.data.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  dataHouse(context, { id }) {
    axios
      .get(`/houses/${id}`)
      .then(result => {
        context.commit(types.GET_HOUSE, {
          data: result.data.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  dataUser(context, { user }) {
    axios
      .get(`/users/${user}`)
      .then(result => {
        context.commit(types.GET_USER, {
          data: result.data.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  dataUserHouses(context, { user }) {
    axios
      .get(`/houses/user/${user}`)
      .then(result => {
        context.commit(types.GET_USER_HOUSES, {
          data: result.data.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  addHouse(context, { data }) {
    return new Promise((resolve, reject) => {

      const dt = new FormData()
      dt.append('title', data.title)
      dt.append('description', data.description)
      dt.append('property', data.property)
      dt.append('harga', data.harga)
      dt.append('kamarTidur', data.kamarTidur)
      dt.append('jumlahLantai', data.jumlahLantai)
      dt.append('kamarMandi', data.kamarMandi)
      dt.append('sertificate', data.sertificate)
      dt.append('luasTanah', data.luasTanah)
      dt.append('luasBangunan', data.luasBangunan)
      dt.append('address', data.address)
      dt.append('longitude', data.coordinates[0])
      dt.append('latitude', data.coordinates[1])
      data.photos.forEach(photo => {
        dt.append('image', photo)
      })
      axios
        .post('/houses', dt)
        .then(result => {
          context.commit(types.ADD_HOUSE, {
            data : result.data.data
          })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  editHouse(context, { data, id }){
    return new Promise((resolve, reject) => {
      const dt = new FormData()
      dt.append('title', data.title)
      dt.append('description', data.description)
      dt.append('property', data.property)
      dt.append('harga', data.harga)
      dt.append('kamarTidur', data.kamarTidur)
      dt.append('jumlahLantai', data.jumlahLantai)
      dt.append('kamarMandi', data.kamarMandi)
      dt.append('sertificate', data.sertificate)
      dt.append('luasTanah', data.luasTanah)
      dt.append('luasBangunan', data.luasBangunan)
      dt.append('address', data.address)
      dt.append('longitude', data.coordinates[0])
      dt.append('latitude', data.coordinates[1])
      data.photos.forEach(photo => {
        dt.append('image', photo)
      })
      axios
        .put(`/houses/${id}`, dt)
        .then(result => {
          console.log(result)
          context.commit(types.EDIT_HOUSE, {
            data : result.data.data
          })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  deleteHouse(context, {id}){
    return new Promise((resolve, reject)=>{
      axios.delete(`/houses/${id}`)
      .then(result => {
        // context.commit(types.DELETE_HOUSE, {
        //   data : result.data.data
        // })
        resolve(result.data.data)
      })
      .catch(err =>{
        reject(err)
      })
    })
  },
  searchHouse(context, {search}){
    axios.get(`/search?search=${search}`)
    .then(result=>{
      context.commit(types.GET_SEARCH, {
        data: result.data.data,
      })
    })
  }
}
