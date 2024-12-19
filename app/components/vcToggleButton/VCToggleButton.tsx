'use client';

import { VCToggleButtonProps } from '@/types/vcToggleButton';
import { useState } from 'react';

const VCToggleButton = (props: VCToggleButtonProps) => {
  const {
    appearance = 'default',
    size = 'md',
    checked = false,
    width = 'intrinsic',
    disabled = false,
    iconOnly = false,
    label = '',
    onClicked,
    trailingIcon,
    leadingIcon,
  } = props;

  const [btnChecked, setBtnChecked] = useState(checked);

  const getCommonBtnClass = (className: string) => {
    let prevClass = className;
    if (width === 'full' && size !== 'xs' && !iconOnly) {
      prevClass = `${prevClass} vc-toggle-full-width-btn`;
    }
    if (width === 'intrinsic') {
      prevClass = `${prevClass} vc-toggle-intrinsic-width-btn`;
    }
    if (iconOnly) {
      prevClass = `${prevClass} vc-toggle-icon-only-btn-common vc-toggle-${size}-icon-only-btn`;
    }
    if (!iconOnly) {
      prevClass = `${prevClass} vc-toggle-${size}-label-btn`;
    }
    return prevClass;
  };

  const getDisabledBtnClass = () => {
    let className = 'vc-toggle-btn-common';
    if (appearance === 'default') {
      className = `${className} disabled-vc-toggle-btn-common`;
    }
    if (appearance === 'subtle') {
      className = `${className} disabled-subtle-vc-toggle-btn-common`;
    }

    const newClass = getCommonBtnClass(className);
    console.log('newClass', newClass, width);
    return newClass;
  };

  const getDefaultAppearanceBtnClass = () => {
    let className = 'vc-toggle-btn-common';
    if (checked) {
      className = `${className} default-checked-vc-toggle-btn-common`;
    } else {
      className = `${className} default-unchecked-vc-toggle-btn-common`;
    }

    return getCommonBtnClass(className);
  };

  const getSubtleAppearanceBtnClass = () => {
    let className = 'vc-toggle-btn-common';
    if (checked) {
      className = `${className} subtle-checked-vc-toggle-btn-common`;
    } else {
      className = `${className} subtle-unchecked-vc-toggle-btn-common`;
    }

    return getCommonBtnClass(className);
  };

  const getBtnClassName = () => {
    if (disabled) {
      return getDisabledBtnClass();
    }
    if (appearance === 'default') {
      return getDefaultAppearanceBtnClass();
    }
    return getSubtleAppearanceBtnClass();
  };

  const renderLabel = () => {
    if ((trailingIcon || leadingIcon) && !iconOnly) {
      return (
        <div
          role="toggle_btn_label_icon_wrapper_div"
          className="vc-toggle-wrapper-trailing-leading-icon"
        >
          {leadingIcon ? (
            <div role="toggle_btn_leading_icon_div" className="vc-toggle-leading-icon-wrapper">
              <i
                role="toggle_btn_leading_icon"
                className={`pi pi-angle-down vc-toggle-${size}-trailing-leading-icon`}
              />
            </div>
          ) : null}
          <div role="toggle_btn_label_icon_label_div" className="vc-toggle-label-wrapper">
            {label}
          </div>
          {trailingIcon ? (
            <div role="toggle_btn_trailing_icon_div" className="vc-toggle-trailing-icon-wrapper">
              <i
                role="toggle_btn_trailing_icon"
                className={`pi pi-angle-down vc-toggle-${size}-trailing-leading-icon`}
              />
            </div>
          ) : null}
        </div>
      );
    }
    return (
      <div role="toggle_btn_label_div" className="vc-toggle-label-wrapper">
        {label}
      </div>
    );
  };

  const renderChildren = () => {
    return iconOnly ? <i className={`pi pi-image vc-toggle-${size}-icon`} /> : renderLabel();
  };

  const onClick = () => {
    if (!disabled) {
      if (onClicked) {
        onClicked({ checked: !checked });
      }
      setBtnChecked(!btnChecked);
    }
  };

  return (
    <div role="toggle_btn_wrapper_div">
      <div role="toggle_btn_container_div" className={getBtnClassName()} onClick={onClick}>
        {renderChildren()}
      </div>
    </div>
  );
};

export default VCToggleButton;
