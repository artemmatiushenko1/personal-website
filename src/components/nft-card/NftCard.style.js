import styled from 'styled-components';

export const NftCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  padding: 15px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  transition: transform 0.2s ease;

  :hover {
    transform: translateY(-2px);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    display: block;
    transition: opacity 1s ease-in-out;

    &.visible {
      opacity: 1;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  svg path {
    fill: #fff;
  }
`;

export const State = styled.div`
  color: ${({ sold }) => (sold ? '#fff' : '#2ecc71')};
`;

export const Desc = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const MarketplaceDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Platform = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  p {
    font-size: 13px;
  }
`;

export const ViewNFTButton = styled.a`
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(15px);
  border-radius: 200px;
  border: none;
  font-family: ${({ theme }) => theme.typography.fonts.primary}, monospace;
  color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  align-items: center;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 12px;
  text-decoration: none;
  line-height: 16px;
  transition: 0.2s ease;

  :link,
  :visited {
    color: #202020;
  }

  :hover {
    background-color: #000;
    color: #fff;
  }

  :active {
    transform: translateY(4px);
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Edition = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
`;
