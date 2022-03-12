import * as S from './Navigation.style';
import { HamburgerButton } from 'components/humburger-button';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';
import { useContext, useState } from 'react';

const Navigation = () => {
  const { breakpoints } = useContext(ThemeContext);
  const isTablet = useMediaQuery({
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
          <S.NavItem to="/" onClick={onNavItemSelected}>
            Home
          </S.NavItem>
          <S.NavItem to="/portfolio" onClick={onNavItemSelected}>
            Portfolio
          </S.NavItem>
          <S.NavItem to="/nft" onClick={onNavItemSelected}>
            Nft
          </S.NavItem>
          <S.NavItem to="/contacts" onClick={onNavItemSelected}>
            Contacts
          </S.NavItem>
          <S.NavItem to="/links" onClick={onNavItemSelected}>
            Links
          </S.NavItem>
        </S.Nav>
      </S.NavContainer>
    </S.ActionBar>
  );
};

export default Navigation;
