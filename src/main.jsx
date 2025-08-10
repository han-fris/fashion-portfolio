import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '*', element: <NotFound /> },
]);

const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
