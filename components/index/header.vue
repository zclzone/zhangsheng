<template>
  <el-row :gutter="0" class="header">
    <el-col :span="4">
      <span class="brand">张生的官方博客</span>
    </el-col>
    <el-col :span="6">
      <ul class="top-tab">
        <li :class="{'top-menu':true,'selected': item.type == curTopMenu}" @click="curTopMenu = item.type"
          v-for="(item,index) in topMenu" :key="index">{{item.name}}
        </li>
      </ul>
    </el-col>
    <el-col :span="2" class="top-right">
      <!-- <router-link to="/test" class="right-item">写文章</router-link> -->
      <!-- <router-link to="/login" class="right-item">立即登录</router-link>
      <span class="separator">|</span>
      <router-link to="/register" class="right-item">注册</router-link> -->
    </el-col>
  </el-row>
</template>


<script>
export default {
  data () {
    return {
      topMenu: [
        // { name: "首页", type: 'Home' },
        // { name: "技术", type: 'Tech' },
        // { name: "生活", type: 'Life' }
      ],
      curTopMenu: 'Home'
    }
  }
}
</script>


<style lang="scss" scoped>
.header {
  max-width: 1226px;
  min-width: 420px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  line-height: 40px;
  .brand {
    color: #fff;
    font-size: 24px;
  }
  .top-menu,
  .right-item {
    color: #b0b0b0;
    &:hover {
      color: #fff;
    }
  }
  .top-tab {
    list-style: none;
    .top-menu {
      font-size: 16px;
      margin: 0 20px;
      float: left;
      transition: all 1s;
      position: relative;
      cursor: pointer;
      &.selected::after {
        content: "";
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 3px;
        border-bottom: 3px solid #fff;
      }
    }
  }
  .separator {
    color: #333838;
    margin: 0 5px;
  }
  .top-right {
    float: right;
    text-align: right;
  }
}
</style>