import React from "react";
import {HomeLayout,Landing,Register,Login,DashboardLayout,EditJob} from './pages'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
//
const router = createBrowserRouter([
  { //path es la url de la pagina
    path:'/',
    //element es lo que nos muestra la pagina
    element: <HomeLayout/>,

  },
  { path:'/about',

    element: (
      <div>
        <h1>about page!</h1>
      </div>
    ),
  }
]);
const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
