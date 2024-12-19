import { AppMenuItem } from '@/types';

export interface IsBtnCheckedFuncProps {
  checkBtnsArr: string[];
  buttonID: string;
}

export const isBtnChecked = ({ checkBtnsArr, buttonID }: IsBtnCheckedFuncProps) => {
  return checkBtnsArr.includes(buttonID) ? true : false;
};

export const getMenuItems = (includeDashboard?: boolean) => {
  const menuItemModel: AppMenuItem[] = [];
  if (includeDashboard) {
    menuItemModel.push({
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }],
    });
  }
  menuItemModel.push({
    label: 'Toggle Buttons Demo',
    items: [
      {
        label: 'Disabled',
        icon: 'pi pi-fw pi-angle-right',
        to: '/demo/toggleButtons/disabledButtons',
      },
      {
        label: 'Default Appearance',
        icon: 'pi pi-fw pi-angle-right',
        to: '/demo/toggleButtons/defaultAppearanceButtons',
      },
      {
        label: 'Default Appearance(With Icons)',
        icon: 'pi pi-fw pi-angle-right',
        to: '/demo/toggleButtons/defaultAppearanceWithIconsButtons',
      },
      {
        label: 'Subtle Appearance',
        icon: 'pi pi-fw pi-angle-right',
        to: '/demo/toggleButtons/subtleAppearanceButtons',
      },
      {
        label: 'Subtle Appearance(With Icons)',
        icon: 'pi pi-fw pi-angle-right',
        to: '/demo/toggleButtons/subtleAppearanceWithIconsButtons',
      },
    ],
  });

  return menuItemModel;
};

export const getClassListFromClassName = ({ classNameStr }: { classNameStr: string }) => {
  const classNamesArr = classNameStr?.split?.(' ');
  return classNamesArr ? classNamesArr : [];
};
