import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

export const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
      },
    });
  };

  return (
    <Button onClick={handleLogin} variant="contained" fullWidth size="large" color="primary" sx={{ mt: 3, mb: 2 }}>
      Log In
    </Button>
  );
};
