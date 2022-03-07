import styled from 'styled-components';

export const Button = styled.button`
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
  backdrop-filter: blur(20px);
  transition: background-color 0.2s ease;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.clicked {
    top: -100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    right: 20px;
  }
`;
