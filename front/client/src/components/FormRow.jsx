//La razon de ser de este componente es que el codigo se vuelve mas
//legible si lo hacemos asi
//en vez de poner todos los atributos por cada uno
//basicamente aqui estariamos creando un objeto y pasando los props
//para la construccion del row yupi

import React from 'react'

const FormRow = ({type,name,labelText,defaultValue}) => {
  return (
    <div className="form-row">
    <label htmlFor= {name } className='form-label'>
        {labelText || name}
    </label>
    <input 
    type = {type} 
      id= 'name' 
      name='name' 
      className='form-input' 
      defaultValue={defaultValue || ''}
      required
    />

  </div>
  );
};

export default FormRow