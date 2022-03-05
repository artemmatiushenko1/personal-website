import * as S from './Home.styled';
import Container from 'components/container/Container';
import { Intro } from 'components/intro';
import Socials from 'components/socials/Socials';

const Home = () => {
  return (
    <S.Hero>
      <Container>
        <Intro />
      </Container>
      <Socials />
    </S.Hero>
  );
};

export default Home;
