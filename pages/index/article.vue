<template>
  <div class="article">
    <div class="article-container">
      <div class="markdown-body" v-html="article.content_html"></div>
      <!-- <div class="markdown-body" v-html="$store.state.article.content_html"> -->
    </div>
    <el-button icon="el-icon-download" circle @click="download" title="生成md文件并下载"></el-button>
  </div>
</template>

<script>
export default {
  // async fetch ({ store, route }) {
  //   await store.dispatch('getArticle', route.query.id);
  // },
  data () {
    return {
      article: { content_html: '' }
    }
  },
  async mounted () {
    // const { data } = await this.$axios.get('/data/articles.json');
    // this.article = data.articles.find(item => item._id == this.$route.query.id);
    let { data } = await this.$axios.get(`/data/${this.$route.query.id}.json`);
    this.article = data.article;

    // this.$axios.get('/data/articles.json').then(rst => {
    //   this.article = rst.data.articles.find((item) => {
    //     return item._id == this.$route.query.id;
    //   });
    // });


    // this.article = this.$store.state.articles.find((item) => {
    //   return item._id == this.$route.query.id;
    // });
  },
  methods: {
    download () {
      if (!this.article.content_md) {
        return;
      }
      let data = '';
      let dataPre = `[原文地址：zclzone.com/zhangsheng](https://zclzone.com/zhangsheng/article/?id=${this.article._id})\n\n`
      dataPre += `[更佳阅读体验：zclzone.gitee.io/zhangsheng](https://zclzone.gitee.io/zhangsheng/article/?id=${this.article._id})\n\n`
      data = dataPre + this.article.content_md;
      let blob = new Blob([data], { type: "application/octet-stream", });
      this.$mdExport({
        mdData: data,
        fileName: this.article.title
      });
    }
  },
}
</script>

<style lang="scss">
.article {
  max-width: 1226px;
  min-width: 420px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  .article-container {
    width: 1226px;
    padding: 50px;
    box-shadow: 0 0 5px rgba(227, 217, 210, 0.7);
    border-radius: 5px;
    margin: 0 auto;
    background: #fff;
    position: relative;
    &::before {
      content: "";
      width: 5px;
      height: 45px;
      background: #7d4721;
      position: absolute;
      left: 0;
      top: 2px;
    }
  }
  .is-circle {
    position: absolute;
    font-size: 14px;
    padding: 5px;
    right: 45px;
    top: 20px;
    transition: 0.5s;
    color: #7d4721;
    &:hover {
      border: 1px solid #7d4721;
      background: #fff;
    }
  }
}
</style>