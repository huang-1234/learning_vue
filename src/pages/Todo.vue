<template>
  <div>
    <h3>todo</h3>
    <div class="todo">

    </div>
    <span>
      <myButton></myButton>
    </span>
    <router-view></router-view>
  </div>
  
</template>

<script>
import myButton from '../components/elementUI/button'
  export default{
    name:'Todo',
    data:()=>{
      return{
        todoList:[]
      }
    },
    components:{
      myButton

    }
  }
</script>