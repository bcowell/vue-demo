import Vue from 'vue';
import Vuex from 'vuex';
import hackernewsModule from './hackernewsModule';
import catsModule from './catsModule';

Vue.use(Vuex);

const modules = {
    hackernews: hackernewsModule,
    cats: catsModule,
};

export default new Vuex.Store({
    modules,
});
