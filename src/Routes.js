import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProductsPage } from "./pages/ProductsPage";
import { App } from "./App";
import { ProductPage } from "./pages/ProductPage";
import { ErrorPage } from "./pages/ErrorPage";

const myRouter = createBrowserRouter([
  // RouterTree (root level)
  {
    path: "/", // tracks the BrowserUrl state
    element: <App />, // renders a particular component
    //  errorElement: <DefaultErrorComponent />,
    errorElement: <ErrorPage />,
    children: [
      // RouterTree (nested level)
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id", // shared Object {id:5}
        element: <ProductPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouter} />; // routing placeholder
}
