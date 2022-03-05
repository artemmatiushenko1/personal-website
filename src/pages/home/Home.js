import { Navigation } from 'components/navigation';
import * as S from './Home.styled';
import Container from 'components/container/Container';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Intro } from 'components/intro';
import Socials from 'components/socials/Socials';
import heroFront from 'assets/images/hero-background-front.png';
import heroBack from 'assets/images/hero-background-back.png';
import { useEffect, useState } from 'react';

const Home = () => {
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.pageYOffset);
    });
  }, []);

  return (
    <S.Hero>
      {/* <S.BackImg src={heroBack} alt="" style={{}} />
      <S.FrontImg src={heroFront} alt="" /> */}
      <Container>
        <S.ActionBar>
          <Logo />
          <Navigation />
        </S.ActionBar>
        <Intro />
      </Container>
      <Socials />
    </S.Hero>
  );
};

export default Home;
