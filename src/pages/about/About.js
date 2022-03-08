import Container from 'components/container';
import React from 'react';
import * as S from './About.style';

const About = () => {
  return (
    <S.Section id="about">
      <Container>
        <S.Text>
          Hi, I am Artem Matiushenko or as most people know me - artemko, 18
          years old art photographer from a small village in Ukraine.
          <br />
          <br />I was searching for myself for a long time. I tried on different
          roles - I was doing painting, playing musical instruments, cooking
          desserts and other food. A few years ago I tried photography. For now,
          I have been doing it for about 4 years and I am really enjoying that.
          Everything started with taking photos of flowers, insects, and food as
          usual. But when I was getting older my world vision was constantly
          updating. And it reflected on my art. I started to create different
          magical scenes and save the screenshots of them using a camera.
          <br />
          <br />
          At this point, most of my photos were taken on a $ 120 camera, which I
          bought on the secondary market. And it flows into one of the messages
          of my art - you don't need to have any expensive equipment to create,
          it doesn't matter where and how you live. The only thing that you need
          is your own desire to bring your ideas into real life.
          <br />
          <br />
          And my second message is about doing what you want to do. Don’t think
          about what the others will think about your stuff. Don’t be shy of
          being weird. Just do what you want, keep going and someday you will be
          rewarded for your work.
          <br />
          <br />I create my artworks to bring some more positive and genuine
          emotions to the world and to show how beautiful it is. I try to share
          all my feelings, which I felt when I was creating a certain artwork
          with the audience. So, I want people to forget about all the bad
          things in their life and dive into my magic world.
          <br />
          <br />
          <span>Join me in this incredible journey!</span>
        </S.Text>
      </Container>
    </S.Section>
  );
};

export default About;
