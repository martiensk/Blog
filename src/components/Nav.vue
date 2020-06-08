<template>
    <v-treeview
        :items="items"
        :dense="dense"
        :activatable="activatable"
        :hoverable="hoverable"
        :open-on-click="openOnClick"
        :color="color"
        return-object
        @update:active="test"
    >
        <template v-slot:prepend="{ item, open }">
            <v-icon>
                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
            </v-icon>
        </template>
    </v-treeview>
</template>
<script>
    import Navigation from '../navigation';

    export default {
        name: 'Nav',
        data: () => ({
            items: Navigation,
            dense: true,
            activatable: true,
            hoverable: true,
            openOnClick: true,
            color: 'primary'
        }),
        methods: {
            test(item) {
                console.log(item.length > 0 && item[0].route);
                if(item.length > 0 && typeof item[0].route !== 'undefined') {
                    this.$router.push(item[0].route);
                }
            }
        }
    };
</script>
<style lang="scss" scoped></style>
