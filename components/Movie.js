import { motion } from "framer-motion";

function Movie({ movie }) {
  return (
    <motion.div
      layout
      key={movie}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      css={movie}
    >
      <h2 css={{ fontWeight: "300" }}>{movie.title}</h2>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="" />
    </motion.div>
  );
}

export default Movie;
