'use client';

import { VCToggleButtonProps } from '@/types/vcToggleButton';
import { useState } from 'react';

const VCToggleButton = (props: VCToggleButtonProps) => {
  const {
    appearance = 'default',
    // state = 'default',
    size = 'md',
    checked = false,
    width = 'intrinsic',
    disabled = false,
    iconOnly = false,
    label = '',
    onClicked,
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

    return newClass;
  };

  const getDefaultAppearanceBtnClass = () => {
    let className = 'vc-toggle-btn-common';
    if (checked) {
      className = `${className} default-vc-checked-toggle-btn-common`;
    } else {
      className = `${className} default-vc-unchecked-toggle-btn-common`;
    }

    return getCommonBtnClass(className);
  };

  const getSubtleAppearanceBtnClass = () => {
    let className = 'vc-toggle-btn-common';
    if (checked) {
      className = `${className} subtle-vc-checked-toggle-btn-common`;
    } else {
      className = `${className} subtle-vc-unchecked-toggle-btn-common`;
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

  const renderChildren = () => {
    return iconOnly ? <i className={`pi pi-image vc-toggle-${size}-icon`} /> : <div>{label}</div>;
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
    <div>
      <div className={getBtnClassName()} onClick={onClick}>
        {renderChildren()}
      </div>
    </div>
  );
};

export default VCToggleButton;
