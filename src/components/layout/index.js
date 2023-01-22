import Navigation from 'components/navigation/Navigation.js';
import { Socials } from 'components/socials';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { ScrollTopFab } from 'components/scroll-top-fab';
import { useRouter } from 'next/router';
import useMediaQuery from 'src/hooks/useMediaQuery.js';
import { Footer } from 'components/footer';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const { breakpoints } = useContext(ThemeContext);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.small})`);

  return (
    <>
      <Navigation />
      {!isMobile && pathname !== '/links' && <Socials />}
      {children}
      <Footer />
      {pathname !== '/contact' && <ScrollTopFab />}
    </>
  );
};

export default Layout;
