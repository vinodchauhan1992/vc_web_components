'use client';

import Link from 'next/link';
import { getMenuItems } from './utils/CommonUtils';

const Home = () => {
  // const componentsListArr: DashboardComponentListProps[] = [
  //   {
  //     label: 'Toggle Buttons',
  //     items: [
  //       { label: 'Disabled Buttons', route: '/demo/toggleButtons/disabledButtons' },
  //       {
  //         label: 'Default Appearance Buttons',
  //         route: '/demo/toggleButtons/defaultAppearanceButtons',
  //       },
  //       {
  //         label: 'Default Appearance Buttons(With Icons)',
  //         route: '/demo/toggleButtons/defaultAppearanceWithIconsButtons',
  //       },
  //       {
  //         label: 'Subtle Appearance Buttons',
  //         route: '/demo/toggleButtons/subtleAppearanceButtons',
  //       },
  //       {
  //         label: 'Subtle Appearance Buttons(With Icons)',
  //         route: '/demo/toggleButtons/subtleAppearanceWithIconsButtons',
  //       },
  //     ],
  //   },
  // ];

  const renderComponentsList = () => {
    return getMenuItems().map((componentListData, index) => {
      const sublistArr = componentListData?.items ?? [];
      return (
        <ol key={`${index.toString()}`}>
          <li className="font-bold">{componentListData?.label}</li>
          <ul>
            {sublistArr.map((sublistData, subIndex) => {
              return (
                <li key={`${subIndex.toString()}`} className="mt-2 text-primary">
                  <Link href={sublistData?.to ?? '/'}>{sublistData.label}</Link>
                </li>
              );
            })}
          </ul>
        </ol>
      );
    });
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h5>Components</h5>
          {renderComponentsList()}
        </div>
      </div>
    </div>
  );
};

export default Home;
