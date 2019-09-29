const SET_CAT_IMAGE = 'SET_CAT_IMAGE';

// initial state
const state = {
    newsList: [],
    newsItem: {},
};

// getters
const getters = {
    getCatImage: state => state.imageSource,
}

// actions
const actions = {
    setCatImage({ commit }, imageSource) {
        commit(SET_CAT_IMAGE, imageSource);
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
