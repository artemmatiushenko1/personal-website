import * as S from './Navigation.style';
import { HamburgerButton } from 'components/humburger-button';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';
import { useContext, useState } from 'react';
import NavLink from 'components/nav-link/NavLink';
import useMedia from 'src/hooks/useMedia';

const Navigation = () => {
  const { breakpoints } = useContext(ThemeContext);
  const isTablet = useMedia({
    query: `(max-width: ${breakpoints.medium})`,
  });
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleHav = () => {
    setIsNavVisible((prevState) => {
      return !prevState;
    });
  };

  const onNavItemSelected = () => {
    setIsNavVisible(false);
  };

  return (
    <S.ActionBar>
      <S.NavContainer>
        <S.Logo />
        {isTablet ? (
          <HamburgerButton isActive={isNavVisible} onClick={toggleHav} />
        ) : null}
        <S.Nav isVisible={isNavVisible}>
          <NavLink href="/" onClick={onNavItemSelected}>
            Home
          </NavLink>
          <NavLink href="/portfolio" onClick={onNavItemSelected}>
            Portfolio
          </NavLink>
          <NavLink href="/nft" onClick={onNavItemSelected}>
            NFT
          </NavLink>
          <NavLink href="/contact" onClick={onNavItemSelected}>
            Contact
          </NavLink>
          <NavLink href="/links" onClick={onNavItemSelected}>
            Links
          </NavLink>
        </S.Nav>
      </S.NavContainer>
    </S.ActionBar>
  );
};

export default Navigation;
