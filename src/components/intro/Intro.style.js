import Container from 'components/container';
import styled, { keyframes } from 'styled-components';
import { RoundedButton } from 'components/rounded-button';
import Image from 'next/image';
import { Section as BaseSection } from 'components/section';
import { motion } from 'framer-motion';

export const Section = styled(BaseSection)`
  height: 100vh;
  display: flex;
  position: relative;

  ${Container} {
    height: 100%;
  }
`;

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  height: 100%;
`;

export const PhotoWrapper = styled.div`
  flex: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
  }
`;

export const TextWrapper = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    position: absolute;
    bottom: 150px;
    left: 0;
    width: 100%;
  }
`;

export const PersonalPhoto = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 64px;
  font-weight: 600;
  line-height: 108.38px;
  margin-bottom: 18px;
  text-align: center;

  span {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    word-wrap: break-word;
    font-size: 55px;
    line-height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 45px;
    line-height: 60px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.palette.common.white};
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  font-size: 18px;
  line-height: 20.21px;
  font-weight: 400;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 15px;

    span {
      display: block;
    }
  }
`;

const float = keyframes`
  0%{
    transform: translateY(0px);
  }

  100% {
    transform: translateY(9px);
  }
`;

export const ButtonBox = styled(motion.div)`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export const AboutButton = styled(RoundedButton)`
  background-color: #202020;
  backdrop-filter: none;
  width: 47px;
  height: 47px;
  padding: 0;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #fff;
    transition: background-color 0.5s;

    path {
      fill: #202020;
      transition: fill 0.2s;
    }
  }

  svg {
    margin: 0;
  }

  svg #wheel {
    animation: ${float} 1s ease alternate infinite;
  }
`;
