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
  background-position-y: 30%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Fab = styled.button`
  position: absolute;
  background: none;
  border: none;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  color: #fff;
  right: 45px;
  bottom: 100px;
  cursor: pointer;
  font-size: 30px;
  transition: background-color 0.2s ease;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
