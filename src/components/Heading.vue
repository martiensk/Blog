<template>
    <div>
        <h1>{{ heading }}</h1>
        <h2 v-if="subheading">{{ subheading }}</h2>
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
