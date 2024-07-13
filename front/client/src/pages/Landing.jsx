import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from '../assets/images/main.svg'

import { Link } from "react-router-dom";
import { Logo } from "../components";
 
export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1> Rastrea tu <span> Chamba</span></h1>
          <p>
          Aquí puedes llevar el control de todas tus postulaciones de manera sencilla y divertida. Olvídate del caos de los correos y las notas dispersas, y mantente al tanto de tus entrevistas, ofertas y rechazos en un solo lugar.
          </p>
          <Link to= '/register' className="btn register-link">
            ¡Regístrate!
          </Link>
          <Link to= '/register' className="btn ">
              Login / Demostración
          </Link>
        </div>
        <img src={main} alt= 'perrito'className= 'img main-img' />
      </div>
    </Wrapper>
  );
};
// una forma tradicional de crear un componente estilizado
/*
const StyledBtn = styled.button`
  font-size:1.5rem;
  background: red;
  color: white;
`;
*/
//ejemplo 2
/*
const Wrapper = styled.div`
  background: red;
  h1 {
    color: white;
  }
  .content {
    background: blue;
    color: yellow;
  }
`;
*/
export default Landing;
