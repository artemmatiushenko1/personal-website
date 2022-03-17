import * as S from './Nft.style';
import Container from 'components/container';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelector, nftsSelector } from 'redux/selectors/nft';
import { useEffect } from 'react';
import { getNfts } from 'redux/slices/nftSlice';
import { Spinner } from 'components/spinner';
import { NftCard } from 'components/nft-card';

const Nft = () => {
  const nfts = useSelector(nftsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nfts.length === 0) {
      dispatch(getNfts());
    }
  }, []);

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
        {isLoading && (
          <S.SpinnerOverlay>
            <Spinner />
          </S.SpinnerOverlay>
        )}
      </Container>
    </S.Section>
  );
};

export default Nft;
