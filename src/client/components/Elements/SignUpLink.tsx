import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

export const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
      },
      authorizationParams: {
        screen_hint: 'sign up',
      },
    });
  };

  return (
    <Button onClick={handleSignUp} variant="contained" fullWidth size="large" color="secondary">
      Sign Up
    </Button>
  );
};
