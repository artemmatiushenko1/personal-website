import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from '@firebase/storage';
import { storage } from '../../firebase/config';
import * as S from './Portfolio.style';
import Container from 'components/container';

const Portfolio = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const listRef = ref(storage, 'art');
      const res = await listAll(listRef);
      const paths = await Promise.all(
        res.items.map(async (item) => await getDownloadURL(item))
      );
      setUrls(paths);
      console.log(paths);
    };

    fetchData();
  }, []);

  return (
    <S.Section>
      <Container>
        {urls.map((url) => {
          return <img src={url} alt={'a'} width="200px" height="auto" />;
        })}
      </Container>
    </S.Section>
  );
};

export default Portfolio;
