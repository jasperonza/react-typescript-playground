import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './components/contexts/UserContext.tsx';
import App from './App.tsx';
import HomePage from './components/pages/HomePage.tsx';
import NotFoundPage from './components/pages/NotFoundPage.tsx';
import './index.css';
import TodoPage from './components/pages/TodoPage.tsx';
import { TodoContextProvider } from './components/contexts/TodoContext.tsx';
import { ToastContainer } from 'react-toastify';

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
    path: '/todo',
    element: <TodoPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <UserContextProvider>
      <TodoContextProvider>
        <RouterProvider router={router} />
      </TodoContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
