<template>
    <div class="image-paragraph">
        <img :src="image" />
        <span>{{ text }}</span>
    </div>
</template>
<script>
    export default {
        name: 'ImageParagraph',
        props: {
            promise: {
                type: Promise,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
        data: () => ({
            image: ''
        }),
        beforeMount() {
            this.promise
                .then((img) => {
                    this.image = img.default;
                })
                .catch((err) => {
                    console.error(err);
                    this.$routes.push('/404');
                });
        }
    };
</script>
<style lang="scss" scoped>
    .image-paragraph {
        display: block;

        img {
            float: left;
            margin-right: 16px;
        }

        span {
            display: inline;
        }
    }
</style>
