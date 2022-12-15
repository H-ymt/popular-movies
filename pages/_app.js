import createEmotionCache from "../libs/createEmotionCache";
import PropTypes from "prop-types";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Global } from "@emotion/react";
import Layout from "../components/layouts/layout";
import { style } from "../styles/globals";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Global styles={style} />
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
