import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import Fourimage from '../assets/images/notFound.svg'
export const Error = () => {
  const error = useRouteError()
  console.log(error)
  if (error.status===404){
    return (
    <Wrapper>
      <div>
        <img src={Fourimage} alt = 'not found'/>
        <h3>Caray! Pagina no encontrada </h3>
        <p>No pudimos encontrar la página que estabas buscando</p>
        <Link to='/dashboard'>Vuelta al Inicio</Link>
      </div>
    </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3> Algo salió mal</h3>
      </div>

     
    </Wrapper>
  )
}
export default Error;
