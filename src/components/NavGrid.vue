<template>
    <v-container :class="['home', { hidden: hide }]" fluid tag="nav">
        <v-row no-gutters justify="center" tag="ul">
            <v-col
                v-for="(child, index) in children"
                :key="index"
                cols="auto"
                offset="20"
                tag="li"
            >
                <router-link :to="child.url" :title="child.name" :class="'nav-card'">
                        <span>{{ child.heading }}</span>
                        <hr />
                        <span>{{ child.subheading }}</span>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import { Articles } from '../articles/export';
    import { routes } from '../navigation';
    import types, { type } from '../articles/types';

    export default {
        name: 'NavGrid',
        props: {
            hide: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            children: []
        }),
        created() {
            for (const route of routes) {
                if (route.name !== 'About' && route.children.length > 0) {
                    for (const i in route.children) {
                        const snippet = Articles[
                            route.name.replace(/\s+/g, '')
                        ][route.children[i].name.replace(/\s+/g, '')].filter(
                            (x) => x.type === types.Heading
                        );
                        if (snippet.length !== 1) {
                            console.warn(
                                `Inconsistent headings found for article "${route.name}/${route.children[i].name}"`
                            );
                            continue;
                        }
                        this.children.push({
                            name: route.children[i].name,
                            heading: snippet[0].heading,
                            subheading: snippet[0].subheading,
                            url: route.children[i].route
                        });
                    }
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .home {
        max-width: 1000px;

        &.hidden {
            display: none;
        }
    }

    ul {
        list-style: none;
    }

    .nav-card {
        border: 1px solid #1eb980;
        padding: 20px;
        width: 150px;
        margin: 5px;
        border-radius: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        display: block;
        transition: background-color 0.2s, transform 0.2s;

        &:hover {
            background-color: darken($color: #1eb980, $amount: 35);
            transform: scale(1.05);
        }

        span {
            text-overflow: ellipsis;
            white-space: nowrap;

            &:first-child {
                font-weight: 900;
            }
        }
    }
</style>
