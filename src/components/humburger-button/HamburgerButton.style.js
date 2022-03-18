import styled from 'styled-components';

export const Box = styled.div`
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
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 41px;
    height: 41px;
  }
`;

export const Line = styled.span`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: all 0.5s;
`;

export const LineTop = styled(Line)`
  top: ${({ isActive }) => (isActive ? '50%' : '13px')};
  transform: ${({ isActive }) =>
    isActive ? 'translateY(-50%) rotate(45deg)' : null};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    top: ${({ isActive }) => (isActive ? '50%' : '9px')};
  }
`;

export const LineMiddle = styled(Line)`
  left: 0;
  left: ${({ isActive }) => (isActive ? '-100%' : '0')};
  opacity: ${({ isActive }) => (isActive ? '0' : '1')};
`;

export const LineBottom = styled(Line)`
  bottom: ${({ isActive }) => (isActive ? '50%' : '13px')};
  transform: ${({ isActive }) =>
    isActive ? 'translateY(50%) rotate(-45deg)' : null};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    bottom: ${({ isActive }) => (isActive ? '50%' : '9px')};
  }
`;
