import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AccountSearch(props: { searchItems: (searchValue: string) => void }) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {' '}
      <TextField
        onChange={(e) => props.searchItems(e.target.value)}
        id="standard-search"
        label="Search"
        type="search"
        variant="standard"
        fullWidth={true}
      />
    </Box>
  );
}
