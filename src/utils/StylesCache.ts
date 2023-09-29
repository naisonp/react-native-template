import { StyleSheet } from 'react-native';

import type { CreateStylesFnArgs, CreateStylesFn } from './interfaces';

class StylesCache {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private cache: Map<CreateStylesFn, StyleSheet.NamedStyles<any>>;

  constructor(private cacheKeys: CreateStylesFnArgs) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.cache = new Map<CreateStylesFn, StyleSheet.NamedStyles<any>>();
  }

  public createStyles(fn: CreateStylesFn, { theme, insets }: CreateStylesFnArgs) {
    const value = StyleSheet.create(fn({ theme, insets }));
    this.cache.set(fn, value);

    return value;
  }

  public getStyles(fn: CreateStylesFn, args: CreateStylesFnArgs) {
    this.invalidateCache(args);
    return this.cache.get(fn);
  }

  private invalidateCache({ theme, insets }: CreateStylesFnArgs) {
    // If something from cache keys changes cache needs to be invalidated
    if (this.cacheKeys.insets !== insets || this.cacheKeys.theme !== theme) {
      this.cacheKeys.insets = insets;
      this.cacheKeys.theme = theme;

      this.cache.clear();
    }
  }
}

export default StylesCache;
