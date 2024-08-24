import { useState } from "react";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

type Props = {}

const pages = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Contact' },
];

export default function Header2({ }: Props) {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setToggleDrawer((prevState) => !prevState);
  }

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="div"
            variant="h5"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Default AppBar
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages && pages.map((page: any) =>
              <Button key={page.id}>{page.name}</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          anchor="left"
          open={toggleDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: false }}
        >
          <Box onClick={handleDrawerToggle}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ my: 2 }}>
                Menu
              </Typography>
            </Box>
            <Divider />

            <List>
              {pages && pages.map((page: any) =>
                <ListItem key={page.id}>
                  <ListItemButton>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Box>
        </Drawer>
      </nav >
    </>
  )
}