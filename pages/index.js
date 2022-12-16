import React from "react";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Filter from "../components/Filter";
import { motion, AnimatePresence } from "framer-motion";

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
      <h2 css={{ fontSize: "24px" }}>Choose Category</h2>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout css={movies}>
        <AnimatePresence>
          {filtered?.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

const movies = css`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  & img {
    min-width: 220px;
    border-radius: 1rem;
  }
`;
