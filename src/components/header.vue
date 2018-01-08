<template>
  <el-header>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#002b80" text-color="#fff" active-text-color="#0040ff" v-if="!getStatusLogin">
      <el-menu-item index="1" @click="gotoHome">
        <el-button type="text">Home</el-button>
      </el-menu-item>
      <el-menu-item index="3" @click="loginDialog = true">
        <el-button type="text">Login</el-button>
      </el-menu-item>
      <el-menu-item index="3" @click="loginRegister = true">
        <el-button type="text">Signup</el-button>
      </el-menu-item>
      <el-dialog title="Login" :visible.sync="loginDialog" center width="50%">
        <login-page @closeDialog="methodCloseDialog">
        </login-page>
      </el-dialog>
      <el-dialog title="Sign Up" :visible.sync="loginRegister" center width="50%">
        <signup-page @closeDialogSignup="methodCloseDialogSignup">
        </signup-page>
      </el-dialog>
    </el-menu>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#002b80" text-color="#fff" active-text-color="#0040ff" v-else>
      <el-menu-item index="1" @click="gotoHome">
        <el-button type="text">Home</el-button>
      </el-menu-item>
      <el-menu-item index="3" @click="gotoAccount">
        <el-button type="text">Account</el-button>
      </el-menu-item>
      <el-menu-item index="3" @click="logout">
        <el-button type="text">Logout</el-button>
      </el-menu-item>
      <el-dialog title="Login" :visible.sync="loginDialog" center width="50%">
        <login-page @closeDialog="methodCloseDialog">
        </login-page>
      </el-dialog>
      <el-dialog title="Sign Up" :visible.sync="loginRegister" center width="50%">
        <signup-page>
        </signup-page>
      </el-dialog>
    </el-menu>
  </el-header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import loginPage from './login'
import signupPage from './signup'
export default {
  name: 'headerLayout',
  components: {
    loginPage,
    signupPage,
  },
  data() {
    return {
      activeIndex2: '1',
      state4: '',
      loginDialog: false,
      loginRegister: false,
    }
  },
  computed: {
    ...mapGetters(['getStatusLogin']),
  },
  methods: {
    methodCloseDialog(close) {
      this.loginDialog = close
      this.$message({
        message: 'Congrats, Login Success',
        type: 'success',
      })
    },
    methodCloseDialogSignup(close) {
      this.loginRegister = close
      this.$message({
        message: 'Congrats, Signup Success',
        type: 'success',
      })
    },
    gotoHome() {
      this.$router.push({name:'homePage'})
    },
    gotoAccount(){
      this.$router.push({name:'accountPage'})
    },
    logout() {
      this.$confirm('Are you sure wanna Logout?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$store.commit('LOGOUT')
          this.$message({
            type: 'success',
            message: 'Logout successfull',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          })
        })
    },
  },
}
</script>