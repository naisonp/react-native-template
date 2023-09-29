import { Meta, StoryObj } from '@storybook/react-native';

import Text, { TextProps } from './Text';

export default {
  title: 'components/Text',
  component: Text,
} as Meta<typeof Text>;

export const Basic: StoryObj<TextProps> = {
  args: {
    fontWeight: '400',
    children: 'Text',
  },
};
