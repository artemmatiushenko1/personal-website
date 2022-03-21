import { Provider } from 'react-redux';
import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from 'components/layout';
import { store } from 'src/redux/store';
import Head from 'next/head';
import ThemeConfig from 'theme/index';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
