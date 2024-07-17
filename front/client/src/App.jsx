import React from "react";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin
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
        children: [
          {
            index:true,
            element:<AddJob/>

          },
          {
            path: 'all-jobs',
            element:<AllJobs/>
          },
          {
            path: 'profile',
            element:<Profile/>
          },
          {
            path: 'admin',
            element:<Admin/>
          },
          
        ]
      }

    ]
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
