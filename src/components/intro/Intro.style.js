import styled from 'styled-components';
import heroBackground from 'assets/images/hero-background.png';

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const PersonalPhoto = styled.img`
  border: 4px solid ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  margin-bottom: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 150px;
    height: auto;
  }
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

export const Hero = styled.section`
  background-image: linear-gradient(
      360deg,
      rgba(25, 21, 33, 0.65) 4.57%,
      rgba(25, 21, 33, 0) 24.55%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${heroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  height: 100vh;
  padding-top: 170px;
  position: relative;
`;
