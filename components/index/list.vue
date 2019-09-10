<template>
  <div class="list">
    <div class="list-title"
      v-if="articles.filter(value=> $store.state.articleType ? value.type == $store.state.articleType : true).length > 0">
      文章列表
    </div>
    <el-divider
      v-else-if="$store.state.articleType != '' && articles.filter(value=> $store.state.articleType ? value.type == $store.state.articleType : true).length === 0">
      暂无 <span style="color:#895022;font-weight:600;">{{$store.state.articleType}}</span> 类文章
    </el-divider>
    <div class="article-item"
      v-for="item in articles.filter(value=> $store.state.articleType ? value.type == $store.state.articleType : true)"
      :key="item.id">
      <div class="logo">
        <img src="@/assets/img/logo_css.png" alt="">
      </div>
      <div class="info">
        <nuxt-link :to="`/article?id=${item._id}`">
          <div class="title">
            <h3>{{item.title}}</h3>
            <span class="myIcon myIcon-nice"></span>
          </div>
          <p class="introduce">{{item.introduce}}</p>
          <div class="status">
            <span class="date">{{item.date | dateFormat}}</span>
            <span>阅读量: {{item.clickCount}}</span>
          </div>
          <div class="type">
            <span class="myIcon myIcon-tag"> {{item.type}}</span>
          </div>
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  background: #fff;
  padding: 10px;
  padding-left: 50px;
  margin-right: 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    width: 5px;
    height: 45px;
    background: #895022;
  }
  .list-title {
    height: 50px;
    font-size: 22px;
    font-weight: 700;
    color: #895022;
    margin-bottom: 25px;
    border-bottom: 2px solid rgba(125, 71, 33, 0.2);
  }
  .el-divider__text {
    font-style: italic;
  }
  .article-item {
    height: 125px;
    margin-bottom: 15px;
    display: flex;
    cursor: pointer;
    border-radius: 10px;
    padding: 0 15px;
    transition: 0.4s;
    &:hover {
      transform: scale(1.005);
      box-shadow: 2px 2px 8px rgba(125, 71, 33, 0.4);
      .title h3 {
        color: #895022;
      }
      .info {
        border: none;
      }
    }
    img {
      height: 90px;
      margin-top: 10px;
      border-radius: 10px;
    }
    .info {
      margin-left: 30px;
      margin-top: 15px;
      width: 100%;
      border-bottom: 1px solid rgba(125, 71, 33, 0.2);
      .title {
        display: flex;
        margin-bottom: 5px;
        justify-content: space-between;
        .myIcon {
          color: #895022;
        }
      }
      .status {
        display: flex;
        margin: 10px 0;
        color: #90909e;
        justify-content: space-between;
      }
      .type {
        font-size: 16px;
        color: #895022;
      }
    }
  }
}
</style>