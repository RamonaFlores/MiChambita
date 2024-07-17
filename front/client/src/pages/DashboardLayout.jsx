import React, { createContext,useContext,useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import {FaHome} from 'react-icons/fa'

const DashboardContext=createContext()
export const DashboardLayout = () => {
  //Esto es temporal , despues sera cambiado cuando el back este completo

  const user = {name: 'john'}
  //showSidebar es el stateValue.
  //setShowSidebar es el metodo usado para cambiar showSideBar
  //useState es un HOOK de react
  //tiene como funcion manejar el estado de un componente funcional
  //En este caso la Sidebar

  const [showSidebar,setShowSidebar]= useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () =>{
    console.log('toggle dark theme');
  }
  const toggleSidebar = () =>{
    setShowSidebar(!showSidebar);
  }
  //Aqui se usa una funcion flecha asincronica
  // Las funciones asincronicas indican que la funcion 
  //puede tener codigo asincrono y que devolvera una promesa

  //Dentro de estas funciones se usa la palabra clave 'await'
  //para esperar a que se resuelvan dichas promesas.
  const logoutUser = async () => {
    console.log('logout user');
};
  return (
    <DashboardContext.Provider value={{user
    ,showSidebar
    ,isDarkTheme,
    toggleDarkTheme,
    toggleSidebar,
    logoutUser,
    }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar/>
          <BigSidebar/>
          <div>
            <Navbar/>
            <div className='dashboard-page'>
              <Outlet/>
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext =() => useContext(DashboardContext);
export default DashboardLayout