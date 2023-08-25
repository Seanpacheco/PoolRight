import * as React from 'react';
import { AuthenticationGuard } from '../utils/AuthenticationGuard';
import SignInLayout from '../../components/Layout/SignInLayout';
import { RootLayout } from '../../components/Layout/RootLayout';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import CallbackLayout from '../../components/Layout/CallbackLayout';
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
