import * as S from './Navigation.style';

const Navigation = () => {
  return (
    <S.Nav>
      <S.NavItem to="/">Home</S.NavItem>
      <S.NavItem to="/portfolio">Portfolio</S.NavItem>
      <S.NavItem to="/nft">Nft</S.NavItem>
      <S.NavItem to="/contacts">Contacts</S.NavItem>
      <S.NavItem to="/links">Links</S.NavItem>
    </S.Nav>
  );
};

export default Navigation;
