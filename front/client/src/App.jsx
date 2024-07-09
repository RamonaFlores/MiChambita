import React from "react";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
//
const router = createBrowserRouter([
  { //path es la url de la pagina
    path:'/',
    //element es lo que nos muestra la pagina
    element: <h1>home</h1>,

  },
  { path:'/about',

    element: (
      <div>
        <h1>about page</h1>
      </div>
    ),
  }
]);
const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
