import React from 'react'
import { Link } from 'react-router-dom';

export const Register = () => {
//<link to> redirecciona a la url que se escriba
//es una propiedad que te permite hacer que un elemento sea
//Hipervinculeable??
  return (
    <div>
      
      <h1>Login Page</h1>
      
      <Link to='/login'>Login Page</Link>
    </div>
  )
}
export default Register;