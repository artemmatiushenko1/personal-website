import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoSvg } from 'assets/images/logo.svg';

export const Logo = styled(LogoSvg)`
  height: 20px;
  width: auto;
`;

export const NavContainer = styled.div`
  max-width: 1268px;
  padding: 25px 25px 20px 25px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: row-reverse;
    padding: 15px 15px 10px 15px;
  }
`;

export const ActionBar = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #202020;
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: fixed;
    height: 100vh;
    width: 60vw;
    right: ${({ isVisible }) => (isVisible ? '0' : '-100%')};
    top: 0;
    flex-direction: column;
    background-color: rgba(32, 32, 32, 0.7);
    backdrop-filter: blur(20px);
    padding: 30px;
    padding-left: 45px;
    padding-right: 0;
    transition: right 0.5s ease-in-out;
  }
`;

export const NavItem = styled(NavLink)`
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  line-height: 23px;

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
