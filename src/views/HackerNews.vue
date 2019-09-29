<template>
    <div class="hackernews">
        <h1>Hacker News</h1>
        <ol>
            <li v-for="newsItem in newsList" :key="newsItem.id">
                <div>{{ newsItem.title }}</div>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'HackerNews',
    data() {
        return {
            newsList: [{
                id: 0,
                title: 'Loading...',
                points: 0 || null,
                user: '' || null,
                time: 0,
                time_ago: '',
                comments_count: 0,
                type: '',
                url: '',
                domain: '',
            }],
        };
    },
    methods: {

    },
};
</script>
