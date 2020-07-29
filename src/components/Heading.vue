<template>
    <div>
        <h1>{{ heading }}</h1>
        <h3 v-if="subheading">{{ subheading }}</h3>
    </div>
</template>
<script>
    export default {
        name: 'Heading',
        props: {
            heading: {
                type: String,
                required: true
            },
            subheading: {
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
