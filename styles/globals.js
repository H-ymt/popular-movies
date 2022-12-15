import { css } from "@emotion/react";

export const style = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }

  h2 {
    font-size: 1rem;
  }

  button.active {
    background: rgb(65, 98, 168);
    color: #fff;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }

    body {
      color: white;
      background: black;
    }
  }
`;
