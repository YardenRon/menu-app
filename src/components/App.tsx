import { useState } from 'react';
import './App.scss';
import NavigationBar from './NavigationBar';
import Menu from '../models/menu';
import { INITIAL_MENUS } from '../data/initialMenus';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useImmer } from 'use-immer';

library.add(faCaretDown);

const App = () => {
  const [menus, setMenus] = useImmer<Menu[]>(INITIAL_MENUS);

  const onDelete = (item: Menu) => {
    setMenus(draft => {
      let current = draft[item.path[0]];
      let i;
      for (i = 1; i < item.path.length-1; i++) {
        current = current.subMenu[item.path[i]];
      }
      current.subMenu.splice(item.path[i]);
    });
  };

  const onAdd = (item: Menu, newItemTitle: string) => {
    setMenus(draft => {
      let current = draft[item.path[0]];
      let i;
      for (i = 1; i < item.path.length; i++) {
        current = current.subMenu[item.path[i]];
      }
      current.subMenu.push({
        title: newItemTitle,
        subMenu: [],
        path: [...item.path, item.subMenu.length]        
      });
    });
  };

  const onRename = (item: Menu, newTitle: string) => {
    setMenus(draft => {
      let current = draft[item.path[0]];
      let i;
      for (i = 1; i < item.path.length; i++) {
        current = current.subMenu[item.path[i]];
      }
      current.title = newTitle;
    });
  };

  return (
    <div className={'container'}>
      <NavigationBar menus={menus} onDelete={onDelete} onAdd={onAdd} onRename={onRename} />
    </div>
  );
}

export default App;
