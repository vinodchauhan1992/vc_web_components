import { ButtonData } from '@/types/buttonsPage';

export const saButtonsArr: ButtonData[] = [
  {
    heading: 'Subtle Button(Size = xs)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'xs', appearance: 'subtle' },
      { label: 'Toggle me', width: 'intrinsic', size: 'xs', iconOnly: true, appearance: 'subtle' },
    ],
  },
  {
    heading: 'Subtle Button(Size = sm)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'sm', appearance: 'subtle' },
      { label: 'Toggle me', width: 'intrinsic', size: 'sm', iconOnly: true, appearance: 'subtle' },
      { label: 'Toggle me', width: 'full', size: 'sm', appearance: 'subtle' },
    ],
  },
  {
    heading: 'Subtle Button(Size = md)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', appearance: 'subtle' },
      { label: 'Toggle me', width: 'intrinsic', iconOnly: true, appearance: 'subtle' },
      { label: 'Toggle me', width: 'full', appearance: 'subtle' },
    ],
  },
  {
    heading: 'Subtle Button(Size = lg)',
    btnsArr: [
      { label: 'Toggle me', width: 'intrinsic', size: 'lg', appearance: 'subtle' },
      { label: 'Toggle me', width: 'intrinsic', iconOnly: true, size: 'lg', appearance: 'subtle' },
      { label: 'Toggle me', width: 'full', size: 'lg', appearance: 'subtle' },
    ],
  },
];
