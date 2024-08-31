import Menu from '../models/menu';

export const INITIAL_MENUS: Menu[] = [
    {
        title: "Menu",
        subMenu: [
            {
                title: "Item 1",
                subMenu: [],
                path: [0, 0]
            }
        ],
        path: [0]
    },
    {
        title: "Menu 2",
        subMenu: [
            {
                title: "Item 2",
                subMenu: [],
                path: [1, 0]
            }
        ],
        path: [1]
    },
    {
        title: "Menu 3",
        subMenu: [
            {
                title: "Item 3",
                subMenu: [],
                path: [2, 0]
            }
        ],
        path: [2]
    }
];