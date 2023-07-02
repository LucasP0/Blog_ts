import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';
import { Blog } from '../pages/blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: Home(),
  },
  {
    path: '/blog/:id',
    element: Blog(),
  },
]);
