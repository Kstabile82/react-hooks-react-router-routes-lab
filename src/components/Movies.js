import React from "react";
import { movies } from "../data";

function Movies() {
  let titles = movies.map(movie => (
    <div key={movie.title}>
     <h1>{movie.title}</h1>
     <p>Runtime: {movie.time} min.</p>
     <ul>
       {movie.genres.map((genre) => (
       <li key={genre}>{genre}</li> 
       ))}
     </ul>
    </div>
  ));

  return (
  <div>
    <h1>Movies Page</h1>
    {titles}
  </div>
  );
}
export default Movies;
