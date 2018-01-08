
import * as types from './mutation_types'
import router from '@/router'
import axios from 'axios'

export default {
  [types.SIGNUP](state){
    
  },
  [types.SAVE_TOKEN](state, { token, user }){
    let dataUser = JSON.stringify(user)
    localStorage.setItem('token', token)
    localStorage.setItem('user', dataUser)
    axios.defaults.headers.common['authorization'] = token
    state.isLoggedIn = true
  },
  [types.GET_HOUSES](state, { data }){
    console.log('test')
    state.houses = data
  },
  [types.GET_HOUSE](state, { data }){
    state.house = data
  },
  [types.LOGOUT](state){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    state.isLoggedIn = false
  },
  [types.GET_USER](state, { data }){
    state.user = data
  },
  [types.GET_USER_HOUSES](state, { data }){
    state.userHouses = data
  }
}