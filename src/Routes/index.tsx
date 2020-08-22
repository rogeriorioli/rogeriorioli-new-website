import React from 'react';
import {BrowserRouter , Route } from 'react-router-dom'
import Layouts from '../Layouts';
import Home from '../Pages/Home';


const Routes: React.FC = () => {
  return (
      <BrowserRouter>
        <Layouts>
          <Route to="/" exact component={Home} />
        </Layouts>
      </BrowserRouter>
  )
}

export default Routes;