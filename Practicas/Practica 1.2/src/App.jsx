import React from 'react'
import './App.css'
import Beers from './components/Ejercicios/1';
import AvailableBeers from './components/Ejercicios/2';
import BeerCount from './components/Ejercicios/3';
import BeerStyles from './components/Ejercicios/4';

const App = () => {
  return (
    <div>
      <Beers />
      <AvailableBeers />
      <BeerCount />
      <BeerStyles />
    </div>
  );
};

export default App;