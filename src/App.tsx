import React from 'react';

import Routes from './Routes';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-71468228-1');

ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Routes/>
  );
}

export default App;
