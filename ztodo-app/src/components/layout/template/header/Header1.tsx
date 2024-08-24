import { useState } from "react";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

type Props = {}

const pages = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Contact' },
];

export default function Header2({ }: Props) {
  const [anchorElementNav, setAnchorElementNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElementNav(e.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElementNav(null);
  }
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge='start'
            onClick={handleOpenNavMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            open={Boolean(anchorElementNav)}
            onClose={handleCloseNavMenu}
            keepMounted
            anchorEl={anchorElementNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            {pages && pages.map((page: any) =>
              <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                <Typography>{page.name}</Typography>
              </MenuItem>
            )}
          </Menu>

          <Typography
            variant="h5"
            sx={{
              display: { xs: 'none', sm: 'flex' }
            }}
          >
            Default AppBar
          </Typography>

        </Toolbar>
      </AppBar>
    </>
  )
}