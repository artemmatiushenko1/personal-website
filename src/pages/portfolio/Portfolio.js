import { useEffect } from 'react';
import * as S from './Portfolio.style';
import Container from 'components/container';
import { Spinner } from 'components/spinner';
import { SRLWrapper } from 'simple-react-lightbox';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from 'redux/slices/artworksSlice';
import { Photo } from 'components/photo';
import { artworksSelector, isLoadingSelector } from 'redux/selectors/artworks';

const SRLOptions = {
  caption: {
    showCaption: false,
  },
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
  },
};

const masonryGridBreakpoints = {
  default: 4,
  1100: 3,
  900: 2,
  500: 1,
};

const Portfolio = () => {
  const dispatch = useDispatch();
  const artworks = useSelector(artworksSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (artworks.length === 0) {
      dispatch(getArtworks());
    }
  }, [dispatch, artworks.length]);

  return (
    <S.Section>
      <Container>
        <SRLWrapper options={SRLOptions}>
          <S.MasonryGrid
            breakpointCols={masonryGridBreakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {artworks.map(({ imgUrl, id }) => {
              return <Photo key={id} src={imgUrl} alt={id} />;
            })}
          </S.MasonryGrid>
        </SRLWrapper>
        {isLoading && <Spinner />}
      </Container>
    </S.Section>
  );
};

export default Portfolio;
