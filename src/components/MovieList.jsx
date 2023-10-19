import { useState, useEffect } from "react";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/movies/";
    const getList = async () => {
      const data = await fetch(url).then((response) => response.json());
      console.log("Movie list json??", data);
      setMovieList(data);
    };
    getList();
  }, []);
  return (
    <>
      <ul>
        {movieList?.map((movie, index) => {
          return (
            <>
              <li key={index}>{movie.title}</li>
              <li key={index}>Director: {movie.director}</li>
              <li key={index}>Lead Actor: {movie.lead_roll}</li>
              <li key={index}>Description: {movie.description}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};
