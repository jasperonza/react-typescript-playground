import { useState } from 'react';
import { useLogin } from './hooks/useLogin';
import AppInput from '../AppInput';
import AppButton from '../AppButton';
import AppCard from '../AppCard';

type AuthCredentials = {
  username: string,
  password: string
}

export default function LoginForm() {
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

    // Login form
    <AppCard>
      {/* Form field */}
      <form onSubmit={handleSubmit}>
        <h3>LoginForm</h3>

        {/* Username field*/}
        <div className='usernameWrapper'>
          <label htmlFor="username">Username</label>
          <AppInput type="text" name='username' id='username' placeholder='Username' onChange={handleChange} autoComplete='false' />
        </div>

        {/* Password field*/}
        <div className='passwordWrapper'>
          <label htmlFor="password">Password</label>
          <AppInput type="text" name='password' id='password' placeholder='Password' onChange={handleChange} />
        </div>

        {/* Login button */}
        <AppButton>login</AppButton>
      </form>
    </AppCard>
  )
}