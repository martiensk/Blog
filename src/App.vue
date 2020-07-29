<template>
    <v-app
        id="scroll-target"
        style="flex-grow: 1; max-height: 100%;"
        class="overflow-y-auto"
    >
        <v-app-bar
            :collapse="hasScrolled"
            color="primary"
            fixed
            dark
            dense
            class="display-2 bold"
            @click="drawer = hasScrolled ? true : drawer"
        >
            <v-icon v-if="hasScrolled">{{ icon }}</v-icon>
            <template v-else>
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title @click="$router.push('/')"
                    >The JavaScriptor</v-toolbar-title
                >
            </template>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon
                @click.stop="drawer = true"
                v-if="hasScrolled"
            ></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed temporary>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>{{ 'mdi-home' }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title
                        class="fonter"
                        style="font-size: 1.25rem;"
                        >The JavaScriptor</v-list-item-title
                    >
                </v-list-item-content>
            </v-list-item>

            <v-divider light inset></v-divider>

            <Nav />
        </v-navigation-drawer>
        <v-content id="content">
            <v-toolbar flat dense></v-toolbar>
            <router-view />
        </v-content>
        <NavGrid v-if="$route.name !== 'home'" :hide="true" />
        <v-progress-linear
            :value="scrollPercentage"
            fixed
            bottom
        ></v-progress-linear>
    </v-app>
</template>
<script>
    import { mdiCodeJson } from '@mdi/js';
    import Nav from './components/Nav';
    import NavGrid from './components/NavGrid';

    export default {
        name: 'App',

        data: () => ({
            hasScrolled: false,
            scrollPercentage: 0,
            drawer: false,
            icon: mdiCodeJson
        }),
        components: {
            Nav,
            NavGrid
        },
        methods: {
            onScroll(e) {
                this.hasScrolled = window.scrollY > 0;
                this.scrollPercentage =
                    (window.scrollY /
                        (document.body.offsetHeight - window.innerHeight)) *
                    100;
            }
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        }
    };
</script>
<style lang="scss" scoped>
    .fonter {
        font-family: 'Eczar', sans-serif !important;
    }
</style>
