import { Intro } from 'components/intro';
import { About } from 'components/about';
import Head from 'next/head';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
