import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from '../../client/lib/Auth0ProviderWithNavigate';

export const RootLayout = () => {
  return (
    <Auth0ProviderWithNavigate>
      <Outlet />
    </Auth0ProviderWithNavigate>
  );
};
