import styled from 'styled-components';
import Image from 'next/image';
import { rgba } from 'polished';

export const Box = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => rgba(theme.palette.common.white, 0.4)};
  border-radius: 100px;
  padding: 10px;
  transition: transform 0.2s ease;

  :hover {
    transform: translateY(-2px);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Img = styled(Image)`
  width: 43px;
  height: 43px;
  border-radius: 50%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 15px;
  font-weight: 400;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.palette.common.white};
  opacity: 0.5;
  font-size: 10px;
  text-overflow: ellipsis;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
`;
