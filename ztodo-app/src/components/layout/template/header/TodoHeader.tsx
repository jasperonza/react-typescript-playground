import { AppBar, Toolbar, Typography } from "@mui/material";

export default function TodoHeader() {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h5">
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}