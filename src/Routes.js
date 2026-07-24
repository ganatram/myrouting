import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProductsPage } from "./pages/ProductsPage";
import { App } from "./App";
import { ProductPage } from "./pages/ProductPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";

import { lazy, Suspense } from "react";

const lazyPage = lazy(() => import("./pages/Admin/AdminPage"));

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
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id", // shared Object {id:3}
        element: <ProductPage />,
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={<div> loading ... </div>}>
            <lazyPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouter} />; // routing placeholder
}
