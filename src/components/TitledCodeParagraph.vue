<template>
    <div>
        <TitledParagraph :heading="heading" :text="text" />
        <Code :sourcecode="sourcecode" :language="language" />
    </div>
</template>
<script>
    import TitledParagraph from './TitledParagraph';
    import Code from './Code';

    export default {
        name: 'TitledCodeParagraph',
        props: {
            heading: {
                type: String,
                required: true
            },
            text: {
                type: String,
                default: ''
            },
            sourcecode: {
                type: String,
                required: true
            },
            language: {
                type: String,
                required: true
            }
        },
        components: {
            TitledParagraph,
            Code
        }
    };
</script>
