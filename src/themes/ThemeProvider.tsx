import React, { FC, createContext, useContext } from 'react';
import { ThemeProvider as ThemeStyled } from 'styled-components/native';
import { AppTheme } from './styled';
import { theme } from './theme';

interface ThemeContext {
  appTheme: AppTheme;
}

interface ThemeProviderProps {
  children?: React.ReactNode;
}

interface ThemeProps {
  defaultTheme: typeof theme;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const themes: ThemeProps = {
    defaultTheme: theme,
  };

  const appTheme = {
    ...themes.defaultTheme,
  };

  return (
    <ThemeContext.Provider
      value={{
        appTheme,
      }}>
      <ThemeStyled theme={appTheme}>{children}</ThemeStyled>
    </ThemeContext.Provider>
  );
};

function useThemeContext(): ThemeContext {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext should be used with an ThemeProvider');
  }

  return context;
}

export { useThemeContext, ThemeProvider, ThemeContext };
