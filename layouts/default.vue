<template>
  <el-container>
    <el-header height="40px">
      <my-header />
    </el-header>
    <div class="search-box">
      <Search />
    </div>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
import MyHeader from '@/components/index/header';
import Search from '@/components/index/search';
export default {
  components: {
    MyHeader,
    Search
  },
  watch: {
    '$route': function (to, from) {
      //路由切换时让页面回到最顶部
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  background: rgba(243, 242, 243, 0.5);
  min-height: 90vh;
  padding: 20px;
}
</style>