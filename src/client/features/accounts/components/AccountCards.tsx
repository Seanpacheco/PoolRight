import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItemButton } from '@mui/material';

export default function AccountCard(props: {
  title: string;
  address: string;
  currentDistance: string;
  id: number;
  index: number;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Card sx={{ width: '100%', my: 1 }}>
      <ListItemButton
        sx={{ width: '100%' }}
        selected={props.selectedIndex === props.index}
        onClick={() => props.setSelectedIndex(props.index)}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </ListItemButton>
    </Card>
  );
}
