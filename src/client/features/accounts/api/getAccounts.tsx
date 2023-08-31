import axios from 'axios';
import { useAuth0, Auth0ContextInterface, User } from '@auth0/auth0-react';

import { Account } from '../types';

import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

export const getAccounts = async (auth: Auth0ContextInterface<User>) => {
  const token = await auth.getAccessTokenSilently();
  const response = await axios.get('/api/v1/accounts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
