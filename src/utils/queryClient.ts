import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { MMKV } from 'react-native-mmkv';

export const createQueryClient = (storage: MMKV) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  const storagePersister = createSyncStoragePersister({
    storage: {
      getItem(key: string) {
        return storage.getString(key) || null;
      },
      setItem(key: string, value: string) {
        storage.set(key, value);
      },
      removeItem(key: string) {
        storage.delete(key);
      },
    },
  });

  persistQueryClient({
    queryClient,
    persister: storagePersister,
  });

  return queryClient;
};
