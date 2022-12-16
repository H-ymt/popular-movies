import { motion } from "framer-motion";
import { css } from "@emotion/react";
import Image from "next/image";

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
      <Image
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
        style={{ objectFit: "cover" }}
        width={500}
        height={180}
      />
    </motion.div>
  );
}

export default Movie;
