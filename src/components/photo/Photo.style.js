import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  width: 25%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  height: 40px;
  bottom: -15%;
  left: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.25);
  transition: 0.2s ease-in-out;
`;

export const ImgContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 400px;
  transition: transform 0.2s ease;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: initial;
    max-width: 100%;
  }

  .lazyload-wrapper {
    height: 100%;
  }

  :hover {
    transform: translateY(-4px);

    ${Overlay} {
      bottom: -5px;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
  display: block;
  transition: 0.2s;
`;
