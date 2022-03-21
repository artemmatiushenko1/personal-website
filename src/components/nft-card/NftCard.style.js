import { rgba } from 'polished';
import styled from 'styled-components';

export const NftCard = styled.div`
  background-color: ${({ theme }) => rgba(theme.palette.common.white, 0.05)};
  border-radius: 5px;
  padding: 15px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  transition: transform 0.2s ease;

  :hover {
    transform: translateY(-4px);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  svg path {
    fill: ${({ theme }) => theme.palette.common.white};
  }
`;

export const State = styled.div`
  color: ${({ sold }) => (sold ? '#fff' : '#2ecc71')};
`;

export const Desc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => rgba(theme.palette.common.white, 0.5)};
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => rgba(theme.palette.common.white, 0.1)};
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
  background-color: ${({ theme }) => theme.palette.common.white};
  backdrop-filter: blur(15px);
  border-radius: 200px;
  border: none;
  font-family: ${({ theme }) => theme.typography.fonts.primary}, monospace;
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
    color: ${({ theme }) => theme.palette.primary.main};
  }

  :hover {
    background-color: ${({ theme }) => theme.palette.common.black};
    color: ${({ theme }) => theme.palette.common.white};
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
  color: ${({ theme }) => rgba(theme.palette.common.white, 0.5)};
  font-size: 13px;
`;
