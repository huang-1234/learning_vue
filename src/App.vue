<template id="nav">
  <div id="app">
    <div class="header">
      <MainHeader />
      <NavHeader />
      <TailWindTest />
      <MobileBar v-if="isMobileFlag === true" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import NavHeader from "./components/NavHeader";

import TailWindTest from "./pages/TailWindTest.vue";

import MobileBar from "./pages/Mobile.vue";

export default {
  name: "App",
  data: () => {
    return {
      isMobileFlag: false,
    };
  },
  components: {
    MainHeader,
    NavHeader,
    TailWindTest,
    MobileBar,
  },
  methods: {
    // 添加判断方法
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
  // computed: ()=>{
  //   console.log('object')
  // },
  mounted() {
    if (this.isMobile()) {
      console.log("这是移动端哦");
      this.isMobileFlag = true;
    } else {
      console.log("这是PC端");
      this.isMobileFlag = false;
    }
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: fit-content;
  position: absolute;
  left: 2.5vw;
}
.header {
  width: 100%;
}
</style>
