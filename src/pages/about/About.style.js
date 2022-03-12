import styled from 'styled-components';
import { RoundedButton } from 'components/rounded-button';
import Container from 'components/container';

export const Section = styled.section`
  position: relative;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 95px 0 0 0;
  min-height: 100vh;

  ${Container} {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 16px;
  max-width: 900px;
  padding: 0px 80px;
  font-family: ${({ theme }) => theme.typography.fonts.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0px 35px;
  }

  span {
    display: block;
    text-align: center;
  }
`;

export const ExploreButton = styled(RoundedButton)`
  font-size: 16px;
  background-color: #fff;
  color: #000;
  align-self: center;
  margin-top: 40px;

  :hover {
    svg {
      transform-origin: center;
      transform: rotate(360deg);
    }
  }

  svg {
    transition: 0.8s ease;
  }
`;
