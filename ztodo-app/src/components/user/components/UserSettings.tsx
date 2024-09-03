import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useLogout } from '../../hooks/useLogout';
import { Avatar, Box, Divider, IconButton, Link, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

export default function UserSettings() {
  // User data / context
  const { user } = useContext(UserContext);

  // Logout custom hook
  const { logout } = useLogout();

  // Settings initial state
  const [settings, setSettings] = useState<HTMLElement | null | any>(null);

  // Open user setting(s)
  const handleOpenSettings = (e: React.MouseEvent<HTMLElement>) => {
    setSettings(e.currentTarget);
  }

  // Close user setting(s)
  const handleCloseSettings = () => {
    setSettings(null);
  }

  return (
    <>
      {/* User setting(s) */}
      {user &&
        <Box>
          {/* Tooltip */}
          <Tooltip title='Settings'>
            <IconButton onClick={handleOpenSettings} sx={{ p: 0 }}>
              <Avatar alt="User image" src={user?.image} />
            </IconButton>
          </Tooltip>

          {/* Setting(s) menu */}
          <Menu
            anchorEl={settings}
            open={Boolean(settings)}
            onClose={handleCloseSettings}
            id='appbar-settings'
            keepMounted={false}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            sx={{ mt: '45px' }}
          >
            {/* Setting(s) menu item(s) */}
            <MenuItem key='user' onClick={handleCloseSettings}>
              <Typography sx={{ textAlign: 'center' }}>{user.firstName} {user.lastName}</Typography>
            </MenuItem>

            <Divider />

            <MenuItem key='logout' onClick={handleCloseSettings}>
              <Link component='button' underline='none' onClick={logout}>Logout</Link>
            </MenuItem>

          </Menu>
        </Box>
      }
    </>
  )
}