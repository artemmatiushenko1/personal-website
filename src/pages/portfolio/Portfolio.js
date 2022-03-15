import { useEffect, useState } from 'react';
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

const filterArtworks = ({ year, category }, artworks) => {
  return artworks.filter((artwork) => {
    if (year && !category) {
      return artwork.year === year;
    }
    if (!year && category) {
      return artwork.categories.includes(category);
    }
    if (year && category) {
      return artwork.categories.includes(category) && artwork.year === year;
    }
    return artworks;
  });
};

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
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [category, setCategory] = useState(null);
  const [year, setYear] = useState(null);
  const [filtersTouched, setFiltersTouched] = useState(false);

  useEffect(() => {
    if (artworks.length === 0) {
      dispatch(getArtworks());
    }
  }, []);

  useEffect(() => {
    if (filteredArtworks.length === 0) {
      setFilteredArtworks(artworks);
    }
  }, [artworks]);

  useEffect(() => {
    const filter = filterArtworks(
      { category: category?.value, year: year?.value },
      artworks
    );
    setFilteredArtworks(filter);
  }, [year, category]);

  const onCategoryChangeHandler = (value) => {
    setCategory(value);
    setFiltersTouched(true);
  };

  const onYearChangeHandler = (value) => {
    setYear(value);
    setFiltersTouched(true);
  };

  const onResetFilterClickHandler = () => {
    setFilteredArtworks(artworks);
    setYear(null);
    setCategory(null);
  };

  return (
    <S.Section>
      <Container>
        <SRLWrapper options={SRLOptions}>
          <S.SelectsWrapper>
            <Select
              options={yearOptions}
              placeholder="Year"
              value={year}
              onChange={onYearChangeHandler}
            />
            <Select
              options={categoriesOptions}
              placeholder="Type"
              value={category}
              onChange={onCategoryChangeHandler}
            />
            <S.ButtonResetFilter onClick={onResetFilterClickHandler}>
              <RestoreIcon />
            </S.ButtonResetFilter>
          </S.SelectsWrapper>
          <S.MasonryGrid
            breakpointCols={masonryGridBreakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredArtworks.map(({ imgUrl, id, year }) => {
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
      {filtersTouched && filteredArtworks.length === 0 ? (
        <S.FilterMessage>Nothing was found 🙃</S.FilterMessage>
      ) : null}
    </S.Section>
  );
};

export default Portfolio;
