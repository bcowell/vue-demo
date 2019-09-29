<template>
    <div class="cats">
        <h1>This is a cats page</h1>
        <img src="imageSource" class="responsive-image" />
        <button>Random Cat</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'cats',
    data() {
        return {
            imageSource: '',
        };
    },
    computed: {
        ...mapGetters('cats', [
            'getCatImage',
        ]),
    },
    methods: {
        ...mapActions('cats', [
            'setCatImage',
        ]),
    },
};
</script>

<style scoped>
.responsive-image:empty {
    top: 50%;
    left: 50%;
}

@media screen and (orientation: portrait) {
    .responsive-image { max-width: 90%; }
}

@media screen and (orientation: landscape) {
    .responsive-image { max-height: 90%; }
}

/* Nice stripe-style buttons */
button {
    border: none;
    border-radius: 4px;
    outline: none;
    text-decoration: none;
    color: #fff;
    background: #32325d;
    white-space: nowrap;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.025em;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    text-transform: none;
    overflow: visible;
    margin: 0;
    -webkit-appearance: button;
    cursor: pointer;
}

button:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, .10), 0 3px 6px rgba(0, 0, 0, .08);
    background-color: #43458b;
}
</style>
