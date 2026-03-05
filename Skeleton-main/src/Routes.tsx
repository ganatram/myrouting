import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { Header } from './Header';

const myRouterTree = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
  {
    path: 'products', // tracks the BrowserURL state
    element: <ProductsPage />, // serves the corresponding component
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />; // routing placeholder
}
