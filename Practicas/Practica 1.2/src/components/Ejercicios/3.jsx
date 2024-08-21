import React from 'react';
import beers from '../listaBeers/Beers';

const BeerCount = () => {
  const redBeersCount = beers.filter(beer => beer.beerStyle === 'Red').length;
  const ipaBeersCount = beers.filter(beer => beer.beerStyle === 'IPA').length;

  return (
    <div>
      <h1>3. Conteo de Cervezas</h1>
      <p>Estilo Red: {redBeersCount}</p>
      <p>Estilo IPA: {ipaBeersCount}</p>
    </div>
  );
};

export default BeerCount;