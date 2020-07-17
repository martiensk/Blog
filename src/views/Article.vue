<template>
    <article>
        <template v-for="(bit, index) in article">
            <Heading
                v-if="bit.type === Type.Heading"
                :heading="bit.heading"
                :subheading="bit.subheading"
                :key="index"
            />
            <ImageParagraph
                v-if="bit.type === Type.ParagraphImageLeft"
                :key="index"
                :promise="bit.image"
                :text="bit.text"
            />
            <p v-if="bit.type === Type.Paragraph" :key="index">
                {{ bit.text }}
            </p>
            <ul v-if="bit.type === Type.List" :key="index">
                <li v-for="(item, id) in bit.items" :key="id">{{ item }}</li>
            </ul>
            <Code
                v-if="bit.type === Type.Code"
                :key="index"
                :sourcecode="bit.text"
                :language="bit.language"
            />
        </template>
    </article>
</template>
<script>
    import * as Articles from '../articles/export';
    import Type from '../articles/types';
    import Heading from '../components/Heading';
    import ImageParagraph from '../components/ImageParagraph';
    import Code from '../components/Code';

    export default {
        name: 'Article',
        data: () => ({ Type }),
        computed: {
            articleId() {
                if (!this.categoryId) {
                    return null;
                }
                let article = Object.keys(
                    Articles.Articles[this.categoryId]
                ).filter((x) => x.toLowerCase() === this.$route.params.article);
                return article.length === 1 ? article[0] : null;
            },
            categoryId() {
                let category = Object.keys(Articles.Articles).filter(
                    (x) => x.toLowerCase() === this.$route.params.category
                );
                return category.length === 1 ? category[0] : null;
            },
            article() {
                if (
                    this.categoryId &&
                    this.articleId &&
                    Articles.Articles[this.categoryId][this.articleId]
                ) {
                    return Articles.Articles[this.categoryId][this.articleId];
                }
                return null;
            }
        },
        components: {
            Heading,
            ImageParagraph,
            Code
        },
        mounted() {
            if (this.article === null) {
                this.$router.replace('/404');
            }
        }
    };
</script>
<style lang="scss" scoped>
    article {
        margin: 8px;
        max-width: 1000px;
        display: block;
        margin: 0 auto;
    }

    p,
    ul {
        margin: 16px 0;
    }
</style>
