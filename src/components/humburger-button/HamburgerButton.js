import * as S from './HamburgerButton.style';

const HamburgerButton = ({ onClick, isActive }) => {
  return (
    <S.Container isActive={isActive} onClick={onClick}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </S.Container>
  );
};

export default HamburgerButton;
