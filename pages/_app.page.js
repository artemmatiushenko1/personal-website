import { Provider } from 'react-redux';
import SimpleReactLightbox from 'simple-react-lightbox';
import ThemeConfig from '../src/theme/index';
import Layout from '../src/components/layout';
import { store } from 'src/redux/store';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Artem Matiushenko</title>
        <meta
          name="description"
          content="Artem Matiushenko (ARTEMKO) - art photographer from Ukraine. Portfolio website 🌻"
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, art, portfolio, artist, Matiushenko, photo"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="author" content="Artem Matiushenko" />
      </Head>
      <Provider store={store}>
        <ThemeConfig>
          <SimpleReactLightbox>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SimpleReactLightbox>
        </ThemeConfig>
      </Provider>
    </>
  );
};

export default App;
