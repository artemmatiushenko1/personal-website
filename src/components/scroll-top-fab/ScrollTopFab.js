import * as S from './ScrollTopFab.style';
import { useEffect, useState } from 'react';

const PAGE_OFFSET = 20;

const Fab = () => {
  const [ableScrollTop, setAbleScrollTop] = useState(false);

  const onScrollHandler = () => {
    if (
      document.body.scrollTop > PAGE_OFFSET ||
      document.documentElement.scrollTop > PAGE_OFFSET
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
      <S.Box onClick={scrollToTop} className={!ableScrollTop ? 'hidden' : null}>
        <S.ArrowIcon />
      </S.Box>
    </>
  );
};

export default Fab;
