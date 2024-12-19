'use client';

import Link from 'next/link';
import { getMenuItems } from './utils/CommonUtils';

const Home = () => {
  // const renderComponentsList = () => {
  //   return getMenuItems().map((componentListData, index) => {
  //     const sublistArr = componentListData?.items ?? [];
  //     return (
  //       <ol key={`${index.toString()}`}>
  //         <li className="font-bold">{componentListData?.label}</li>
  //         <ul>
  //           {sublistArr.map((sublistData, subIndex) => {
  //             return (
  //               <li key={`${subIndex.toString()}`} className="mt-2 text-primary">
  //                 <Link href={sublistData?.to ?? '/'}>{sublistData.label}</Link>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </ol>
  //     );
  //   });
  // };

  const renderListItems = () => {
    return getMenuItems().map((componentListData, index) => {
      const sublistArr = componentListData?.items ?? [];
      return (
        <div key={`${index.toString()}`} className="mb-3">
          {' '}
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
        </div>
      );
    });
  };

  const renderComponentsList = () => {
    return <ol>{renderListItems()}</ol>;
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
