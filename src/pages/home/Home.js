import { ScrollTopFab } from 'components/scroll-top-fab';
import { Intro } from 'components/intro';
import { About } from 'pages/about';
import { useEffect, useState } from 'react';

const Home = () => {
  const [ableScrollTop, setAbleScrollTop] = useState(false);

  const onScrollHandler = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setAbleScrollTop(true);
    } else {
      setAbleScrollTop(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    <>
      <Intro />
      <About />
      {ableScrollTop && <ScrollTopFab onClick={scrollToTop} />}
    </>
  );
};

export default Home;
