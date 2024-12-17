'use client';

import VCToggleButton from '@/app/components/vcToggleButton/page';
import { ButtonData } from '@/types/buttonsPage';

const DisabledButtons = () => {
  const buttonsArr: ButtonData[] = [
    {
      heading: 'Default Button(Size = xs)',
      btnsArr: [
        { label: 'Disabled', disabled: true, width: 'intrinsic', size: 'xs' },
        { label: 'Disabled', disabled: true, width: 'intrinsic', size: 'xs', iconOnly: true },
      ],
    },
    {
      heading: 'Default Button(Size = sm)',
      btnsArr: [
        { label: 'Disabled', disabled: true, width: 'intrinsic', size: 'sm' },
        { label: 'Disabled', disabled: true, width: 'intrinsic', size: 'sm', iconOnly: true },
        { label: 'Disabled', disabled: true, width: 'full', size: 'sm' },
      ],
    },
    {
      heading: 'Default Button(Size = md)',
      btnsArr: [
        { label: 'Disabled', disabled: true, width: 'intrinsic' },
        { label: 'Disabled', disabled: true, width: 'intrinsic', iconOnly: true },
        { label: 'Disabled', disabled: true, width: 'full' },
      ],
    },
    {
      heading: 'Default Button(Size = lg)',
      btnsArr: [
        { label: 'Disabled', disabled: true, width: 'intrinsic', size: 'lg' },
        { label: 'Disabled', disabled: true, width: 'intrinsic', iconOnly: true, size: 'lg' },
        { label: 'Disabled', disabled: true, width: 'full', size: 'lg' },
      ],
    },
  ];

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
