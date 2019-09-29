import axios from 'axios';
const SET_CAT_IMAGE = 'SET_CAT_IMAGE';

// initial state
const state = {
    // my favourite as a placeholder
    imageSource: 'https://purr.objects-us-east-1.dream.io/i/4qeDit8.jpg',
};

// getters
const getters = {};

// actions
const actions = {
    async fetchNewCat ({ commit }) {
        try {
            const url = 'https://aws.random.cat/meow'
            const res = await axios.get(url)
            const newImageSource = res.data.file
            commit(SET_CAT_IMAGE, newImageSource)
        }
        catch (err) {
            console.log(err)
        }
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
    mutations
};
