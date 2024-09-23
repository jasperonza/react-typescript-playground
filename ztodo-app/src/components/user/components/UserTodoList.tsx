import { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useTodoQuery } from '../../todo/hooks/useTodoQuery';
import { Box, Typography, Paper, Divider, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, DialogContentText } from '@mui/material';

export default function UserTodoList() {
  // User data / context
  const { user } = useContext(UserContext);

  // User todos custom hook
  const { userTodos, isLoading, isError, error } = useTodoQuery();

  // Todo data
  const [todo, setTodo] = useState<string | any>(undefined);
  const [todoId, setTodoId] = useState<number | any>(undefined);

  // Toggle modify form initial state
  const [toggleForm, setToggleForm] = useState(false);

  // Toggle server response
  const [toggleResponse, setToggleResponse] = useState(false);

  // Show modify form
  const handleOpenForm = (id: number, todo: any | string) => {
    setToggleForm(true);
    setTodo(todo);
    setTodoId(id);
  }

  // Close modify form
  const handleCloseForm = () => {
    setToggleForm(false);
    setTodo(undefined);
    setTodoId(undefined);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTodo(value);
  }

  const [responseData, setResponseData] = useState<string[] | any>();
  const handleSubmit = async () => {
    setToggleResponse(true);

    const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completed: true,
        todo: `${todo}`,
      })
    });

    const data = await response.json();
    setResponseData(data);
  }

  const handleCloseResponse = () => {
    setToggleResponse(false);
    setTodo(undefined);
    setTodoId(undefined);
  }

  if (isLoading) {
    return <Typography>Loading...</Typography>
  }

  if (isError) {
    console.log(error);
  }

  if (!userTodos) {
    console.log('User todo(s) not found');
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Title */}
        <Box width={{ xs: 'auto', sm: 480 }} mt={4} mb={2}>
          <Typography variant="h5">{`${user.firstName} ${user.lastName}`} - Task(s)</Typography>
        </Box>

        {/* User todo list */}
        {userTodos.length > 0 && userTodos.map((userTodo: any, index: number) =>
          <Paper key={userTodo.id} elevation={4} sx={{ mb: 2, width: { xs: 240, sm: 'auto' } }}>
            <Box sx={{ p: 2 }}>
              <Typography>{index + 1}. {userTodo.todo}</Typography>
            </Box>

            <Divider />

            <Box sx={{ p: 2 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ sm: 2 }}>
                <Button onClick={() => handleOpenForm(userTodo.id, userTodo.todo)}>Modify</Button>

                <Divider orientation='vertical' variant='middle' flexItem />

                <Button color='error'>Delete</Button>

                <Divider orientation='vertical' variant='middle' flexItem />

                <Button color='success'>Complete</Button>
              </Stack>
            </Box>

            <Dialog
              open={toggleForm}
              onClose={handleCloseForm}
              PaperProps={{
                component: 'form',
                onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  handleCloseForm();
                }
              }}
              fullWidth
            >
              <DialogTitle>Modify task</DialogTitle>
              <DialogContent>
                <Box mb={2}>
                  <TextField
                    type='text'
                    name='todo'
                    id='todo'
                    label='Todo'
                    variant='standard'
                    autoComplete='off'
                    fullWidth
                    defaultValue={todo}
                    onChange={handleInputChange}
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseForm}>Cancel</Button>
                <Button type='submit' onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>

            {/* Server response */}
            < Dialog
              open={toggleResponse}
              onClose={handleCloseResponse}
            >
              <DialogTitle id="alert-dialog-title">
                Response from server
              </DialogTitle>
              <DialogContent>
                {responseData &&
                  <DialogContentText id="alert-dialog-description">
                    Task updated: {responseData.todo}
                  </DialogContentText>
                }
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseResponse}>Close</Button>
              </DialogActions>
            </Dialog >
          </Paper>
        )}


      </Box >
    </>
  )
}