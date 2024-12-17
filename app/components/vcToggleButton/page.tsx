'use client';

import { VCToggleButtonProps } from '@/types/vcToggleButton';

const VCToggleButton = (props: VCToggleButtonProps) => {
  const {
    appearance = 'default',
    state = 'default',
    size = 'md',
    checked = false,
    width = 'intrinsic',
    disabled = false,
    loading = false,
    iconOnly = false,
    leadingIcon = false,
    trailingIcon = false,
    label = '',
  } = props;

  const getDisabledBtnClass = () => {
    let className = 'vc-toggle-btn-common disabled-vc-toggle-btn-common';
    if (width === 'full' && size !== 'xs' && !iconOnly) {
      className = `${className} vc-toggle-full-width-btn`;
    }
    if (width === 'intrinsic') {
      className = `${className} vc-toggle-intrinsic-width-btn`;
    }
    if (iconOnly) {
      className = `${className} vc-toggle-icon-only-btn-common vc-toggle-${size}-icon-only-btn`;
    }
    if (!iconOnly) {
      className = `${className} vc-toggle-${size}-label-btn`;
    }

    return className;
  };

  const getBtnClassName = () => {
    if (disabled) {
      return getDisabledBtnClass();
    }
    return '';
  };

  const renderChildren = () => {
    return iconOnly ? <i className={`pi pi-image vc-toggle-${size}-icon`} /> : <div>{label}</div>;
  };

  return (
    <div>
      <div className={getBtnClassName()}>{renderChildren()}</div>
    </div>
  );
};

export default VCToggleButton;
