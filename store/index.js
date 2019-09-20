import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      articleType: '',
      articleKeyWords: '',
      articles: [],
      article: {}
    },
    mutations: {
      change_article_type(state, type) {
        state.articleType = type;
      },
      change_article_keywords(state, keywords) {
        state.articleKeyWords = keywords;
      },
      setArticles(state, data) {
        state.articles = data || [];
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
      async getArticles({ commit }) {
        let rst = await this.$axios.get('/data/articles.json');
        for (const item of rst.data.articles) {
          item[
            'img'
          ] = require(`@/assets/img/logo_${item.type.toLowerCase()}.png`);
        }
        commit('setArticles', rst.data.articles);
      },
      async getArticle({ commit }, id) {
        let rst = await this.$axios.get('/data/articles.json');
        let article = rst.data.articles.find(item => item._id == id);
        commit('setArticle', article);
      }
    }
  });
