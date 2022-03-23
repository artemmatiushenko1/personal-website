import * as S from './Navigation.style';
import { HamburgerButton } from 'components/humburger-button';
import { ThemeContext } from 'styled-components';
import { useContext, useState } from 'react';
import NavLink from 'components/nav-link/NavLink';
import useMediaQuery from 'src/hooks/useMediaQuery';

const Navigation = () => {
  const { breakpoints } = useContext(ThemeContext);
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.medium})`);
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
          <NavLink href="/" onClick={onNavItemSelected} title="Home">
            Home
          </NavLink>
          <NavLink
            href="/portfolio"
            onClick={onNavItemSelected}
            title="Portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink href="/nft" onClick={onNavItemSelected} title="NFT">
            NFT
          </NavLink>
          <NavLink href="/contact" onClick={onNavItemSelected} title="Contact">
            Contact
          </NavLink>
          <NavLink href="/links" onClick={onNavItemSelected} title="Links">
            Links
          </NavLink>
        </S.Nav>
      </S.NavContainer>
    </S.ActionBar>
  );
};

export default Navigation;
