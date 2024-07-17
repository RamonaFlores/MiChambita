import React from 'react'
import {FormRow, Logo} from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Link } from 'react-router-dom';

export const Register = () => {
//<link to> redirecciona a la url que se escriba
//es una propiedad que te permite hacer que un elemento sea
//Hipervinculeable??
  return (
    <Wrapper>
      
      <form className='form'>
        <Logo/>
        <h4>Register </h4>
        <FormRow type ='text' name='name' defaultValue='john'/>
        <FormRow
         type ='text' 
        name='lastName' 
        labelText='last name' 
        defaultValue='smith'
        />
        <FormRow type ='text' name='location' 
        defaultValue='earth'/>
        <FormRow type ='email' name='email'
         defaultValue='john@gmail.com'/> 
        <FormRow type ='password' name='password
        ' defaultValue='secret123'/>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          ¿Ya estás registrado?
           <Link to= '/login' className ='member-btn'>
              Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register;