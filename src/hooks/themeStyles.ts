import { useContext, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeContext } from '@/contexts/Theme';
import mainTheme from '@/theme/theme';
import StylesCache from '@/utils/StylesCache';
import type { CreateStylesFn } from '@/utils/interfaces';

const cache = new StylesCache({
  insets: { bottom: 0, left: 0, right: 0, top: 0 },
  theme: mainTheme,
});

export const useThemeStyles = (createStyles: CreateStylesFn) => {
  const theme = useContext(ThemeContext);
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => {
    const cachedStyles = cache.getStyles(createStyles, { theme, insets });
    if (cachedStyles) {
      return cachedStyles;
    }

    return cache.createStyles(createStyles, { theme, insets });
  }, [insets, createStyles, theme]);

  return styles;
};
