import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '../../providers/appProvider';

export const RootLayout = () => {
  return (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );
};
