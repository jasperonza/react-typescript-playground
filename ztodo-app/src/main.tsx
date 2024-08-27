import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './components/contexts/UserContext.tsx';
import { TodoContextProvider } from './components/contexts/TodoContext.tsx';
import App from './App.tsx';
import LoginPage from './components/pages/LoginPage.tsx';
import HomePage from './components/pages/HomePage.tsx';
import TodoPage from './components/pages/TodoPage.tsx';
import ProtectedRoute from './components/middleware/ProtectedRoute.tsx';
import NotFoundPage from './components/pages/NotFoundPage.tsx';
import { ToastContainer } from 'react-toastify';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        element: <ProtectedRoute element={<Outlet />} />,
        children: [
          {
            path: 'home',
            element: <HomePage />
          },
          {
            path: 'todo',
            element: <TodoPage />
          },
        ]
      },
    ]
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
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
