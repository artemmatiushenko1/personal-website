import Navigation from 'components/navigation/Navigation.js';
import { Home } from 'pages';
import { Routes, Route } from 'react-router';
import * as S from './App.styled.js';

const App = () => {
  return (
    <S.App>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/nft" element={<Home />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/links" element={<Home />} />
      </Routes>
    </S.App>
  );
};

export default App;
