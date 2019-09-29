<template>
    <div class="left">
        <h1>{{ newsItem.title }}</h1>
        <div>id: {{ id }}</div>
        <div>points: {{ newsItem.points }}</div>
        <div>user: {{ newsItem.user }}</div>
        <div>time: {{ newsItem.time }}</div>
        <div>time_ago: {{ newsItem.time_ago }}</div>
        <div>url: {{ newsItem.url }}</div>
        <div>comments_count: {{ newsItem.comments_count }}</div>
        <h1>JSON</h1>
        <vue-json-pretty
            :data="rawJSON"
            :showLength=true
            :showLine=true
            :deep=1
            :highlightMouseoverNode=true
            >
        </vue-json-pretty>
        <!-- <div>comments: {{ newsItem.comments }}</div> -->
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import VueJsonPretty from 'vue-json-pretty';

export default {
    name: 'HackerNewsItem',
    props: { id: Number },
    components: { VueJsonPretty },
    computed: {
        ...mapState({
            newsItem: state => state.hackernews.newsItem,
        }),
         ...mapGetters('hackernews', {
            rawJSON: 'getNewsItemWith1Comment',
        })
    },
    methods: {
        ...mapActions('hackernews', [
            'fetchNewsItemById',
        ])
    },
    created() {
        const { id } = this.$router.currentRoute.params;
        this.fetchNewsItemById(id);
    }
};
</script>

<style scoped>
    .left {
        text-align: left;
        margin-left: 20%;
    }
</style>
