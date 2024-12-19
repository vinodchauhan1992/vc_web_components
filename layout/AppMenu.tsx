import React from 'react'
import { getMenuItems } from '@/app/utils/CommonUtils';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {
  return (
    <MenuProvider>
      <ul className="layout-menu">
        {getMenuItems(true).map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
