import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import ThemeProvider from '../components/themeProvider';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  return (
    <CacheProvider value={emotionCache}>
      {/* default head for all pages */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="A simple job application tracker" />
        <title>Job Application Tracker</title>
      </Head>
      
      {/* 
        custom theme provider wraps material ui theme provider,
        baseline css defined by material ui and
        context provider to change app theme
      */}
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}