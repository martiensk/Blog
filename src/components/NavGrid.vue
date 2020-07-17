<template>
    <v-container class="home" fluid>
        <v-row no-gutters justify="center">
            <v-col v-for="n in 12" :key="n" cols="auto" offset="20">
                <div class="square"></div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: 'NavGrid'
    };
</script>
<style lang="scss" scoped>
    .home {
        max-width: 1000px;
    }
</style>
