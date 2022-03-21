import styled from 'styled-components';
import { RoundedButton } from 'components/rounded-button';
import Container from 'components/container';
import { Section as BaseSection } from 'components/section';

export const Section = styled(BaseSection)`
  padding: 95px 0 0 0;

  ${Container} {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-size: 16px;
  max-width: 900px;
  padding: 0px 80px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0px 20px;
  }

  span {
    display: block;
    text-align: center;
  }
`;

export const ExploreButton = styled(RoundedButton)`
  font-size: 16px;
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.common.black};
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
