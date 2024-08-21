import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './components/contexts/UserContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import LoginPage from './components/pages/LoginPage.tsx';
import HomePage from './components/pages/HomePage.tsx';
import NotFoundPage from './components/pages/NotFoundPage.tsx';
import { ToastContainer } from 'react-toastify';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ToastContainer /> 
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
