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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:image" content="/website-preview.png" />
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
