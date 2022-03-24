import * as S from './Navigation.style';
import { HamburgerButton } from 'components/humburger-button';
import { ThemeContext } from 'styled-components';
import { useContext, useState } from 'react';
import NavLink from 'components/nav-link/NavLink';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { useRouter } from 'next/router';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/portfolio', name: 'Portfolio' },
  { path: '/nft', name: 'Nft' },
  { path: '/contact', name: 'Contact' },
  { path: '/links', name: 'Links' },
];

const Navigation = () => {
  const { breakpoints } = useContext(ThemeContext);
  const isTablet = useMediaQuery(`(max-width: ${breakpoints.medium})`);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { pathname } = useRouter();
  const [selectedPage, setSelectedPage] = useState(pathname);

  const toggleHav = () => {
    setIsNavVisible((prevState) => {
      return !prevState;
    });
  };

  const onNavItemSelected = (path) => {
    setIsNavVisible(false);
    setSelectedPage(path);
  };

  return (
    <S.Header>
      <S.NavContainer>
        <NavLink href="/">
          <S.Logo />
        </NavLink>
        {isTablet ? (
          <HamburgerButton isActive={isNavVisible} onClick={toggleHav} />
        ) : null}
        <S.Nav isVisible={isNavVisible}>
          <S.LinksList>
            {routes.map(({ path, name }) => (
              <S.ListItem
                key={name}
                className={selectedPage === path ? 'selected' : ''}
                onClick={() => {
                  onNavItemSelected(path);
                }}
              >
                <NavLink href={path} title={name}>
                  {name}
                </NavLink>
              </S.ListItem>
            ))}
          </S.LinksList>
        </S.Nav>
      </S.NavContainer>
    </S.Header>
  );
};

export default Navigation;
