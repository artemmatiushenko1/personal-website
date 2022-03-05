import personalPicture from 'assets/images/personal-picture.png';
import MoreButton from 'components/more-button/MoreButton';
import * as S from './Intro.style';

const Intro = () => {
  return (
    <S.IntroBox>
      <S.PersonalPhoto src={personalPicture} alt="Artem Matiushenko" />
      <S.Title>Artem Matiushenko</S.Title>
      <S.Description>photographer & digital artist from Ukraine</S.Description>
      <MoreButton />
    </S.IntroBox>
  );
};

export default Intro;
