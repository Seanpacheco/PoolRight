import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ComponentType } from 'react';

interface AuthenticationGuardProps {
  component: ComponentType;
}

export const AuthenticationGuard = ({ component }: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, { returnTo: '/dashboard' });

  return <Component />;
};
