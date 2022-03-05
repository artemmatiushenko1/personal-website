import { Home } from 'pages';
import { Routes, Route } from 'react-router';
import * as S from './App.styled.js';

const App = () => {
  return (
    <S.App>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </S.App>
  );
};

export default App;
