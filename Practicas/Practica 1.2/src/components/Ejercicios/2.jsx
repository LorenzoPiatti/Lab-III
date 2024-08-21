import React from 'react';
import beers from '../listaBeers/Beers';

const AvailableBeers = () => {
    const availableBeers = beers.filter(beer => beer.available);

    return (
        <div>
        <h1>2. Cervezas Disponibles</h1>
        <ul>
            {availableBeers.map(beer => (
            <li key={beer.id}>
                {beer.beerName}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default AvailableBeers;