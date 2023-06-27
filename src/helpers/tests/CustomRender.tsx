import '@testing-library/jest-native';
import React, { FC, ReactElement, PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from '~/themes';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement<unknown>, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
