import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProductsPage } from "./pages/ProductsPage";
import { Header } from "./Header";

const myRouter = createBrowserRouter([
  // RouterTree - array of route objects
  {
    path: "/", // tracks the BrowserUrl state
    element: <Header />, // renders a particular component
  },
  {
    path: "products", // tracks the BrowserUrl state
    element: <ProductsPage />, // renders a particular component
  },
]);

export function Routes() {
  return <RouterProvider router={myRouter} />; // routing placeholder
}
