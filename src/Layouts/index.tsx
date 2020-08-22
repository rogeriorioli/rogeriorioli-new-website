import React from 'react';
import Header from '../Components/Header';

import rogerio from '../assets/images/rogerio.jpg'

import Global from  '../GlobalStyles'

const Layouts: React.FC = ({children}) => {
  return(
    <>
      <Header logo="Rogerio Orioli">
        <img src={rogerio} srcSet={rogerio} alt="Rogerio Orioli" loading="lazy"/>
      </Header>
      {children}
      <Global/>  
    </>
  );
}

export default Layouts;