<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #123d68;
}

.el-header {
  padding: 0px;
}
.el-main {
  height: 350px;
  padding: 100px;
  background-image: url('https://www.acxiom.com/wp-content/uploads/2014/10/houses-banner-1.jpg');
  background-repeat: no-repeat;
}
.jumbotron {
  background-color: aquamarine;
  padding: 5px;
  border: 1ch;
}
.el-autocomplete {
  width: 70%;
}
.houselist {
  background-repeat: no-repeat;
  background-position: center;
}
.image {
  height: 100%;
  display: block;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
div.image {
  /* height: 200px;
  padding-bottom: 75%; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
div.stretchy-wrapper {
  width: 100%;
  padding-bottom: 75%; /* 16:9 */
  position: relative;
}
div.stretchy-wrapper > div {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  font-size: 24px;
  text-align: center;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
