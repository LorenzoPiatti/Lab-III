import React from 'react';
import returnMovieTitle from './components/moviesFilter/MoviesFilter';
import watchList from './components/movies/movies';
import './app.css';

const App = () => {
    const titlesArray = returnMovieTitle(watchList);
  
    return (
      <div>
        <h1>Películas de Christopher Nolan con IMDb Rating mayor a 8.0</h1>
        <ul>
          {titlesArray.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    );
};

export default App;