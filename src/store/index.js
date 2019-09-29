import Vue from 'vue';
import Vuex from 'vuex';
import hackernewsModule from './modules/hackernews';
import catModule from './modules/cat';

Vue.use(Vuex);

const modules = {
    hackernews: hackernewsModule,
    cat: catModule,
};

export default new Vuex.Store({
    modules,
});
