import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import UserSettings from "../../../user/components/UserSettings";

export default function TodoHeader() {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Box sx={{ flexGrow: '1' }}>
            <Typography variant="h5">
              Todo App
            </Typography>
          </Box>
          <UserSettings />
        </Toolbar>
      </AppBar>
    </>
  )
}