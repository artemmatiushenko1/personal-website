import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #202020;
  font-size: 14px;
  width: 80px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  height: 30px;
  bottom: 0;
  transform: translateY(100%);
  opacity: 0;
  left: 10px;
  background-color: ${({ theme }) => theme.palette.common.white};
  transition: transform 0.2s ease;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 20px;
    width: 50px;
    font-size: 10px;
  }
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 400px;
  transition: transform 0.2s ease;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 60vw;
  }

  :hover {
    transform: translateY(-4px);

    ${Overlay} {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
