import { ButtonData } from '@/types/buttonsPage';

export const saButtonsArr: ButtonData[] = [
  {
    heading: 'Subtle Button(Size = xs)',
    btnsArr: [
      { label: 'S Button', width: 'intrinsic', size: 'xs', appearance: 'subtle' },
      { label: 'S Button', width: 'intrinsic', size: 'xs', iconOnly: true, appearance: 'subtle' },
    ],
  },
  {
    heading: 'Subtle Button(Size = sm)',
    btnsArr: [
      { label: 'S Button', width: 'intrinsic', size: 'sm', appearance: 'subtle' },
      { label: 'S Button', width: 'intrinsic', size: 'sm', iconOnly: true, appearance: 'subtle' },
      { label: 'S Button', width: 'full', size: 'sm', appearance: 'subtle' },
    ],
  },
  {
    heading: 'Subtle Button(Size = md)',
    btnsArr: [
      { label: 'S Button', width: 'intrinsic', appearance: 'subtle' },
      { label: 'S Button', width: 'intrinsic', iconOnly: true, appearance: 'subtle' },
      { label: 'S Button', width: 'full', appearance: 'subtle' },
    ],
  },
  {
    heading: 'Subtle Button(Size = lg)',
    btnsArr: [
      { label: 'S Button', width: 'intrinsic', size: 'lg', appearance: 'subtle' },
      { label: 'S Button', width: 'intrinsic', iconOnly: true, size: 'lg', appearance: 'subtle' },
      { label: 'S Button', width: 'full', size: 'lg', appearance: 'subtle' },
    ],
  },
];
