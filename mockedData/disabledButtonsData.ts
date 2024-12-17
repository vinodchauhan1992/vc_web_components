import { ButtonData } from '@/types/buttonsPage';

export const buttonsArr: ButtonData[] = [
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
