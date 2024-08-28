import { useState } from 'react';
import { useLogin } from './hooks/useLogin';
import { Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, Paper, Typography } from '@mui/material';
import { Key, Person } from '@mui/icons-material';

type AuthCredentials = {
  username: string,
  password: string
}

export default function TodoLoginForm() {
  // Custom hook to handle login credential / data fetching
  const { login } = useLogin();

  // Username and password initial state
  const [authCredentials, setAuthCredentials] = useState<AuthCredentials>({
    username: '',
    password: ''
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthCredentials(prevState => ({
      ...prevState, [name]: value
    }));
  }

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(authCredentials.username, authCredentials.password);
  }

  return (
    <>
      <Box sx={{ py: 12 }}>
        <Container>
          <Paper elevation={2} sx={{ mx: 'auto', p: 4, width: 480 }}>
            <form onSubmit={handleSubmit}>

              <Typography variant={'h3'} sx={{ mb: 2 }}>Login</Typography>

              {/* Username */}
              <Box sx={{ mb: 2 }}>
                <FormControl variant='standard' fullWidth={true}>
                  <InputLabel htmlFor='username'>Username</InputLabel>
                  <Input
                    type='text'
                    name='username'
                    id='username'
                    value={authCredentials.username}
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete='false'
                    startAdornment={
                      <InputAdornment position='start'>
                        <Person />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              {/* Password */}
              <Box sx={{ mb: 2 }}>
                <FormControl variant='standard' fullWidth={true}>
                  <InputLabel htmlFor='password'>Password</InputLabel>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    value={authCredentials.password}
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position='start'>
                        <Key />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              {/* Login button */}
              <Box>
                <Button
                  type='submit'
                  variant='outlined'
                >
                  Sign In
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  )
}