import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from 'components/layout';
import Head from 'next/head';
import ThemeConfig from 'theme/index';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeConfig>
        <SimpleReactLightbox>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SimpleReactLightbox>
      </ThemeConfig>
    </>
  );
};

export default App;
