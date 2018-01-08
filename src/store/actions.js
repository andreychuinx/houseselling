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
        console.log(err
        )
      })
  },
  dataUserHouses(context, { user }){
    axios.get(`/houses/user/${user}`)
    .then(result => {
      context.commit(types.GET_USER_HOUSES, {
        data : result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}
