<template>
    <div>
        <h1>{{ heading }}</h1>
        <p>{{ text }}</p>
    </div>
</template>
<script>
    export default {
        name: 'TitledParagraph',
        props: {
            heading: {
                type: String,
                required: true
            },
            text: {
                type: String,
                default: ''
            }
        }
    };
</script>
<style lang="scss" scoped>
    h1 {
        margin: 16px 0;
    }
</style>
