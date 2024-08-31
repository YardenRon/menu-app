interface Menu {
    title: string;
    subMenu: Menu[];
    path: number[];
}

export default Menu;