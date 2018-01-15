export default {
  isLoggedIn : localStorage.getItem('token') !== null ? true : false,
  user: {},
  houses : [],
  house : {},
  userHouses : [],
  search : []
}