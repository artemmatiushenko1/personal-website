import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  column-gap: 60px;
`;

export const NavItem = styled(NavLink)`
  font-size: 16px;
  text-transform: uppercase;
  position: relative;
  line-height: 23px;

  ::after {
    content: '';
    position: absolute;
    background-color: #fff;
    transition: all 0.2s ease;
  }

  :link,
  :visited {
    color: #fff;
    text-decoration: none;
  }

  :hover,
  :active {
    ::after {
      width: 100%;
      height: 2px;
      left: 0;
      bottom: -5px;
    }
  }

  &.active {
    ::after {
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
  }
`;
