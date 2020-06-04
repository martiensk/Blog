<template>
    <v-treeview
        :items="items"
        :dense="dense"
        :selectable="selectable"
        :activatable="activatable"
        :hoverable="hoverable"
        :open-on-click="openOnClick"
        :color="color"
        return-object
        @update:active="test"
    ></v-treeview>
</template>
<script>
    export default {
        name: 'Nav',
        data: () => ({
            items: [
                {
                    id: 1,
                    name: 'Applications',
                    children: [
                        { id: 2, name: 'Calendar' },
                        { id: 3, name: 'Chrome' },
                        { id: 4, name: 'Webstorm' }
                    ]
                },
                {
                    id: 5,
                    name: 'Documents',
                    children: [
                        {
                            id: 6,
                            name: 'vuetify',
                            children: [
                                {
                                    id: 7,
                                    name: 'src',
                                    children: [
                                        { id: 8, name: 'index' },
                                        { id: 9, name: 'bootstrap' }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 10,
                            name: 'material2',
                            children: [
                                {
                                    id: 11,
                                    name: 'src',
                                    children: [
                                        { id: 12, name: 'v-btn' },
                                        { id: 13, name: 'v-card' },
                                        { id: 14, name: 'v-window' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 15,
                    name: 'Downloads',
                    children: [
                        { id: 16, name: 'October' },
                        { id: 17, name: 'November' },
                        { id: 18, name: 'Tutorial' }
                    ]
                },
                {
                    id: 19,
                    name: 'About'
                }
            ],
            dense: true,
            selectable: false,
            activatable: true,
            hoverable: true,
            openOnClick: true,
            color: 'primary',
            selection: []
        }),
        methods: {
            test(item) {
                alert(JSON.stringify(item));
            }
        }
    };
</script>
<style lang="scss" scoped></style>
