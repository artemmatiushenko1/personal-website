import * as S from './NftCard.style';
import EthIcon from 'public/icons/icon-eth.svg';
import FndLogo from 'public/icons/logo-foundation.svg';
import { truncateString } from 'utils/truncateString';
import { Image } from 'components/image';

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
  return (
    <S.NftCard>
      <S.ImgContainer>
        <Image src={imgUrl} alt={title} />
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
          <EthIcon width="24px" height="24px" /> <span>{price} ETH</span>
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
