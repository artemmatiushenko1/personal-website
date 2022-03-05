import styled from 'styled-components';
import heroBackground from 'assets/images/hero-background.png';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const Hero = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(${heroBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`;
