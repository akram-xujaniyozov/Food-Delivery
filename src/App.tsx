import React, { FC } from "react";
import { router, RouterProvider } from "./routes";

const App: FC = function () {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default App;
