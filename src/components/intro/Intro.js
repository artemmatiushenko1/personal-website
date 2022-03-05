import personalPicture from 'assets/images/personal-picture.png';
import Container from 'components/container';
import { MoreButton } from 'components/more-button';
import * as S from './Intro.style';

const Intro = () => {
  return (
    <S.Hero id="intro">
      <Container>
        <S.IntroBox>
          <S.PersonalPhoto src={personalPicture} alt="Artem Matiushenko" />
          <S.Title>Artem Matiushenko</S.Title>
          <S.Description>
            photographer & digital artist from Ukraine
          </S.Description>
          <MoreButton />
        </S.IntroBox>
      </Container>
    </S.Hero>
  );
};

export default Intro;
