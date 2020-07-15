import { Articles } from './articles/export';

const routes = [];
let id = 0;

for (const i of Object.keys(Articles)) {
    const main = {
        id: (id += 1),
        name: i.replace(/([A-Z])/g, ' $1').trim(),
        children: []
    };

    for (const x of Object.keys(Articles[i])) {
        main.children.push({
            id: (id += 1),
            name: x.replace(/([A-Z])/g, ' $1').trim(),
            route: `/${i.toLowerCase()}/${x.toLowerCase()}`
        });
    }

    routes.push(main);
}

routes.push({
    id: (id += 1),
    name: 'About',
    route: '/about'
});

export { routes };
