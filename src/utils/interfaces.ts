import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import mainTheme from '@/theme/theme';

export interface CreateStylesFnArgs {
  theme: typeof mainTheme;
  insets: EdgeInsets;
}

export type CreateStylesFn = (args: CreateStylesFnArgs) => ReturnType<typeof StyleSheet.create>;
