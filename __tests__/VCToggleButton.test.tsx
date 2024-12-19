import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import VCToggleButton from '../app/components/vcToggleButton/VCToggleButton';
import { VCToggleButtonProps } from '../types/vcToggleButton';

describe('VCToggleButton component tests', () => {
  const props: VCToggleButtonProps = {
    label: 'Toggle me',
    onClicked: jest.fn(),
  };

  const fetchClassName = (role = 'toggle_btn_container_div') => {
    const toggleBtnDiv = screen.getByRole(role);
    const className = toggleBtnDiv.className;
    return className;
  };

  it('renders component', () => {
    const { container } = render(<VCToggleButton {...props} />);

    expect(container).toMatchSnapshot();
  });

  describe('Default appearance toggle button tests', () => {
    const defaultAppearanceProps: VCToggleButtonProps = {
      ...props,
      appearance: 'default',
    };

    it('should render xs button', () => {
      const updatedProps: VCToggleButtonProps = {
        ...defaultAppearanceProps,
        size: 'xs',
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common default-unchecked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-xs-label-btn'
      );
    });

    it('should render sm button with icons only', () => {
      const updatedProps: VCToggleButtonProps = {
        ...defaultAppearanceProps,
        size: 'md',
        iconOnly: true,
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common default-unchecked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-icon-only-btn-common vc-toggle-md-icon-only-btn'
      );
    });

    it('should render md button', () => {
      const updatedProps: VCToggleButtonProps = {
        ...defaultAppearanceProps,
        size: 'md',
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common default-unchecked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-md-label-btn'
      );
    });

    it('should render lg button', () => {
      const updatedProps: VCToggleButtonProps = {
        ...defaultAppearanceProps,
        size: 'lg',
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common default-unchecked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-lg-label-btn'
      );
    });

    it('should render lg button with full width', () => {
      const updatedProps: VCToggleButtonProps = {
        ...defaultAppearanceProps,
        size: 'lg',
        width: 'full',
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common default-unchecked-vc-toggle-btn-common vc-toggle-full-width-btn vc-toggle-lg-label-btn'
      );
    });

    it('should render md button', () => {
      const updatedProps: VCToggleButtonProps = {
        ...defaultAppearanceProps,
        size: 'md',
        checked: true,
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common default-checked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-md-label-btn'
      );
    });
  });

  describe('Subtle appearance toggle button tests', () => {
    const subtleAppearanceProps: VCToggleButtonProps = {
      ...props,
      appearance: 'subtle',
    };

    it('should render xs button', () => {
      const updatedProps: VCToggleButtonProps = {
        ...subtleAppearanceProps,
        size: 'xs',
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common subtle-unchecked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-xs-label-btn'
      );
    });

    it('should render sm button with icons only', () => {
      const updatedProps: VCToggleButtonProps = {
        ...subtleAppearanceProps,
        size: 'md',
        iconOnly: true,
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common subtle-unchecked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-icon-only-btn-common vc-toggle-md-icon-only-btn'
      );
    });

    it('should render md button', () => {
      const updatedProps: VCToggleButtonProps = {
        ...subtleAppearanceProps,
        size: 'md',
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common subtle-unchecked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-md-label-btn'
      );
    });

    it('should render lg button', () => {
      const updatedProps: VCToggleButtonProps = {
        ...subtleAppearanceProps,
        size: 'lg',
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common subtle-unchecked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-lg-label-btn'
      );
    });

    it('should render lg button with full width', () => {
      const updatedProps: VCToggleButtonProps = {
        ...subtleAppearanceProps,
        size: 'lg',
        width: 'full',
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common subtle-unchecked-vc-toggle-btn-common vc-toggle-full-width-btn vc-toggle-lg-label-btn'
      );
    });

    it('should render checked md button', () => {
      const updatedProps: VCToggleButtonProps = {
        ...subtleAppearanceProps,
        size: 'md',
        checked: true,
      };

      render(<VCToggleButton {...updatedProps} />);
      expect(fetchClassName()).toBe(
        'vc-toggle-btn-common subtle-checked-vc-toggle-btn-common vc-toggle-intrinsic-width-btn vc-toggle-md-label-btn'
      );
    });
  });

  it('should render label', () => {
    const updatedProps: VCToggleButtonProps = {
      ...props,
      size: 'xs',
      appearance: 'default',
      checked: true,
    };

    const { container } = render(<VCToggleButton {...updatedProps} />);
    expect(container).toMatchSnapshot();

    const label = screen.getByText('Toggle me');
    expect(label).toBeInTheDocument();
  });

  it('should render toggle button with leading and trailing icon', () => {
    const updatedProps: VCToggleButtonProps = {
      ...props,
      label: 'Toggled on',
      size: 'md',
      appearance: 'default',
      checked: true,
      leadingIcon: true,
      trailingIcon: true,
    };

    const { container } = render(<VCToggleButton {...updatedProps} />);
    expect(container).toMatchSnapshot();

    const label = screen.getByText('Toggled on');
    expect(label).toBeInTheDocument();

    const leadingIconDivClassName = fetchClassName('toggle_btn_leading_icon_div');
    const leadingIconClassName = fetchClassName('toggle_btn_leading_icon');
    const trailingIconDivClassName = fetchClassName('toggle_btn_trailing_icon_div');
    const trailingIconClassName = fetchClassName('toggle_btn_leading_icon');
    const labelDivClassName = fetchClassName('toggle_btn_label_icon_label_div');

    expect(leadingIconDivClassName).toBe('vc-toggle-leading-icon-wrapper');
    expect(leadingIconClassName).toBe('pi pi-angle-down vc-toggle-md-trailing-leading-icon');
    expect(trailingIconDivClassName).toBe('vc-toggle-trailing-icon-wrapper');
    expect(trailingIconClassName).toBe('pi pi-angle-down vc-toggle-md-trailing-leading-icon');
    expect(labelDivClassName).toBe('vc-toggle-label-wrapper');
  });
});
