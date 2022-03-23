import styled from 'styled-components';
import Container from 'components/container';
import { Section as BaseSection } from 'components/section';

export const Section = styled(BaseSection)`
  padding: 90px 20px 20px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 80px 10px 15px 10px;
  }

  ${Container} {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
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
