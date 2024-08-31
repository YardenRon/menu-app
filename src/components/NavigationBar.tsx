import React from 'react';
import Menu from '../models/menu';
import MenuItems from './MenuItems';
import './NavigationBar.scss';

interface NavBarProps {
    menus: Menu[];
    onDelete: (item: Menu) => void;
    onAdd: (item: Menu, newItemTitle: string) => void;
    onRename: (item: Menu, newTitle: string) => void;
}

const NavigationBar = ({ menus, onDelete, onAdd, onRename }: NavBarProps) => {
    const depth = 0;

    return (
        <nav>
            <ul className={'menus'}>
                {menus.map((menu, index) => <MenuItems menu={menu} depth={depth} key={index} onDelete={onDelete} onAdd={onAdd} onRename={onRename} />)}
            </ul>
        </nav>
    );
};

export default NavigationBar;