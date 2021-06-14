/* eslint-disable vue/valid-template-root */

<template>
  <form>
  <div class="text-gray-400 focus-within:text-gray-600 ...">
    <div class="...">
      <svg fill="currentColor"></svg>
    </div>
    <input class="focus:ring-2 focus:ring-gray-300 ...">
    <span>{{msg}}</span>
  </div>
</form>
</template>

<script>
export default {
  data:()=>{
    return {
      msg:'select'
    }
  },
  methods:{
    
  }
  
}
</script>

<style>

</style>