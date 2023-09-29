import { createContext, useContext, FC, PropsWithChildren } from 'react';
import { MMKV } from 'react-native-mmkv';

const StorageContext = createContext<MMKV | null>(null);

interface StorageProviderProps extends PropsWithChildren {
  storage: MMKV;
}

const StorageProvider: FC<StorageProviderProps> = ({ children, storage }) => (
  <StorageContext.Provider value={storage}>{children}</StorageContext.Provider>
);

export const useStorage: () => MMKV | null = () => useContext<MMKV | null>(StorageContext);

export default StorageProvider;
