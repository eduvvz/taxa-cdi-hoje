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
        <title>Taxa CDI hoje</title>
        <meta
          name="Taxa CDI"
          content="Telemedicina e medicina diagnóstica e acessível"
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <WarnCookies />
      </ThemeProvider>
    </>
  );
}

export default App;
