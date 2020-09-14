import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "../style/Row.css";
import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};
function Row({ isLarge, title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return;
    }
    fetchData();
  }, [fetchUrl]);

  const handelClick = (movie) => {
    console.log(movie.original_name);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name || movie?.original_name || movie?.original_title || ""
      ).then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              handelClick(movie);
            }}
            className={`row__poster ${isLarge && "row__poster--large"}`}
            src={`${baseUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt="movie.name"
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
