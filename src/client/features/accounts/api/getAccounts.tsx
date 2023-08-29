import axios from 'axios';

import { Account } from '../types';

import { ExtractFnReturnType, QueryConfig } from '../../../lib/react-query';

export const getAccounts = async () => {
  const response = await axios.get('/api/v1/accounts');
  return response.data;
};
