import { toast } from "react-toastify";

type LoginCredentials = {
  username: string;
  password: string;
}

interface LoginResponse {
  id: number;
  email: string | any;
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  image: string;
  refreshToken?: string;
  token?: string;
  [key: string]: any; // To catch objects not defined
}

export async function useFetchLoginCredentials({ username, password }: LoginCredentials): Promise<LoginResponse | undefined> {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data: LoginResponse = await response.json();

    if (!response.ok) {
      toast.error(data.message || 'Login failed');
      return;
    }

    if (!data) {
      toast.error('No data received from the server.');
      return;
    }

    if (data.message) {
      toast.warn(data.message);
      return;
    }

    return data;
    
  } catch (error: any) {
    toast.error(`An error occurred: ${error.message}`);
    return;
  }
}