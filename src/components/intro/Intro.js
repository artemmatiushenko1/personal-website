import personalPicture from 'assets/images/personal-picture.png';
import Container from 'components/container';
import * as S from './Intro.style';
import { ReactComponent as MouseIcon } from 'assets/icons/icon-mouse.svg';

const Intro = () => {
  const onMoreButtonClickHandler = () => {
    window.location.href = '#about';
  };

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
          <S.ScrollToAboutButton
            icon={<MouseIcon />}
            onClick={onMoreButtonClickHandler}
          >
            ABOUT ME
          </S.ScrollToAboutButton>
        </S.IntroBox>
      </Container>
    </S.Section>
  );
};

export default Intro;
