import { useEffect } from 'react';
import * as S from './Portfolio.style';
import Container from 'components/container';
import { Spinner } from 'components/spinner';
import { SRLWrapper } from 'simple-react-lightbox';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from 'redux/slices/artworksSlice';
import { Photo } from 'components/photo';
import { artworksSelector, isLoadingSelector } from 'redux/selectors/artworks';
import { ReactComponent as RestoreIcon } from 'assets/icons/icon-restore.svg';
import { Select } from 'components/select';

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
};

const categoriesOptions = [
  { value: 'art', label: 'art' },
  { value: 'portrait', label: 'portrait' },
  { value: 'nature', label: 'nature' },
  { value: 'food', label: 'food' },
];

const yearOptions = [
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
];

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
          <S.SelectsWrapper>
            <Select options={yearOptions} placeholder="Year" />
            <Select options={categoriesOptions} placeholder="Type" />
            <S.ButtonResetFilter>
              <RestoreIcon />
            </S.ButtonResetFilter>
          </S.SelectsWrapper>
          <S.MasonryGrid
            breakpointCols={masonryGridBreakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {artworks.map(({ imgUrl, id, year }) => {
              return <Photo key={id} src={imgUrl} alt={id} year={year} />;
            })}
          </S.MasonryGrid>
        </SRLWrapper>
        {isLoading && (
          <S.SpinnerOverlay>
            <Spinner />
          </S.SpinnerOverlay>
        )}
      </Container>
    </S.Section>
  );
};

export default Portfolio;
