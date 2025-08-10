import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Info } from './pages/Info/Info';
import { NotFound } from './pages/NotFound';
import { CollectionPage } from './pages/CollectionPage/CollectionPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/collection', element: <CollectionPage /> },
  { path: '/info', element: <Info /> },
  { path: '*', element: <NotFound /> },
]);

const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
