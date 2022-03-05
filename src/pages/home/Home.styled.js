import styled from 'styled-components';
import heroBackground from 'assets/images/hero-background.png';

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  position: sticky;
  top: 0;
`;

export const Hero = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(${heroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  height: 100vh;
`;

export const FrontImg = styled.img`
  position: absolute;
  max-width: 100%;
  width: 100%;
  z-index: 2000;
`;

export const BackImg = styled.img`
  position: absolute;
  max-width: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
`;
