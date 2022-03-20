import Navigation from 'components/navigation/Navigation.js';
import { Socials } from 'components/socials';
import * as S from './index.style.js';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ScrollTopFab } from 'components/scroll-top-fab';
import { useRouter } from 'next/router';
import useMedia from 'src/hooks/useMedia.js';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const { breakpoints } = useContext(ThemeContext);
  const isMobile = useMedia({
    query: `(max-width: ${breakpoints.small})`,
  });

  return (
    <S.App>
      <Navigation />
      {!isMobile && pathname !== '/links' && <Socials />}
      {children}
      {pathname !== '/contact' && <ScrollTopFab />}
    </S.App>
  );
};

export default Layout;