import { useEffect, useState } from 'react';
import Menu from '../models/menu';
import './MenuItems.scss';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContextMenu from './ContextMenu';

interface MenuItemsProps {
    menu: Menu;
    depth: number;
    onDelete: (item: Menu) => void;
    onAdd: (item: Menu, newItemTitle: string) => void;
    onRename: (item: Menu, newTitle: string) => void;
}

const MenuItems = ({ menu, depth, onDelete, onAdd, onRename }: MenuItemsProps) => {
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [clickedItem, setClickedItem] = useState<Menu>(menu);
    const [points, setPoints] = useState({ x: 0, y: 0 });

    const subMenuClassName = depth > 0? 'item-sub-menu right-sub-menu' : 'item-sub-menu'; 

    useEffect(() => {
        const handleClick = () => setClicked(false);
        window.addEventListener("click", handleClick);
        return () => {
          window.removeEventListener("click", handleClick);
        };
      }, []);

    const handleMouseEnter = () => setIsSubMenuVisible(true);
    const handleMouseLeave = () => setIsSubMenuVisible(false);

    return (
        <li className={'menu-items'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button className={'item-name'}>
                <span> {menu.title} </span>
                {menu.subMenu.length > 0 && <FontAwesomeIcon icon="caret-down" />} 
            </Button>
            {menu.subMenu.length > 0 && isSubMenuVisible && (
                <ul className={subMenuClassName}>
                    {menu.subMenu.map((item, index) => (
                        <div
                            onContextMenu={(e) => {
                                e.preventDefault();
                                setClicked(true);
                                setClickedItem(item);
                                setPoints({
                                x: e.pageX,
                                y: e.pageY,
                                });
                            }} 
                        >
                            <MenuItems menu={item} depth={depth + 1} key={`${item.title}-${index}`} onDelete={onDelete} onAdd={onAdd} onRename={onRename} />
                        </div>
                    ))}
                </ul>
            )}
            {clicked && (
                <ContextMenu top={points.y} left={points.x} item={clickedItem} onDelete={onDelete} onAdd={onAdd} onRename={onRename} />
            )}
        </li>
    );
};

export default MenuItems;