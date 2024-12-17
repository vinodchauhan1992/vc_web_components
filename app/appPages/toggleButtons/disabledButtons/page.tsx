'use client';

import VCToggleButton from '@/app/components/vcToggleButton/VCToggleButton';
import { buttonsArr } from '@/mockedData/disabledButtonsData';

const DisabledButtons = () => {
  const renderButtons = () => {
    return buttonsArr.map((buttonData, index) => {
      const btnsArr = buttonData?.btnsArr ?? [];
      return (
        <div key={`${index.toString()}`} className="col-6">
          <div className="card">
            <h6 className="font-bold">{buttonData.heading}</h6>
            {btnsArr.map((btnData, subIndex) => {
              const header = btnData.iconOnly
                ? `${(subIndex + 1).toString()}. ${btnData.width} width - Icon only`
                : `${(subIndex + 1).toString()}. ${btnData.width} width`;
              return (
                <div key={`${subIndex.toString()}`} className="mt-3">
                  <div className="font-medium mb-2">{header}</div>
                  <VCToggleButton
                    label={btnData.label}
                    disabled={btnData.disabled}
                    width={btnData.width}
                    iconOnly={btnData.iconOnly}
                    size={btnData.size}
                  />
                </div>
              );
            })}
          </div>
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
