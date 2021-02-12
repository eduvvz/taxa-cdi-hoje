import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { setConfiguration } from 'react-grid-system';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';
import WarnCookies from '../components/WarnCookies';

function App({ Component, pageProps }) {
  setConfiguration({ maxScreenClass: 'xl' });

  return (
    <>
      <Head>
        <title>Taxa CDI Hoje</title>
        <meta
          name="description"
          content="Descubra com a gente o quanto a taxa CDI está valendo hoje!"
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Navbar />
          <Component {...pageProps} />
          <WarnCookies />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
