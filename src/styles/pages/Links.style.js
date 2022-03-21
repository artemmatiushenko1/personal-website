import styled from 'styled-components';
import { Section as BaseSection } from 'components/section';

export const Section = styled(BaseSection)`
  padding: 120px 20px 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 80px 10px 0 10px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 30px;
  }
`;
