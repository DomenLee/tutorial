<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    // 自适应字体

    // 设置viewport
    // const viewport = document.querySelector(`meta[name=viewport]`)
    // const devicePixelRatio = +window.devicePixelRatio
    // let value = 0

    // // 判断
    // switch (devicePixelRatio) {
    //   case 1:
    //     value = 1
    //     break

    //   case 2:
    //     value = 0.5
    //     break

    //   case 3:
    //     value = 0.3333333333333333
    //     break
    // }

    // viewport.setAttribute(`content`, `width=device-width, initial-scale=` +
    //   value + `, maximum-scale=` +
    //   value + `, minimum-scale=` +
    //   value + `, user-scalable=no`)

    // let setRootFontSize = () => {
    //   let html = document.documentElement
    //   let fontSize = html.clientWidth * 2 / 7.5
    //   html.style.fontSize = fontSize + `px`
    // }

    // setRootFontSize()

    // // 测试时使用，上线可删除，非自适应(只支持手机端)
    // window.addEventListener(`resize`, () => {
    //   setTimeout(() => {
    //     setRootFontSize()
    //   }, 1000)
    // }, false)
  }
}
</script>

<style>
#app {
  font-family: 'Aveni', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: .42rem;
}

html {
  font-size: 100px;
}

body, html {
  padding: 0;
  margin: 0;
  height: 100%;
  background-color: #e3e3e3;
}

body * {
  box-sizing: border-box;
}

.clear:after {
  content: '';
  display: block;
  clear: both;
}

.fl {
  float: left;
}

.fr {
  float: right;
}
</style>
