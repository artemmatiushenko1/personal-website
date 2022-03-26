import { Intro } from 'components/intro';
import { About } from 'components/about';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Artem Matiushenko | Art Photographer</title>
        <link rel="canonical" href="https://www.artem-matiushenko.com" />
        <meta
          name="description"
          content="Artem Matiushenko - art photographer from Ukraine also known as artemko. Photographer's portfolio 🌻"
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, artist, артем матюшенко, photo"
        />
        <meta property="og:title" content="Artem Matiushenko" />
        <meta
          property="og:description"
          content="Artem Matiushenko - art photographer from Ukraine also known as artemko. Photographer's portfolio 🌻"
        />

        <meta name="twitter:title" content="Artem Matiushenko" />
        <meta
          name="twitter:description"
          content="Artem Matiushenko - art photographer from Ukraine also known as artemko. Photographer's portfolio 🌻"
        />
        <meta name="twitter:url" content="https://www.artem-matiushenko.com" />
      </Head>
      <Intro />
      <About />
    </motion.div>
  );
};

export default Home;
