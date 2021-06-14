<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Mymail/>
    <p>
      For a guide and recipes on how to configure<br>
      check out the
    </p>
    <router-view/>
  </div>
</template>

<script>
const Mymail = ()=> import('../components/func/mymail.vue')
export default {
  name: 'Home',
  components:{Mymail},
  data:()=>{
    return{
      msg:'I am hsq'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 4px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
