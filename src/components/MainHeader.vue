<template>
  <div id="up-header">
    <el-row :gutter="2">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple">
        </div></el-col
      >
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" >
        <div class="grid-content bg-purple">
          
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" >
        <div class="grid-content bg-purple-light">
          <router-link to="/creator">creator</router-link>
        </div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header el-header {
  height: 100%;
  background-color: pink;
}
.el-row{
  height: 3rem;
  width: 100%;
  margin: 0 auto;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #f0f1f3;
}
.bg-purple {
  background: #9d9e9d;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 3rem;
}
</style>