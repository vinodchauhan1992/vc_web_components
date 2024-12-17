'use client';

import { DashboardComponentListProps } from '@/types/dashboard';
import Link from 'next/link';

const Home = () => {
  const componentsListArr: DashboardComponentListProps[] = [
    {
      label: 'Toggle Buttons',
      items: [
        { label: 'Disabled Buttons', route: '/appPages/toggleButtons/disabledButtons' },
        {
          label: 'Default Appearance Buttons',
          route: '/appPages/toggleButtons/defaultAppearanceButtons',
        },
        { label: 'Subtle Appearance Buttons', route: '/appPages/toggleButtons/subtleAppearanceButtons' },
      ],
    },
  ];

  const renderComponentsList = () => {
    return componentsListArr.map((componentListData, index) => {
      const sublistArr = componentListData?.items ?? [];
      return (
        <ol key={`${index.toString()}`}>
          <li className="font-bold">{componentListData?.label}</li>
          <ul>
            {sublistArr.map((sublistData, subIndex) => {
              return (
                <li key={`${subIndex.toString()}`} className="mt-2 text-primary">
                  <Link href={sublistData?.route ?? '/'}>{sublistData.label}</Link>
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
