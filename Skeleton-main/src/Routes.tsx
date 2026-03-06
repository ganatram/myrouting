import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/Errors';
import { HomePage } from './pages/HomePage';
import { lazy, Suspense } from 'react';

const AdminPage = lazy(() => import('./pages/AdminPage'));

const myRouterTree = createBrowserRouter([
  // main router tree
  {
    path: '/',
    element: <App />,
    // errorElement:<DefaultErrorElement/>,
    errorElement: <ErrorPage />,
    children: [
      // nested router tree - dynamic child that will be served in the template
      {
        index: true, // defines a unique home/index page component
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id', // router parameter object {id:2}
        element: <ProductPage />,
      },
      {
        path: 'admin',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />; // routing placeholder
}
