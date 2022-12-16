import { useEffect } from "react";
import { css } from "@emotion/react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  // activeGenreが実行されるたびに実行
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div css={container}>
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
        css={button}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
        css={button}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
        css={button}
      >
        Action
      </button>
    </div>
  );
}

export default Filter;

const container = css`
  display: flex;
  gap: 8px;
`;

const button = css`
  min-width: 5rem;
  padding: 0.5rem 1rem;
  background: #fff;
  color: rgb(65, 98, 168);
  border-radius: 1rem;
  border: 1px solid rgb(28, 36, 53);
  font-weight: bold;
  cursor: pointer;
`;
