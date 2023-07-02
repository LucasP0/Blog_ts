import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<RouterProvider router={router} />);
