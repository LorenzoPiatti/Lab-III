import React from "react";
import beers from "../listaBeers/Beers";

const Beers = () => {
    const conversionPesosArg = 1355;
    
    const beersInPesos = beers.map(beer => ({...beer, priceInPesos: beer.price * conversionPesosArg}));
  
    return (
      <div>
        <h1>1. Lista de Cervezas</h1>
        <ul>
          {beersInPesos.map(beer => (
            <li key={beer.id}>
              {beer.beerName} - {beer.beerStyle} - ${beer.priceInPesos} ARS
            </li>
          ))}
        </ul>
      </div>
    );
};
  
export default Beers;