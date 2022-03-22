import { Intro } from 'components/intro';
import { About } from 'components/about';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Artem Matiushenko - art photographer from Ukraine also known as artemko. Photographer's portfolio 🌻"
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, artist, артем матюшенко, photo"
        />
        <meta name="author" content="Artem Matiushenko" />
        <meta property="og:title" content="Artem Matiushenko" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Artem Matiushenko - art photographer from Ukraine also known as artemko. Photographer's portfolio 🌻"
        />

        <meta name="twitter:title" content="Artem Matiushenko" />
        <meta
          name="twitter:description"
          content="Artem Matiushenko - art photographer from Ukraine also known as artemko. Photographer's portfolio 🌻"
        />
        <title>Artem Matiushenko</title>
      </Head>
      <Intro />
      <About />
    </>
  );
};

export default Home;
