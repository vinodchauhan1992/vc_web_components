import { AppMenuItem } from '@/types';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {
  const model: AppMenuItem[] = [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }],
    },
    {
      label: 'Toggle Buttons',
      items: [
        { label: 'Disabled', icon: 'pi pi-fw pi-home', to: '/pages/toggleButtons/disabledButtons' },
        { label: 'Default', icon: 'pi pi-fw pi-home', to: '/pages/toggleButtons/defaultButtons' },
        { label: 'Subtle', icon: 'pi pi-fw pi-home', to: '/pages/toggleButtons/subtleButtons' },
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
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