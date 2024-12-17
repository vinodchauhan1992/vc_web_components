'use client';

import VCToggleButton from '@/app/components/vcToggleButton/VCToggleButton';
import { buttonsArr } from '@/mockedData/disabledButtonsData';
import { ButtonData } from '@/types/buttonsPage';
import { VCToggleButtonProps } from '@/types/vcToggleButton';

const DisabledButtons = () => {
  const renderSubData = (btnsArr: VCToggleButtonProps[]) => {
    return btnsArr.map((btnData, subIndex) => {
      const header = btnData.iconOnly
        ? `${(subIndex + 1).toString()}. ${btnData.width} width - Icon only`
        : `${(subIndex + 1).toString()}. ${btnData.width} width`;
      return (
        <div key={`${subIndex.toString()}`} className="mt-3">
          <div className="card">
            <h6 className="font-bold mb-4 text-500">{header}</h6>
            <VCToggleButton
              label={btnData.label}
              disabled={btnData.disabled}
              width={btnData.width}
              iconOnly={btnData.iconOnly}
              size={btnData.size}
              appearance={btnData?.appearance}
              state={btnData?.state}
              checked={btnData?.checked}
            />
          </div>
        </div>
      );
    });
  };

  const renderBtnsCard = (buttonData: ButtonData) => {
    const btnsArr = buttonData?.btnsArr ?? [];
    return (
      <div className="card">
        <h6 className="font-bold">{buttonData.heading}</h6>
        {renderSubData(btnsArr)}
      </div>
    );
  };

  const renderButtons = () => {
    return buttonsArr.map((buttonData, index) => {
      return (
        <div key={`${index.toString()}`} className="col-12 lg:col-6">
          {renderBtnsCard(buttonData)}
        </div>
      );
    });
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h5>Disabled Buttons</h5>
          <div className="flex flex-wrap">{renderButtons()}</div>
        </div>
      </div>
    </div>
  );
};

export default DisabledButtons;
