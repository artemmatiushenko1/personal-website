import Container from 'components/container/Container';
import React from 'react';
import * as S from './About.style';

const About = () => {
  const onUpClickHandler = () => {
    window.location.href = '#intro';
  };

  return (
    <S.Section id="about">
      <Container>
        About
        <S.Fab onClick={onUpClickHandler}>&uarr;</S.Fab>
      </Container>
    </S.Section>
  );
};

export default About;
