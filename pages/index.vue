<template>
  <el-row :gutter="0" class="content">
    <el-col :span="18">
      <List :articleList="articles" />
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
  async asyncData (app) {
    const rst = await app.$axios.get('/data/articles.json');
    return {
      articles: rst.data.articles
    }
  },
  components: {
    List,
    Personal
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
