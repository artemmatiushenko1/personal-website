import { ScrollTopFab } from 'components/scroll-top-fab';
import { Intro } from 'components/intro';
import { About } from 'pages/about';
import { useEffect, useState } from 'react';

const Home = () => {
  const [ableScrollUp, setAbleScrollUp] = useState(false);

  const onScrollHandler = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setAbleScrollUp(true);
    } else {
      setAbleScrollUp(false);
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
      {ableScrollUp && <ScrollTopFab onClick={scrollToTop} />}
    </>
  );
};

export default Home;
