import { SET_CAT_IMAGE } from '../mutationTypes';

// initial state
const state = {
    imageSource: 'https://purr.objects-us-east-1.dream.io/i/4qeDit8.jpg',
};

// getters
const getters = {
    getCatImage: state => state.imageSource,
};

// actions
const actions = {
    setCatImage({ commit }, imageSource) {
        commit({
            type: SET_CAT_IMAGE,
            imageSource,
        });
    },
    requestNewCatImage({ commit }) {
        commit();
    },
};

// mutations
const mutations = {
    SET_CAT_IMAGE(state, imageSource) {
        state.imageSource = imageSource;
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
