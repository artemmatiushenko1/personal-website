import personalPicture from 'public/images/personal-picture.png';
import Container from 'components/container';
import * as S from './Intro.style';
import MouseIcon from 'public/icons/icon-mouse.svg';

const Intro = () => {
  const onMoreButtonClickHandler = () => {
    window.location.href = '#about';
  };

  return (
    <S.Section>
      <Container>
        <S.IntroBox>
          <S.PhotoWrapper>
            <S.PersonalPhoto
              src={personalPicture}
              alt="Artem Matiushenko"
              quality={100}
              width={168}
              height={168}
            />
          </S.PhotoWrapper>
          <S.Title>
            <span>Artem </span>
            <span>Matiushenko</span>
          </S.Title>
          <S.Description>
            photographer & digital artist <span>from Ukraine</span>
          </S.Description>
          <S.AboutButton
            icon={<MouseIcon />}
            onClick={onMoreButtonClickHandler}
          >
            ABOUT ME
          </S.AboutButton>
        </S.IntroBox>
      </Container>
    </S.Section>
  );
};

export default Intro;
