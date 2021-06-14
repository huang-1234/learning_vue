<template id="nav">
  <div id="app">
    <el-container>
      <!-- <el-header>
        <Header/>
      </el-header> -->
      <el-container>
        <el-aside width="fit-content">
          <CreatorNav/>
        </el-aside>
        <el-main>
          <Main/>
        </el-main>
      </el-container>
    </el-container>
    <router-view />
  </div>
</template>

<script>
// import Nav from "./components/Nav.vue";
// import Header from "../components/Header";
import CreatorNav from "../components/creator/CreatorNav.vue";
import Main from "../components/creator/Main.vue";

export default {
  name: "Creator",
  template: "nav",
  components: {
    CreatorNav,
    // Header,
    Main,
  },
  methods: {
    handleRouterHome() {
      this.$router.replace("/home/");
    },
    handleRouterTodo() {
      this.$router.replace("/todo/");
    },
  },
  // computed:{
  //   userId(){
  //     return this.$route.param.userId
  //   }
  // }
};
</script>

<style>
#app{
  width: 90vw;
  position:absolute;
  right: 5vw;
}
.el-container{
  min-height: 90vh;
}
.aside .el-aside{
  width: 8rem !important;
}

</style>
