import Vue from 'vue';
import Vuex from 'vuex';
import hackernewsModule from './hackernewsModule';
import catModule from './catModule';

Vue.use(Vuex);

const modules = {
    hackernews: hackernewsModule,
    cat: catModule,
};

export default new Vuex.Store({
    modules,
});
