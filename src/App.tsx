import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Config from 'react-native-config';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';
import { NavigationContainer } from '@react-navigation/native';

import StorageProvider from '@/contexts/Storage';
import ThemeProvider from '@/contexts/Theme';
import { createQueryClient } from '@/utils/queryClient';
import RootNavigator from '@/navigation/RootNavigator';

const { STORAGE_ID = '', STORAGE_ENCRYPTION_KEY = '' } = Config;

const storage = new MMKV({ id: STORAGE_ID, encryptionKey: STORAGE_ENCRYPTION_KEY });
const queryClient = createQueryClient(storage);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const App: FC = () => (
  <GestureHandlerRootView style={styles.root}>
    <SafeAreaProvider>
      <NavigationContainer>
        <StorageProvider storage={storage}>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <BottomSheetModalProvider>
                <RootNavigator />
              </BottomSheetModalProvider>
            </QueryClientProvider>
          </ThemeProvider>
        </StorageProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default App;
