import { HomePage } from './pages/HomePage/HomePage';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
