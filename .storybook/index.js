import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getStorybookUI } from '@storybook/react-native';

import ThemeProvider from '@/contexts/Theme';

import './storybook.requires';

const StorybookUIRoot = getStorybookUI({});

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const Storybook = (props) => (
  <GestureHandlerRootView style={styles.root}>
    <SafeAreaProvider>
      <ThemeProvider>
        <StorybookUIRoot {...props} />
      </ThemeProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default Storybook;
