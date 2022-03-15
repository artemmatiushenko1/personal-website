import Container from 'components/container';
import styled from 'styled-components';
import { RoundedButton } from 'components/rounded-button';

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  height: 100%;
`;

export const PhotoWrapper = styled.div`
  width: 168px;
  height: 168px;
  margin-bottom: 7px;
  border: 4px solid ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 150px;
    height: 150px;
  }
`;

export const PersonalPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 75px;
  font-weight: 600;
  line-height: 108.38px;
  margin-bottom: 18px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    word-wrap: break-word;
    font-size: 65px;
    line-height: 80px;

    span {
      display: block;
    }
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
    font-size: 16px;

    span {
      display: block;
    }
  }
`;

export const Section = styled.section`
  background-color: #202020;
  max-height: 100vh;
  height: 100vh;
  position: relative;

  ${Container} {
    height: 100%;
  }
`;

export const AboutButton = styled(RoundedButton)`
  margin-top: 70px;
  :hover {
    svg #wheel {
      transform: translateY(9px);
    }
  }

  svg #wheel {
    transition: transform 0.2s ease-in;
  }
`;
