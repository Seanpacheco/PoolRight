import * as React from 'react';
import Box from '@mui/material/Box';
import { List } from '@mui/material';
import AccountSearch from './AccountSearch';
import AccountCard from './AccountCards';
import { useQuery } from '@tanstack/react-query';
import { getAccounts } from '../api/getAccounts';
import { Account } from '../types';
import { useAuth0 } from '@auth0/auth0-react';

export default function AccountList() {
  const auth = useAuth0();
  const { data: accounts, error, isLoading } = useQuery(['accounts'], () => getAccounts(auth));

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0.1);
  const [filteredList, setFilteredList] = React.useState(accounts?.data);
  const [searchInput, setSearchInput] = React.useState('');
  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = accounts?.data.filter((item: Account) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredList(filteredData);
    } else {
      setFilteredList(accounts?.data);
    }
  };

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <Box sx={{ flexGrow: 1, mx: 5 }}>
      <AccountSearch searchItems={searchItems} />
      <List>
        {searchInput.length > 1
          ? filteredList.map((account, index) => {
              return (
                <AccountCard
                  title={account.name}
                  address={account.address}
                  currentDistance={'1 mile'}
                  key={account.id}
                  id={account.id}
                  index={index}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              );
            })
          : accounts.data.map((account, index) => {
              return (
                <AccountCard
                  title={account.name}
                  address={account.address}
                  currentDistance={'1 mile'}
                  key={account.id}
                  id={account.id}
                  index={index}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              );
            })}
      </List>
    </Box>
  );
}
