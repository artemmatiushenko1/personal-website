import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from '@firebase/storage';
import { storage } from '../../firebase/config';
import * as S from './Portfolio.style';
import Container from 'components/container';
import { Spinner } from 'components/spinner';
import { SRLWrapper } from 'simple-react-lightbox';
import LazyLoad from 'react-lazyload';

const Photo = ({ src, alt }) => {
  return (
    <S.ImgContainer>
      <LazyLoad height={350} once offset={100}>
        <img src={src} alt={alt} />
      </LazyLoad>
    </S.ImgContainer>
  );
};

const Portfolio = () => {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    900: 2,
    500: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const listRef = ref(storage, 'art');
      const res = await listAll(listRef);
      const paths = await Promise.all(
        res.items.map(async (item) => await getDownloadURL(item))
      );
      setUrls(paths);
      setIsLoading(false);
      console.log(paths);
    };

    fetchData();
  }, []);

  return (
    <S.Section>
      <Container>
        <SRLWrapper>
          <S.MasonryGrid
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {urls.map((url, i) => {
              return <Photo src={url} alt={i} />;
            })}
          </S.MasonryGrid>
        </SRLWrapper>
        {isLoading && <Spinner />}
      </Container>
    </S.Section>
  );
};

export default Portfolio;
