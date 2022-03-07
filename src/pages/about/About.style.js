import styled from 'styled-components';
import aboutPhoto from 'assets/images/about-photo.png';

export const Section = styled.section`
  position: relative;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ),
    url(${aboutPhoto});
  height: 100vh;
  background-color: rgb(27, 18, 33);
  background-position-y: 80px;
  background-size: contain;
  background-repeat: no-repeat;

  p {
    color: #fff;
    font-size: 18px;
  }
`;
