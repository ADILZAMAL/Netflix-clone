import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../style/Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ isLarge, title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLarge && "row__poster--large"}`}
            src={`${baseUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt="movie.name"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
