import styled from 'styled-components';

export const Button = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  line-height: 23px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 19px;
    padding: 10px;
  }

  ::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.palette.common.white};
    transition: all 0.2s ease;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -5px;
    transition: all 0.2s ease-in-out;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      left: -17px;
      bottom: 50%;
      transform: translateY(50%);
    }
  }

  :link,
  :visited {
    color: ${({ theme }) => theme.palette.common.white};
    text-decoration: none;
  }

  :hover,
  :active {
    ::after {
      width: 100%;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        left: -17px;
        height: 80%;
        width: 2px;
      }
    }
  }

  &.active {
    ::after {
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        left: -20px;
        bottom: 50%;
        transform: translateY(50%);
      }
    }
  }
`;
