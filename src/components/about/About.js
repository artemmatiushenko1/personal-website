import Container from 'components/container';
import * as S from './About.style';
import ExploreIcon from 'public/icons/icon-compass.svg';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { getAge } from 'utils/getAge';

const About = () => {
  const router = useRouter();

  const onExploreButtonClickHandler = () => {
    router.push('/portfolio');
  };

  const age = getAge(process.env.NEXT_PUBLIC_BIRTHDAY_DATE);

  return (
    <S.Section id="about">
      <Container>
        <S.Text
          as={motion.div}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.01 }}
        >
          Hi, I am Artem Matiushenko or as most people know me - artemko,
          {` ${age} `} years old art photographer from a small village in
          Ukraine.
          <br />
          <br />
          For now, I have been doing photography for about 4 years and I am
          really enjoying that. Everything started with taking photos of
          flowers, insects, and food as usual. But when I was getting older my
          world vision was constantly updating. And it reflected on my art. I
          started to create different magical scenes and save the pictures of
          them using a camera.
          <br />
          <br />I create my artworks to bring some more positive and genuine
          emotions to the world and to show how beautiful it is. I try to share
          all my feelings, which I felt when I was creating a certain artwork
          with the audience. So, I want people to forget about all the bad
          things in their life and dive into my magic world.
          <br />
          <br />
          <span>Join me in this incredible journey!✨</span>
        </S.Text>
        <S.ButtonBox
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.01 }}
        >
          <S.ExploreButton
            icon={<ExploreIcon />}
            onClick={onExploreButtonClickHandler}
          >
            explore portfolio
          </S.ExploreButton>
        </S.ButtonBox>
      </Container>
    </S.Section>
  );
};

export default About;
