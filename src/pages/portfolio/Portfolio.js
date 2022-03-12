import { useEffect } from 'react';
import * as S from './Portfolio.style';
import Container from 'components/container';
import { Spinner } from 'components/spinner';
import { SRLWrapper } from 'simple-react-lightbox';
import { useDispatch, useSelector } from 'react-redux';
import { getArtworks } from 'redux/slices/artworksSlice';
import { Photo } from 'components/photo';
import { artworksSelector, isLoadingSelector } from 'redux/selectors/artworks';
import Select from 'react-select';
import { ReactComponent as RestoreIcon } from 'assets/icons/icon-restore.svg';

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
  // 500: 1,
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

const customStyles = {
  option: (provided, { isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? '#fff' : 'transparent',
    color: '#000',
    fontWeight: isSelected ? '600' : '400',
    transition: 'background-color 0.2s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: !isSelected ? '#f1f2f6' : 'none',
    },
  }),
  control: (provided, { isFocused }) => ({
    ...provided,
    width: 135,
    backgroundColor: 'transaprent',
    borderRadius: 0,
    border: 'none',
    borderBottom: '2px solid #fff',
    boxShadow: 'none',
    cursor: 'pointer',
    outline: isFocused ? 'none' : 'none',

    ':hover': {
      borderColor: isFocused ? '#fff' : 'rgba(255, 255, 255, 0.6)',
    },
    '@media screen and (max-width: 500px)': {
      width: '100%',
    },
  }),
  container: (provided) => ({
    ...provided,
    '@media screen and (max-width: 500px)': {
      width: '100%',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'rgba(255, 255, 255, 0.6)',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: 'none',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 15px',
  }),
  dropdownIndicator: (provided, { isFocused }) => ({
    ...provided,
    transition: 'all .3s ease',
    transform: isFocused ? 'rotate(180deg)' : null,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
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
          <S.SelectsWrapper>
            <Select
              styles={customStyles}
              isSearchable={false}
              options={yearOptions}
              placeholder="Year"
            />
            <Select
              styles={customStyles}
              isSearchable={false}
              options={categoriesOptions}
              placeholder="Type"
            />
            <S.ButtonResetFilter>
              <RestoreIcon />
            </S.ButtonResetFilter>
          </S.SelectsWrapper>
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
