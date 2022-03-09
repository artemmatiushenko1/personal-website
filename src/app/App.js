import Navigation from 'components/navigation/Navigation.js';
import { Socials } from 'components/socials';
import { Home } from 'pages';
import { Routes, Route, useLocation } from 'react-router';
import * as S from './App.styled.js';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import Links from 'pages/links/Links.js';

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
        <Route path="/portfolio" element={<Home />} />
        <Route path="/nft" element={<Home />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </S.App>
  );
};

export default App;
