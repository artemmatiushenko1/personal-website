import * as S from './ScrollTopFab.style';

const Fab = ({ onClick }) => {
  return (
    <S.Button onClick={onClick}>
      <S.ArrowIcon />
    </S.Button>
  );
};

export default Fab;
