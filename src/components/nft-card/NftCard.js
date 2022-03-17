import * as S from './NftCard.style';
import { Placeholder } from 'components/placeholder';
import { useRef } from 'react';
import { ReactComponent as EthIcon } from 'assets/icons/icon-eth.svg';
import { ReactComponent as FndLogo } from 'assets/icons/logo-foundation.svg';
import { truncateString } from 'utils/truncateString';

const NftCard = ({
  imgUrl,
  title,
  description,
  price,
  sold,
  platform,
  url,
  edition,
}) => {
  const imgRef = useRef();
  const placeholderRef = useRef();
  const onImgLoad = () => {
    imgRef.current.classList.toggle('visible');
    placeholderRef.current.remove();
  };

  return (
    <S.NftCard>
      <S.ImgContainer>
        <Placeholder ref={placeholderRef} />
        <img src={imgUrl} alt={title} onLoad={onImgLoad} ref={imgRef} />
      </S.ImgContainer>
      <div>
        <S.TitleWrapper>
          <h3>{title}</h3>
          <S.Edition>Edition {edition}</S.Edition>
        </S.TitleWrapper>
        <S.Desc>{truncateString(description)}</S.Desc>
      </div>
      <S.Details>
        <S.Price>
          <EthIcon /> <span>{price} ETH</span>
        </S.Price>
        <S.State sold={sold}>{sold ? 'Sold' : 'Available'}</S.State>
      </S.Details>
      <S.Divider />
      <S.MarketplaceDetails>
        <S.Platform>
          <FndLogo width="20px" height="20px" />
          <p>{platform}</p>
        </S.Platform>
        <S.ViewNFTButton href={url} target="_blank">
          View NFT
        </S.ViewNFTButton>
      </S.MarketplaceDetails>
    </S.NftCard>
  );
};

export default NftCard;
