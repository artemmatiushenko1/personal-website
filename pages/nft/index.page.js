import * as S from './index.style';
import Container from 'components/container';
import { NftCard } from 'components/nft-card';
import { getDocs, collection } from '@firebase/firestore';
import { db } from 'src/firebase/config';

const Nft = ({ nfts }) => {
  return (
    <S.Section>
      <Container>
        {nfts.map(
          ({
            title,
            description,
            imgUrl,
            price,
            sold,
            edition,
            platform,
            url,
          }) => {
            return (
              <NftCard
                key={title}
                title={title}
                description={description}
                imgUrl={imgUrl}
                price={price}
                sold={sold}
                edition={edition}
                platform={platform}
                url={url}
              />
            );
          }
        )}
      </Container>
    </S.Section>
  );
};

export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, 'nfts'));
  const nfts = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return {
    props: { nfts },
  };
};

export default Nft;
