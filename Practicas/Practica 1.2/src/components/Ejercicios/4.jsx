import React from 'react';
import beers from '../listaBeers/Beers';

const BeerStyles = () => {
  const beerStyles = [...new Set(beers.map(beer => beer.beerStyle))];

  return (
    <div>
      <h1>4. Estilos de Cerveza</h1>
      <ul>
        {beerStyles.map((style, index) => (
          <li key={index}>{style}</li>
        ))}
      </ul>
    </div>
  );
};

export default BeerStyles;