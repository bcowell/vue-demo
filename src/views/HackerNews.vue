<template>
    <div class="hackernews">
        <h1>Hacker News</h1>
        <template v-if="newsList.length > 0">
            <ol class="left">
                <li v-for="newsItem in newsList" :key="newsItem.id">
                    <h2 class="title" @click="loadNewsItem(newsItem.id)">{{ newsItem.title }}</h2>
                    <p class="details">{{ newsItem.points }} points by {{ newsItem.user }} | {{ newsItem.comments_count}} comments | <a :href="newsItem.url" target="_blank" rel="noopener">url</a></p>
                </li>
            </ol>
        </template>
        <template v-else>
            Loading...
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('hackernews', {
            newsList: 'getTop25Stories',
        })
    },
    methods: {
        ...mapActions('hackernews', [
            'fetchNews',
        ]),
        loadNewsItem(id) {
            this.$router.push({ name: 'hackernewsItem', params: { id }})
        }
    },
    created() {
        this.fetchNews()
    }
};
</script>

<style scoped>
    .left {
        text-align: left;
        margin-left: 20%;
    }
</style>
