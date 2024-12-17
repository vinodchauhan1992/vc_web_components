import { ButtonData } from '@/types/buttonsPage';

export const daButtonsArr: ButtonData[] = [
  {
    heading: 'Default Button(Size = xs)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'xs' },
      { label: 'Toggle me', width: 'intrinsic', size: 'xs', iconOnly: true },
    ],
  },
  {
    heading: 'Default Button(Size = sm)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'sm' },
      { label: 'Toggle me', width: 'intrinsic', size: 'sm', iconOnly: true },
      { label: 'Toggle me', width: 'full', size: 'sm' },
    ],
  },
  {
    heading: 'Default Button(Size = md)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic' },
      { label: 'Toggle me', width: 'intrinsic', iconOnly: true },
      { label: 'Toggle me', width: 'full' },
    ],
  },
  {
    heading: 'Default Button(Size = lg)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'lg' },
      { label: 'Toggle me', width: 'intrinsic', iconOnly: true, size: 'lg' },
      { label: 'Toggle me', width: 'full', size: 'lg' },
    ],
  },
];
