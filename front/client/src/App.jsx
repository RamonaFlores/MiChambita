import React from "react";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  EditJob,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//
const router = createBrowserRouter([
  {
    //path es la url de la pagina
    path: "/",
    //element es lo que nos muestra la pagina
    element: <HomeLayout />,
  },
  {
    path: "/register",

    element: <Register />,
  },
  {
    path: "/login",

    element: <Login />,
  },
  {
    path: "/dashboard",

    element: <DashboardLayout />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
