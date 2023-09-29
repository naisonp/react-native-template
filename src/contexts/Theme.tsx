import React, { PropsWithChildren, createContext } from 'react';
import theme from '@/theme/theme';

export const ThemeContext = createContext<typeof theme>(theme);

const ThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
