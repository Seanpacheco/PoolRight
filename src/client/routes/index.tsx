import * as React from 'react';
import { AuthenticationGuard } from '../utils/AuthenticationGuard';
import { RootLayout, SignInLayout, CallbackLayout, DashboardLayout } from '../components/Layout';
// import { useAuth } from "@/lib/auth";

// import { protectedRoutes } from "./protected";
// import { publicRoutes } from "./public";

export const AppRoutes =
  // const auth = useAuth();
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <SignInLayout /> },
        { path: 'callback', element: <CallbackLayout /> },
        { path: 'dashboard', element: <AuthenticationGuard component={DashboardLayout} />, children: [] },
      ],
    },
  ];
