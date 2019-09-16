<template>
  <div class="article">
    <div class="article-container">
      <div class="markdown-body" v-html="article.content_html"></div>
      <!-- <div class="markdown-body" v-html="$store.state.article.content_html"> -->
    </div>
  </div>
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
    const { data } = await this.$axios.get('/data/articles.json');
    this.article = data.articles.find(item => item._id == this.$route.query.id);

    // this.$axios.get('/data/articles.json').then(rst => {
    //   this.article = rst.data.articles.find((item) => {
    //     return item._id == this.$route.query.id;
    //   });
    // });


    // this.article = this.$store.state.articles.find((item) => {
    //   return item._id == this.$route.query.id;
    // });
  }
}
</script>

<style lang="scss">
.article {
  max-width: 1226px;
  min-width: 420px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
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
}
</style>