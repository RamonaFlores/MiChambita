import React from 'react'
import {Link} from 'react-router-dom';
import {FormRow, Logo} from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
export const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>login </h4>
        <FormRow type = 'email' name = 'email' 
        defaultValue='john@gmail.com'/>
        <FormRow type = 'password' name = 'password' 
        defaultValue='secret123'/>
      
      <button type='submit' className='btn btn-block'>
        submit
      </button>
      <button type='button' className='btn btn-block'>
        explore the app
      </button>
      <p>
          ¿Aún no estás registrado?
           <Link to= '/register' className ='member-btn'>
              Regístrate
          </Link>
        </p>
      </form>
    </Wrapper>
    
  )
}
export default Login;