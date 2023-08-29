import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Auth0ProviderWithNavigate } from './Auth0ProviderWithNavigate';

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigate>{children}</Auth0ProviderWithNavigate>
    </QueryClientProvider>
  );
};
