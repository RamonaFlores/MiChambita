import React from "react";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//
const router = createBrowserRouter([
  {
    //path es la url de la pagina
    path: "/",
    //element es lo que nos muestra la pagina
    element: <HomeLayout />,
    
    errorElement: <Error/>,
    //aqui se ponen las rutas hijas de esta ruta principal
    //o sea quedaria /register y tal. ya que nuestra
    //ruta papa es '/' ,
    children: [
      {index: true,
        element: <Landing/>,
      },
      {
        //como son rutas relativas pues, no hay necesidad de
        //tener el '/' al inicio
        path: "register",
    
        element: <Register />,
      },
      {
        path: "login",
    
        element: <Login />,
      },
      {
        path: "dashboard",
    
        element: <DashboardLayout />,
      }

    ]
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
