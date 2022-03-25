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
