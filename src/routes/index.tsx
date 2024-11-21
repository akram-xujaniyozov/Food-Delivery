import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, CartPage, NotFound } from "../pages";
import DashBoard from "../layouts/Dashboard";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <DashBoard />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export { router, RouterProvider };
