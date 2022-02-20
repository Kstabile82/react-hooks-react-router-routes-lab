import React from "react";
import { directors } from "../data";

function Directors() {
  let dir = directors.map(d => (
    <div key={d.name}>
      <h1>{d.name}</h1>
      <ul>{d.movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}</ul>
    </div>
  ))
  return (
  <div>
    <h1>Directors Page</h1>
      {dir}
      </div>
      );
}
export default Directors;
