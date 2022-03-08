import * as S from './ScrollTopFab.style';

const Fab = ({ onClick }) => {
  return (
    <S.Box onClick={onClick}>
      <S.ArrowIcon />
    </S.Box>
  );
};

export default Fab;
