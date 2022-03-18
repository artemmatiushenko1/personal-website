import Navigation from 'components/navigation/Navigation.js';
import { Socials } from 'components/socials';
import { Home, Portfolio, Nft, Links, Contact } from 'pages';
import { Routes, Route, useLocation } from 'react-router';
import * as S from './App.styled.js';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ScrollTopFab } from 'components/scroll-top-fab';

const App = () => {
  const { pathname } = useLocation();
  const { breakpoints } = useContext(ThemeContext);
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.small})`,
  });

  return (
    <S.App>
      <Navigation />
      {!isMobile && pathname !== '/links' && <Socials />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      {pathname !== '/contact' && <ScrollTopFab />}
    </S.App>
  );
};

export default App;
