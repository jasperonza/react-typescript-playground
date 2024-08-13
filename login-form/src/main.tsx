import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './components/context/UserContext.tsx';
import App from './App.tsx';
import HomePage from './components/pages/HomePage.tsx';
import NotFoundPage from './components/pages/NotFoundPage.tsx';
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
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)
