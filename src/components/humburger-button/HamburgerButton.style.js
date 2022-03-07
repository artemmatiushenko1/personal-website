import styled from 'styled-components';

export const Container = styled.div`
  width: 46px;
  height: 46px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;

  div {
    height: 80%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    span {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #000;
      transition: all 0.2s;
    }

    span:nth-of-type(1) {
      top: ${({ isActive }) => (isActive ? '50%' : '13px')};
      transform: ${({ isActive }) =>
        isActive ? 'translateY(-50%) rotate(45deg)' : null};
    }

    span:nth-of-type(2) {
      left: 0;
      left: ${({ isActive }) => (isActive ? '-100%' : '0')};
      opacity: ${({ isActive }) => (isActive ? '0' : '1')};
    }

    span:nth-of-type(3) {
      bottom: ${({ isActive }) => (isActive ? '50%' : '13px')};
      transform: ${({ isActive }) =>
        isActive ? 'translateY(50%) rotate(-45deg)' : null};
    }
  }
`;
