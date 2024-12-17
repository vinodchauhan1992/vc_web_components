import { ButtonData } from '@/types/buttonsPage';

export const daButtonsArr: ButtonData[] = [
  {
    heading: 'Default Button(Size = xs)',
    btnsArr: [
      { label: 'T Button', width: 'intrinsic', size: 'xs' },
      { label: 'T Button', width: 'intrinsic', size: 'xs', iconOnly: true },
    ],
  },
  {
    heading: 'Default Button(Size = sm)',
    btnsArr: [
      { label: 'T Button', width: 'intrinsic', size: 'sm' },
      { label: 'T Button', width: 'intrinsic', size: 'sm', iconOnly: true },
      { label: 'T Button', width: 'full', size: 'sm' },
    ],
  },
  {
    heading: 'Default Button(Size = md)',
    btnsArr: [
      { label: 'T Button', width: 'intrinsic' },
      { label: 'T Button', width: 'intrinsic', iconOnly: true },
      { label: 'T Button', width: 'full' },
    ],
  },
  {
    heading: 'Default Button(Size = lg)',
    btnsArr: [
      { label: 'T Button', width: 'intrinsic', size: 'lg' },
      { label: 'T Button', width: 'intrinsic', iconOnly: true, size: 'lg' },
      { label: 'T Button', width: 'full', size: 'lg' },
    ],
  },
];
