'use client';

import VCToggleButton from '@/app/components/vcToggleButton/VCToggleButton';
import { isBtnChecked } from '@/app/utils/CommonUtils';
import { saButtonsArr } from '@/mockedData/subtleAppearanceBtnsData';
import { ButtonData } from '@/types/buttonsPage';
import { VCToggleButtonProps } from '@/types/vcToggleButton';
import { useState } from 'react';

const SubtleAppearanceButtons = () => {
  // LOCAL STATES
  const [checkedButtons, setCheckedButtons] = useState<string[]>([]);

  const onBtnClicked = ({ checked, id }: { checked: boolean; id: string }) => {
    const updatedCheckedBtnsArr = [...checkedButtons];
    const foundCheckedBtnIndex = updatedCheckedBtnsArr.findIndex((checkedBtn) => checkedBtn === id);
    if (checked) {
      if (foundCheckedBtnIndex === -1) {
        updatedCheckedBtnsArr.push(id);
        setCheckedButtons(updatedCheckedBtnsArr);
      }
    } else {
      if (foundCheckedBtnIndex !== -1) {
        updatedCheckedBtnsArr.splice(foundCheckedBtnIndex, 1);
        setCheckedButtons(updatedCheckedBtnsArr);
      }
    }
  };

  const renderSubData = ({ btnsArr, index }: { btnsArr: VCToggleButtonProps[]; index: number }) => {
    return btnsArr.map((btnData, subIndex) => {
      const header = btnData.iconOnly
        ? `${(subIndex + 1).toString()}. ${btnData.width} width - Icon only`
        : `${(subIndex + 1).toString()}. ${btnData.width} width`;
      const btnID = `${index.toString()}_${subIndex.toString()}`;
      const isChecked = isBtnChecked({ checkBtnsArr: checkedButtons, buttonID: btnID });
      return (
        <div key={`${subIndex.toString()}`} className="mt-3">
          <div className="card">
            <h6 className="font-bold mb-4 text-500">{header}</h6>
            <VCToggleButton
              label={isChecked ? 'Toggled on' : btnData.label}
              disabled={btnData.disabled}
              width={btnData.width}
              iconOnly={btnData.iconOnly}
              size={btnData.size}
              appearance={btnData?.appearance}
              onClicked={({ checked }) => onBtnClicked({ checked, id: btnID })}
              checked={isChecked}
            />
          </div>
        </div>
      );
    });
  };

  const renderBtnsCard = ({ buttonData, index }: { buttonData: ButtonData; index: number }) => {
    const btnsArr = buttonData?.btnsArr ?? [];
    return (
      <div className="card">
        <h6 className="font-bold">{buttonData.heading}</h6>
        {renderSubData({ btnsArr, index })}
      </div>
    );
  };

  const renderButtons = () => {
    return saButtonsArr.map((buttonData, index) => {
      return (
        <div key={`${index.toString()}`} className="col-12 lg:col-6">
          {renderBtnsCard({ buttonData, index })}
        </div>
      );
    });
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h5>Subtle Appearance Buttons</h5>
          <div className="flex flex-wrap">{renderButtons()}</div>
        </div>
      </div>
    </div>
  );
};

export default SubtleAppearanceButtons;
