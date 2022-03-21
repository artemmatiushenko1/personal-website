import { useEffect, useState } from 'react';
import * as S from 'src/styles/pages/Portfolio.style';
import Container from 'components/container';
import { SRLWrapper } from 'simple-react-lightbox';
import { Photo } from 'components/photo';
import RestoreIcon from 'public/icons/icon-restore.svg';
import { Select } from 'components/select';
import { sortByDate } from 'utils/sortByDate';
import Head from 'next/head';
import { getFirestoreRecords } from 'lib/api';

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

const Portfolio = ({ artworks }) => {
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [category, setCategory] = useState(null);
  const [year, setYear] = useState(null);
  const [filtersTouched, setFiltersTouched] = useState(false);

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
    <>
      <Head>
        <meta
          name="description"
          content={`Gallery of photo artworks created during 2018 and ${new Date().getFullYear()} years by Artem Matiushenko`}
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, артем матюшенко, artworks, photo, photography, gallery"
        />
        <meta name="author" content="Artem Matiushenko" />
        <meta property="og:title" content="Portfolio - Artem Matiushenko" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Gallery of photo artworks created during 2018 and ${new Date().getFullYear()} years by Artem Matiushenko`}
        />
        <title>Portfolio - Artem Matiushenko</title>
      </Head>
      <S.Section>
        <Container>
          <SRLWrapper options={SRLOptions}>
            <S.SelectsWrapper>
              <Select
                options={yearOptions}
                placeholder="Year"
                value={year}
                onChange={onYearChangeHandler}
                instanceId="year-select"
              />
              <Select
                options={categoriesOptions}
                placeholder="Type"
                value={category}
                onChange={onCategoryChangeHandler}
                instanceId="type-select"
              />
              <S.ButtonResetFilter onClick={onResetFilterClickHandler}>
                <RestoreIcon />
              </S.ButtonResetFilter>
            </S.SelectsWrapper>
            <S.Grid>
              {filteredArtworks.map(({ imgUrl, id, year, name }) => {
                return <Photo key={id} src={imgUrl} alt={name} year={year} />;
              })}
            </S.Grid>
          </SRLWrapper>
        </Container>
        {filtersTouched && filteredArtworks.length === 0 ? (
          <S.FilterMessage>Nothing was found 🙃</S.FilterMessage>
        ) : null}
      </S.Section>
    </>
  );
};

export const getStaticProps = async (context) => {
  const artworks = await getFirestoreRecords('artworks');

  return {
    props: { artworks: sortByDate(artworks) },
  };
};

export default Portfolio;
