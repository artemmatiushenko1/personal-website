import styled from 'styled-components';
import Link from 'next/link';
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
  padding: 25px 0px 20px 0px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 25px 20px 20px 20px;
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

export const ActionBar = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
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
    background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.7)};
    backdrop-filter: blur(20px);
    padding: 30px;
    padding-left: 45px;
    padding-right: 0;
    transition: right 0.5s ease-in-out;
  }
`;
