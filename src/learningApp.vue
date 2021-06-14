<template>
  <div id="app">
    <div class="nav">
      <span>
        <router-link 
        to="/home/" tag="button"  class="btn home" 
        replace active-class="nav-active"
        >Home</router-link>
      </span>
      <br>
      
      <span>
        <router-link 
        to="/todo/" tag="button" class="btn home" 
        replace active-class="nav-active" 
        >todo</router-link>
      </span>
      <br>
      <span>
        <router-link 
        to="/creator/" tag="button" class="btn home" 
        replace active-class="nav-active" 
        >creator</router-link>
      </span>

    </div>
    <!-- 如果没有下面的router-view则组件无法渲染 -->
<!-- 
    <button class="btn home" v-on:click="handleRouterHome">Home  </button>
    <button class="btn todo" v-on:click="handleRouterTodo">todo  </button>
     -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue';
// import Todo from './components/Todo.vue';

export default {
  name: 'App',
  components: {
    // Home,
    // Todo
  },
  methods:{
    handleRouterHome(){
      this.$router.replace('/home/')
    },
    handleRouterTodo(){
      this.$router.replace('/todo/')
    },
  },
  // computed:{
  //   userId(){
  //     return this.$route.param.userId
  //   }
  // }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

} */
.nav-active{
  color:blue;
}
.btn{
  border: 1px solid green;
}

</style>
