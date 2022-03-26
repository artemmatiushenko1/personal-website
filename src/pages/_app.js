import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from 'components/layout';
import Head from 'next/head';
import ThemeConfig from 'theme/index';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeConfig>
        <SimpleReactLightbox>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
          </Layout>
        </SimpleReactLightbox>
      </ThemeConfig>
    </>
  );
};

export default App;
