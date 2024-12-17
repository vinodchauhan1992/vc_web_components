import { ButtonData } from '@/types/buttonsPage';

export const dawiButtonsArr: ButtonData[] = [
  {
    heading: 'Default Button(Size = xs, Width = intrinsic)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'xs', trailingIcon: true },
      { label: 'Toggle me', width: 'intrinsic', size: 'xs', leadingIcon: true },
      { label: 'Toggle me', width: 'intrinsic', size: 'xs', leadingIcon: true, trailingIcon: true },
    ],
  },
  {
    heading: 'Default Button(Size = sm, Width = intrinsic)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'sm', trailingIcon: true },
      { label: 'Toggle me', width: 'intrinsic', size: 'sm', leadingIcon: true },
      { label: 'Toggle me', width: 'intrinsic', size: 'sm', trailingIcon: true, leadingIcon: true },
    ],
  },
  {
    heading: 'Default Button(Size = sm, Width = full)',
    btnsArr: [
      { label: 'Toggle me', width: 'full', size: 'sm', trailingIcon: true },
      { label: 'Toggle me', width: 'full', size: 'sm', leadingIcon: true },
      { label: 'Toggle me', width: 'full', size: 'sm', trailingIcon: true, leadingIcon: true },
    ],
  },
  {
    heading: 'Default Button(Size = md, Width = intrinsic)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', trailingIcon: true },
      { label: 'Toggle me', width: 'intrinsic', leadingIcon: true },
      { label: 'Toggle me', width: 'intrinsic', trailingIcon: true, leadingIcon: true },
    ],
  },
  {
    heading: 'Default Button(Size = md, Width = full)',
    btnsArr: [
      { label: 'Toggle me', width: 'full', trailingIcon: true },
      { label: 'Toggle me', width: 'full', leadingIcon: true },
      { label: 'Toggle me', width: 'full', trailingIcon: true, leadingIcon: true },
    ],
  },
  {
    heading: 'Default Button(Size = lg, Width = intrinsic)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'lg', trailingIcon: true },
      { label: 'Toggle me', width: 'intrinsic', size: 'lg', leadingIcon: true },
      { label: 'Toggle me', width: 'intrinsic', size: 'lg', trailingIcon: true, leadingIcon: true },
    ],
  },
  {
    heading: 'Default Button(Size = lg, Width = full)',
    btnsArr: [
      { label: 'Toggle me', width: 'full', size: 'lg', trailingIcon: true },
      { label: 'Toggle me', width: 'full', size: 'lg', leadingIcon: true },
      { label: 'Toggle me', width: 'full', size: 'lg', trailingIcon: true, leadingIcon: true },
    ],
  },
];
