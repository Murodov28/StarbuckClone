import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./Home";
const root = document.getElementById("root");
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Basket } from "./Pages/Basket";
import { ListProvider } from "./context/ListContext";
const router = createBrowserRouter([
  {
    path: "StarbuckClone/",
    element: <Home />,
  },
  {
    path: "StarbuckClone/Basket",
    element: <Basket />,
  },
]);
createRoot(root).render(
  <StrictMode>
    <ListProvider>
      <RouterProvider router={router} />
    </ListProvider>
  </StrictMode>
);
