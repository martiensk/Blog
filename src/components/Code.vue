<template>
    <div>
        <h3>{{ language }}</h3>
        <pre>
            <code ref="code" :class="language">{{sourcecode}}</code>
        </pre>
    </div>
</template>
<script>
    import hljs from 'highlight.js';
    import javascript from 'highlight.js/lib/languages/javascript';
    import 'highlight.js/scss/atom-one-dark-reasonable.scss';

    export default {
        name: 'Code',
        props: {
            sourcecode: {
                type: String,
                required: true
            },
            language: {
                type: String,
                required: true
            }
        },
        mounted() {
            hljs.registerLanguage('javascript', javascript);
            hljs.highlightBlock(this.$refs.code);
        }
    };
</script>
<style lang="scss" scoped>
    pre {
        display: flex;
    }
    code {
        font-weight: 400;
        color: #abb2bf;
        background: #282c34;
        width: 100%;
    }
    h3 {
        text-transform: uppercase;
    }
</style>
