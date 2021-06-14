/* eslint-disable no-empty */
<template>
  <div class="my-nav">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      :collapse="isCollapse"
    >
      <el-radio-group
        v-model="isCollapse"
        style="margin-bottom: -5px height:fit-content"
      >
        <!-- <el-radio-button :label="false">展开</el-radio-button> -->
        <el-radio-button :label="true">开闭</el-radio-button>
        <el-radio-button :label="false">打开</el-radio-button>
      </el-radio-group>
      <el-menu-item index="custom">
        <i class="el-icon-s-custom"></i>
        <span slot="title">主页</span>
      </el-menu-item>

      <el-submenu index="document">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item index="document/posts">文章管理</el-menu-item>
          <el-menu-item index="document/column">专栏管理</el-menu-item>
          <el-menu-item index="document/pins">费电管理</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="menu">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">数据中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">内容数据</el-menu-item>
          <el-menu-item index="2-2">关注着数据</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <span slot="title">选项4</span>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="event">
        <template slot="title">
          <i class="el-icon-magic-stick"></i>
          <span slot="title">活动中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="event/create">创造活动</el-menu-item>
          <el-menu-item index="event/plan">激励计划</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <span slot="title">选项4</span>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="help">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span slot="title">导航四</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <span slot="title">选项4</span>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="setting">
        <i class="el-icon-setting"></i>
        <span slot="title">导航五</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>



<script>
const DOCUMENT_POSTS = "document/posts";
const DOCUMENT_COLUMN = "document/column";
const DOCUMENT_PINS = "document/pins";
const NOTHING = "nothing";

export default {
  data() {
    return {
      isCollapse: true,
      isLabel: false,
    };
  },
  methods: {
    handle() {
      this.isCollapse = !this.isCollapse;
      this.isLabel = !this.isLabel;
    },
    handleOpen(key, keyPath) {
      console.log("handleOpen", key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("handleClose", key, keyPath);
    },

    handleSelect(key, keyPath) {
      console.log("handleSelect", "--key:", key, "--keyPath:", keyPath);
      if (DOCUMENT_POSTS == key) {
        console.log(key);
        console.log(DOCUMENT_POSTS);
      } else if (DOCUMENT_COLUMN == key) {
        console.log(DOCUMENT_COLUMN);
      } else if (DOCUMENT_PINS == key) {
        console.log(DOCUMENT_PINS);
      } else {
        console.log(NOTHING);
      }
    },
  },
};
</script>

<style>
.my-nav {
  width: 96%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 90vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>