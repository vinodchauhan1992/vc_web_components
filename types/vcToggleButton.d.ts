export type VCToggleButtonAppearanceProps = 'default' | 'subtle';

export type VCToggleButtonStateProps = 'default' | 'hover' | 'pressed';

export type VCToggleButtonSizeProps = 'xs' | 'sm' | 'md' | 'lg';

export type VCToggleButtonWidthProps = 'intrinsic' | 'full';

export interface VCToggleButtonProps {
  appearance?: VCToggleButtonAppearanceProps;
  state?: VCToggleButtonStateProps;
  size?: VCToggleButtonSizeProps;
  checked?: boolean;
  width?: VCToggleButtonWidthProps;
  disabled?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  label?: string;
}
