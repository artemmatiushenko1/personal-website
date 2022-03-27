import * as S from './Intro.style';
import MouseIcon from 'public/icons/icon-mouse.svg';
import { motion } from 'framer-motion';

const Intro = () => {
  const onMoreButtonClickHandler = () => {
    window.location.href = '#about';
  };

  return (
    <S.Section>
      <S.PhotoWrapper>
        <motion.img
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src="/images/home-image.jpg"
          alt="Artem Matiushenko self portrait inspired by Sweet tooth"
        />
      </S.PhotoWrapper>
      <S.TextWrapper
        as={motion.div}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <S.Title>
          <span>Artem </span>
          <span>Matiushenko</span>
        </S.Title>
        <S.Description>
          photographer & digital artist <span>from Ukraine</span>
        </S.Description>
      </S.TextWrapper>
      <S.ButtonBox
        initial={{ y: '100%', x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <S.AboutButton
          icon={<MouseIcon />}
          onClick={onMoreButtonClickHandler}
        />
      </S.ButtonBox>
    </S.Section>
  );
};

export default Intro;
