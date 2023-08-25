import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ScienceIcon from '@mui/icons-material/Science';
import TimelineIcon from '@mui/icons-material/Timeline';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SettingsIcon from '@mui/icons-material/Settings';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ScienceIcon />
      </ListItemIcon>
      <ListItemText primary="Chem Logger" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <ListItemText primary="Chem History" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NoteAltIcon />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <WbSunnyIcon />
      </ListItemIcon>
      <ListItemText primary="Weather" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
