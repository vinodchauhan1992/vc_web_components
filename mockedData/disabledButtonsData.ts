import { ButtonData } from '@/types/buttonsPage';

export const buttonsArr: ButtonData[] = [
  {
    heading: 'Default Button(Size = xs)',
    btnsArr: [
      { label: 'Toggled off', disabled: true, width: 'intrinsic', size: 'xs' },
      { label: 'Toggled off', disabled: true, width: 'intrinsic', size: 'xs', iconOnly: true },
    ],
  },
  {
    heading: 'Default Button(Size = sm)',
    btnsArr: [
      { label: 'Toggled off', disabled: true, width: 'intrinsic', size: 'sm' },
      { label: 'Toggled off', disabled: true, width: 'intrinsic', size: 'sm', iconOnly: true },
      { label: 'Toggled off', disabled: true, width: 'full', size: 'sm' },
    ],
  },
  {
    heading: 'Default Button(Size = md)',
    btnsArr: [
      { label: 'Toggled off', disabled: true, width: 'intrinsic' },
      { label: 'Toggled off', disabled: true, width: 'intrinsic', iconOnly: true },
      { label: 'Toggled off', disabled: true, width: 'full' },
    ],
  },
  {
    heading: 'Default Button(Size = lg)',
    btnsArr: [
      { label: 'Toggled off', disabled: true, width: 'intrinsic', size: 'lg' },
      { label: 'Toggled off', disabled: true, width: 'intrinsic', iconOnly: true, size: 'lg' },
      { label: 'Toggled off', disabled: true, width: 'full', size: 'lg' },
    ],
  },
  {
    heading: 'Subtle Button(Size = xs)',
    btnsArr: [
      { label: 'Toggled off', disabled: true, width: 'intrinsic', size: 'xs', appearance: 'subtle' },
      {
        label: 'Toggled off',
        disabled: true,
        width: 'intrinsic',
        size: 'xs',
        iconOnly: true,
        appearance: 'subtle',
      },
    ],
  },
  {
    heading: 'Subtle Button(Size = sm)',
    btnsArr: [
      { label: 'Toggled off', disabled: true, width: 'intrinsic', size: 'sm', appearance: 'subtle' },
      {
        label: 'Toggled off',
        disabled: true,
        width: 'intrinsic',
        size: 'sm',
        iconOnly: true,
        appearance: 'subtle',
      },
      { label: 'Toggled off', disabled: true, width: 'full', size: 'sm', appearance: 'subtle' },
    ],
  },
  {
    heading: 'Subtle Button(Size = md)',
    btnsArr: [
      { label: 'Toggled off', disabled: true, width: 'intrinsic', appearance: 'subtle' },
      {
        label: 'Toggled off',
        disabled: true,
        width: 'intrinsic',
        iconOnly: true,
        appearance: 'subtle',
      },
      { label: 'Toggled off', disabled: true, width: 'full', appearance: 'subtle' },
    ],
  },
  {
    heading: 'Subtle Button(Size = lg)',
    btnsArr: [
      { label: 'Toggled off', disabled: true, width: 'intrinsic', size: 'lg', appearance: 'subtle' },
      {
        label: 'Toggled off',
        disabled: true,
        width: 'intrinsic',
        iconOnly: true,
        size: 'lg',
        appearance: 'subtle',
      },
      { label: 'Toggled off', disabled: true, width: 'full', size: 'lg', appearance: 'subtle' },
    ],
  },
];
