import watchList from "../movies/movies";

const returnMovieTitle = (watchlist) => {
  return watchList
    .filter(movie => movie.Director === 'Christopher Nolan' && parseFloat(movie.imdbRating) > 8.0)
    .map(movie => movie.Title);
}

const titlesArray = returnMovieTitle(watchList);
console.log(titlesArray);

export default returnMovieTitle;