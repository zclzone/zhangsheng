<template>
  <el-row :gutter="0" class="content">
    <el-col :span="18">
      <List />
    </el-col>
    <el-col :span="6" class="personal">
      <Personal />
    </el-col>
  </el-row>
</template>

<script>
import List from '@/components/index/list';
import Personal from '@/components/index/personal';
export default {
  components: {
    List,
    Personal
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

<style lang="scss">
.content {
  max-width: 1226px;
  min-width: 420px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  position: relative;
  .personal {
    position: absolute;
    right: 0;
  }
}
</style>
