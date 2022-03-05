import * as S from './Navigation.style';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

const Navigation = () => {
  return (
    <S.ActionBar>
      <Logo />
      <S.Nav>
        <S.NavItem to="/">Home</S.NavItem>
        <S.NavItem to="/portfolio">Portfolio</S.NavItem>
        <S.NavItem to="/nft">Nft</S.NavItem>
        <S.NavItem to="/contacts">Contacts</S.NavItem>
        <S.NavItem to="/links">Links</S.NavItem>
      </S.Nav>
    </S.ActionBar>
  );
};

export default Navigation;
