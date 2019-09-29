import axios from 'axios';
const SET_NEWS_LIST = 'SET_NEWS_LIST';
const SET_NEWS_ITEM = 'SET_NEWS_ITEM';

// initial state
const state = {
    newsList: [],
    newsItem: {},
};

// getters
const getters = {
    getTop25Stories: (state) => {
        return state.newsList
        .sort((a,b) => b.points - a.points)
        .slice(0,25)
    },
    // Pretty printing the JSON for a news item with many comments is super slow
    getNewsItemWith1Comment: (state) => {
        let comments = []
        if (state.newsItem.comments) {
            comments = state.newsItem.comments.find(() => true)
        }
        return {...state.newsItem, comments}
    }
};

// actions
const actions = {
    async fetchNews ({ commit }) {
        try {
            const url = 'https://api.hnpwa.com/v0/news/1.json'
            const res = await axios.get(url)
            const newsList = res.data
            commit(SET_NEWS_LIST, newsList)
        }
        catch (err) {
            console.log(err)
        }
    },
    async fetchNewsItemById({ commit }, id) {
        try {
            const url = `https://api.hnpwa.com/v0/item/${id}.json`
            const res = await axios.get(url)
            const newsItem = res.data
            commit(SET_NEWS_ITEM, newsItem)
        }
        catch (err) {
            console.log(err)
        }
    }
};

// mutations
const mutations = {
    SET_NEWS_LIST(state, newsList) {
        state.newsList = newsList;
    },
    SET_NEWS_ITEM(state, newsItem) {
        state.newsItem = newsItem; 
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
