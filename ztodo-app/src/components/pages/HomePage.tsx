import AppLayout from "../layout/AppLayout";
import { Box } from "@mui/material";
import UserTodoList from "../user/components/UserTodoList";

export default function HomePage() {

  return (
    <>
      <AppLayout>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, p: 2 }}>
          <Box width={{ sm: '50%', xs: 'auto' }} mx={'auto'}>
            <UserTodoList />
          </Box>
        </Box>

      </AppLayout>
    </>
  )
}