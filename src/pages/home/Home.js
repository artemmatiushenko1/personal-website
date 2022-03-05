import { Navigation } from 'components/navigation';
import * as S from './Home.styled';
import Container from 'components/container/Container';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

const Home = () => {
  return (
    <S.Hero>
      <Container>
        <S.Header>
          <Logo />
          <Navigation />
        </S.Header>
      </Container>
    </S.Hero>
  );
};

export default Home;
