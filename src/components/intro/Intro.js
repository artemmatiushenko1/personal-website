import personalPicture from 'assets/images/personal-picture.png';
import Container from 'components/container';
import { MoreButton } from 'components/more-button';
import * as S from './Intro.style';

const Intro = () => {
  return (
    <S.Section>
      <Container>
        <S.IntroBox>
          <S.PhotoWrapper>
            <S.PersonalPhoto src={personalPicture} alt="Artem Matiushenko" />
          </S.PhotoWrapper>
          <S.Title>
            <span>Artem </span>
            <span>Matiushenko</span>
          </S.Title>
          <S.Description>
            photographer & digital artist <span>from Ukraine</span>
          </S.Description>
          <MoreButton />
        </S.IntroBox>
      </Container>
    </S.Section>
  );
};

export default Intro;
