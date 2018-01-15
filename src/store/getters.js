export default {
  getHouses: state => {
    return state.houses
  },
  getHouse: state => {
    return state.house
  },
  getStatusLogin: state => {
    return state.isLoggedIn
  },
  getUser: state => {
    return state.user
  },
  getUserHouses: state => {
    return state.userHouses
  },
  getSearch: state => {
    return state.search
  }
}
