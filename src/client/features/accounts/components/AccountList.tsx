import * as React from 'react';
import Box from '@mui/material/Box';
import { List } from '@mui/material';
import AccountSearch from './AccountSearch';
import { testAccounts } from '../../../test/testData';
import AccountCard from './AccountCards';

export default function AccountList() {
  const [data, setData] = React.useState(testAccounts);
  const [filteredList, setFilteredList] = React.useState(data);
  const [searchInput, setSearchInput] = React.useState('');

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0.1);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredList(filteredData);
    } else {
      setFilteredList(data);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mx: 5 }}>
      <AccountSearch searchItems={searchItems} />
      <List>
        {searchInput.length > 1
          ? filteredList.map((item, index) => {
              return (
                <AccountCard
                  title={item.name}
                  address={item.address}
                  currentDistance={'1 mile'}
                  key={item.id}
                  id={item.id}
                  index={index}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              );
            })
          : data.map((item, index) => {
              return (
                <AccountCard
                  title={item.name}
                  address={item.address}
                  currentDistance={'1 mile'}
                  key={item.id}
                  id={item.id}
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
