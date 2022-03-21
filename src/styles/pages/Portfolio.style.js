import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { rgba } from 'polished';
import { Section as BaseSection } from 'components/section';

export const Section = styled(BaseSection)`
  padding: 90px 20px 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 80px 10px 0 10px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 10px;
  }
`;

export const SelectsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  column-gap: 20px;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    column-gap: 10px;
    margin-bottom: 10px;
  }
`;

export const ButtonResetFilter = styled.div`
  min-width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  transition: 0.2s ease;

  svg {
    width: 15px;
    height: 15px;
    transition: 0.5s ease;
  }

  :hover {
    background-color: ${({ theme }) => rgba(theme.palette.common.white, 0.9)};
    transform: translateY(1px);
  }

  :hover svg {
    transform: rotate(-360deg);
  }
`;

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const FilterMessage = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
