import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Box = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);

  div {
    height: 80%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 44px;
    height: 44px;
  }
`;

export const Line = styled.span`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.common.black};
  transition: all 0.5s;
`;

export const LineTop = styled(Line)`
  top: ${({ isActive }) => (isActive ? '50%' : '13px')};
  transform: ${({ isActive }) =>
    isActive ? 'translateY(-50%) rotate(45deg)' : null};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    top: ${({ isActive }) => (isActive ? '50%' : '11px')};
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
    bottom: ${({ isActive }) => (isActive ? '50%' : '11px')};
  }
`;
