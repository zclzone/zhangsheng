import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    state: {
      articleType: ''
    },
    mutations: {
      change_article_type(state, type) {
        state.articleType = type;
      }
    },
    actions: {
      change_type({ commit }, type) {
        commit('change_article_type', type);
      }
    }
  });
