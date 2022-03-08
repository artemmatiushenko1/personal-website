import styled from 'styled-components';
import { ReactComponent as Arrow } from 'assets/icons/icon-arrow.svg';

export const ArrowIcon = styled(Arrow)`
  width: 24px;
  height: auto;
`;

export const Box = styled.button`
  position: fixed;
  background: none;
  border: none;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.common.white};
  right: 40px;
  bottom: 45px;
  cursor: pointer;
  font-size: 30px;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.clicked {
    top: -100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    right: 20px;
  }
`;
