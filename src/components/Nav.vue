<template>
    <v-treeview
        dense
        activatable
        hoverable
        return-object
        :color="color"
        :items="items"
        :open-on-click="openOnClick"
        @update:active="navigate"
    >
        <template v-slot:prepend="{ item, active }">
            <v-icon @click="active ? $event.stopPropagation() : null">
                {{
                    typeof item.children !== 'undefined'
                        ? 'mdi-folder-open'
                        : 'mdi-file-document'
                }}
            </v-icon>
        </template>
        <template v-slot:label="{ item, active }">
            <div @click="active ? $event.stopPropagation() : null">
                {{ item.name }}
            </div>
        </template>
    </v-treeview>
</template>
<script>
    import { routes } from '../navigation';

    export default {
        name: 'Nav',
        data: () => ({
            items: routes,
            dense: true,
            activatable: true,
            hoverable: true,
            openOnClick: true,
            color: 'primary'
        }),
        methods: {
            navigate(item) {
                if (item.length > 0 && typeof item[0].route !== 'undefined') {
                    this.$router.push(item[0].route);
                }
            }
        }
    };
</script>
<style lang="scss" scoped></style>
