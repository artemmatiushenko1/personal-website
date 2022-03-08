import * as S from './HamburgerButton.style';

const HamburgerButton = ({ onClick, isActive }) => {
  return (
    <S.Box onClick={onClick}>
      <div>
        <S.LineTop isActive={isActive} />
        <S.LineMiddle isActive={isActive} />
        <S.LineBottom isActive={isActive} />
      </div>
    </S.Box>
  );
};

export default HamburgerButton;
