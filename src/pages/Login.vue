<template>
  <div>
    <img class="logo" src="../assets/logo.png">
    <form class="login-form">
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button type="default" @click="submit">登录</mt-button>
    </form>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    submit () {
      if (this.phone === '188' && this.password === '123') {
        this.$router.push('/')
      } else {
        Toast('账号或者密码错误')
      }
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style scoped>
  .logo {
    width: 3rem;
    height: 3rem;
  }
</style>
