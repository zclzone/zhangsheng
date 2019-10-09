import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      articleType: '',
      articleKeyWords: '',
      articleList: [],
      article: {}
    },
    mutations: {
      change_article_type(state, type) {
        state.articleType = type;
      },
      change_article_keywords(state, keywords) {
        state.articleKeyWords = keywords;
      },
      setArticleList(state, data) {
        state.articleList = data || [];
      },
      setArticle(state, data) {
        state.article = data || {};
      }
    },
    actions: {
      change_type({ commit }, type) {
        commit('change_article_type', type);
      },
      change_keywords({ commit }, keywords) {
        commit('change_article_keywords', keywords);
      },
      async getArticleList({ commit }) {
        let rst = await this.$axios.get('/data/articleList.json');
        for (const item of rst.data.articleList) {
          item[
            'img'
          ] = require(`@/assets/img/logo_${item.type.toLowerCase()}.png`);
        }
        commit('setArticleList', rst.data.articleList);
      },
      async getArticle({ commit }, id) {
        let rst = await this.$axios.get('/data/articles.json');
        let article = rst.data.articles.find(item => item._id == id);
        commit('setArticle', article);
      }
    }
  });
