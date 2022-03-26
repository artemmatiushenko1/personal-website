import styled, { keyframes } from 'styled-components';
import LogoSvg from 'public/icons/logo.svg';
import { rgba } from 'polished';

export const Logo = styled(LogoSvg)`
  width: auto;
  height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 19px;
  }
`;

export const NavContainer = styled.div`
  max-width: 1268px;
  padding: 20px 0px 20px 0px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: row-reverse;
    padding: 15px 15px 10px 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: row-reverse;
    padding: 10px;
  }
`;

export const Header = styled.header`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const LinksList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;

const toLeft = keyframes`
  0%{
    width: 0;
  }

  100% {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  position: relative;

  a {
    display: inline-block;
    width: 100%;
    position: relative;
    z-index: 10;
    text-decoration: none;

    :link,
    :visited {
      color: #fff;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      padding: 10px;

      :link,
      :visited:not(.active) {
        color: #fff;
      }

      .active:link,
      :visited {
        color: #202020;
      }
    }
  }

  &.selected::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => rgba(theme.palette.common.white, 1)};
    transition: all 0.2s ease;
    width: 100%;
    height: 2px;
    right: 0;
    bottom: -5px;
    transition: 0.2s;
    animation: ${toLeft} 0.5s ease;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      bottom: 0;
      height: 100%;
      animation: none;
    }
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
      display: none;
    }
  }

  :hover:not(.selected) {
    ::after {
      width: 100%;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        left: -17px;
        height: 80%;
        width: 2px;
      }
    }
  }
`;

export const Nav = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: fixed;
    height: 100vh;
    width: 60vw;
    right: ${({ isVisible }) => (isVisible ? '0' : '-100%')};
    top: 0;
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.7)};
    backdrop-filter: blur(20px);
    padding: 30px;
    padding-left: 45px;
    padding-right: 0;
    transition: right 0.5s ease-in-out;
  }
`;
