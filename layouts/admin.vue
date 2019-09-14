<template>
  <el-container>
    <el-header>
      <nuxt-link to="/admin" class="logo">
        <img src="@/assets/logo.png" alt="">
      </nuxt-link>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">文章操作管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">文章类型管理</span>
          </el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="2-1">CRUD</el-menu-item>
            <el-menu-item index="2-2">发布</el-menu-item>
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  .logo {
    margin-left: 50px;
    img {
      margin-top: 10px;
      height: 40px;
    }
  }
}
.el-aside {
  background-color: #f8f8f8;
  height: calc(100vh - 60px);
  .el-menu {
    padding-top: 15px;
  }
}
.el-main {
  min-width: 1100px;
  background-color: #fff;
  height: calc(100vh - 60px);
}
</style>