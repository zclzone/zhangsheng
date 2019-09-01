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
}
</script>

<style>
.el-header,
.el-main,
.el-footer,
.search-box {
  width: 100%;
  min-width: 1300px;
  margin: 0 auto;
  padding: 0;
  background: #fff;
}
.el-header {
  font-size: 14px;
  color: #b0b0b0;
  background: #4c545b;
}
.el-main {
  background: rgba(243, 242, 243, 0.5);
  min-height: 90vh;
  padding: 20px;
}
</style>
