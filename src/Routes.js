import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProductsPage } from "./pages/ProductsPage";
import { App } from "./App";

const myRouter = createBrowserRouter([
  // RouterTree (root level)
  {
    path: "/", // tracks the BrowserUrl state
    element: <App />, // renders a particular component
    children: [
      // RouterTree (nested level)
      {
        path: "products",
        element: <ProductsPage />,
      },
      {},
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouter} />; // routing placeholder
}
