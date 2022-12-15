import React from "react";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Filter from "../components/Filter";

export default function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3ef2afb8283c3ca9fc7ebf671c275a4a&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div css={movies}>
        {filtered?.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
}

const movies = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  & img {
    border-radius: 1rem;
    /* margin-bottom: 1rem; */
  }
`;
