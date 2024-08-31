import React from "react";
import './ContextMenu.scss';
import Button from 'react-bootstrap/Button';
import Menu from '../models/menu';

interface ContextMenuProps {
    top: number;
    left: number;
    item: Menu | undefined;
    onDelete: (item: Menu) => void;
    onAdd: (item: Menu, newItemTitle: string) => void;
    onRename: (item: Menu, newTitle: string) => void;
}

const ContextMenu = ({ top, left, item, onDelete, onAdd, onRename }: ContextMenuProps) => {
    const item2 = item as Menu;

    return (
    <div style={{top: `${top}px`, left: `${left}px`}}>
        <ul className={'context-menu'}>
            <li>
                <Button onClick={() => onAdd(item2, "new item")}>
                    Add
                </Button>
            </li>
            <li> 
                <Button onClick={() => onRename(item2, "new name")}>
                    Rename
                </Button>
            </li>
            <li>
                <Button onClick={() => onDelete(item2)}>
                    Delete
                </Button>
            </li>
        </ul>
    </div>
    );
};
export default ContextMenu;