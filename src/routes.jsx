import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./errorPage";
import { Layout } from "./layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <div>About Page</div>,
      },
      {
        path: "/login",
        element: <div>Login Page</div>,
      },
      {
        path: "/help",
        element: <div>Help Page</div>,
      },
    ],
  },
]);
