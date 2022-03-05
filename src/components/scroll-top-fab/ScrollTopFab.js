import * as S from './ScrollTopFab.style';

const Fab = ({ onClick }) => {
  return <S.Button onClick={onClick}>&uarr;</S.Button>;
};

export default Fab;
