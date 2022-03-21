import styled from 'styled-components';
import Arrow from 'public/icons/icon-arrow.svg';
import { rgba } from 'polished';

export const ArrowIcon = styled(Arrow)`
  width: 20px;
  height: auto;
`;

export const Box = styled.button`
  position: fixed;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.common.white};
  right: 35px;
  bottom: 45px;
  cursor: pointer;
  font-size: 30px;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: 0.2s ease;

  :hover {
    backdrop-filter: blur(20px);
    background-color: ${({ theme }) => rgba(theme.palette.common.white, 0.1)};
  }

  &.hidden {
    bottom: 200px;
    opacity: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    right: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    bottom: 20px;
  }
`;
