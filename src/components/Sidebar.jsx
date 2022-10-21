// MUI
import { ModeNight } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import NoteIcon from '@mui/icons-material/Note';

import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Icon, IconButton, Switch } from "@mui/material";

// React Router
import { useNavigate } from "react-router-dom";

const Sidebar = ({ mode, setMode }) => {
  const navigate = useNavigate();

  const menuIconsLabelsList = [
    { icon: <WorkIcon />, label: 'Workbook', route: '/' },
    { icon: <NoteIcon />, label: 'Notebook', route: '/note' }
  ];

  const mobileMenu = menuIconsLabelsList.map((menuIcon, index) => 
    <ListItem disablePadding key={index}>
      <IconButton onClick={() => navigate(menuIcon.route)} sx={{ display: { xs: 'block' }, marginLeft: "auto", marginRight: "auto" }}>
        <Icon>
          {menuIcon.icon}
        </Icon>
      </IconButton>
    </ListItem>
  );

  const mainMenu = menuIconsLabelsList.map((menuIcon, index) =>
    <ListItem disablePadding key={index}>
      <ListItemButton onClick={() => navigate(menuIcon.route)}>
        <ListItemIcon>
          {menuIcon.icon}
        </ListItemIcon>
        <ListItemText primary={menuIcon.label} />
      </ListItemButton>
    </ListItem>
  );

  return(
    <>
      <Box p={1} sx={{ display: { xs: "block", sm: "none" } }}>
        <Box position="fixed">
          <List>
            {mobileMenu}
            <ListItem disablePadding>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            {mainMenu}
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;