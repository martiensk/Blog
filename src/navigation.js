export default [
    {
        id: 1,
        name: 'About',
        route: 'about'
    },
    {
        id: 2,
        name: 'Applications',
        children: [{ id: 3, name: 'Calendar', route: 'calender' }]
    },
    {
        id: 4,
        name: 'Documents',
        children: [
            {
                id: 5,
                name: 'vuetify',
                children: [
                    {
                        id: 6,
                        name: 'src',
                        children: [
                            { id: 7, name: 'bootstrap', route: 'bootstrap' }
                        ]
                    }
                ]
            }
        ]
    }
];
