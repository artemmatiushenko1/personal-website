import * as S from './Nft.style';
import Container from 'components/container';
import { ReactComponent as EthIcon } from 'assets/icons/icon-eth.svg';
import personalPicture from 'assets/images/hero-background.png';
import { ReactComponent as FndLogo } from 'assets/icons/logo-foundation.svg';

const NftCard = ({
  imgUrl,
  title,
  description,
  price,
  sold,
  platform,
  url,
}) => {
  return (
    <S.NftCard>
      <S.ImgContainer>
        <img
          src="https://f8n-production-collection-assets.imgix.net/0x547FFd15310C4D79cD0674285362308B286f7387/1/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"
          alt=""
        />
      </S.ImgContainer>
      <div>
        <S.TitleWrapper>
          <h3>Charmed</h3>
          <S.Edition>Edition 1/1</S.Edition>
        </S.TitleWrapper>
        <S.Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum
          tempora aliquid maiores adipisci
        </S.Desc>
      </div>
      <S.Details>
        <S.Price>
          <EthIcon /> <span>0.33 ETH</span>
        </S.Price>
        <S.State>Available</S.State>
      </S.Details>
      <S.Divider />
      <S.MarketplaceDetails>
        <S.Platform>
          <FndLogo width="20px" height="20px" />
          <p>Foundation (FND)</p>
        </S.Platform>
        <S.ViewNFTButton
          href="https://foundation.app/@artemko/em/1"
          target="_blank"
        >
          View NFT
        </S.ViewNFTButton>
      </S.MarketplaceDetails>
    </S.NftCard>
  );
};

const Nft = () => {
  return (
    <S.Section>
      <Container>
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </Container>
    </S.Section>
  );
};

export default Nft;
