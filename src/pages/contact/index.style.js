import styled from 'styled-components';
import Container from 'components/container';

export const Section = styled.section`
  padding: 40px 100px 0 60px;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 40px 90px 0 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 80px 15px 15px 15px;
    height: auto;
  }

  ${Container} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: 100px;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      flex-direction: column;
      justify-content: center;
      row-gap: 50px;
    }
  }
`;

export const Text = styled.div`
  max-width: 450px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    max-width: 540px;
  }
`;

export const Title = styled.h2`
  font-size: 45px;
`;

export const Email = styled.p`
  color: #707070;
  margin-top: 10px;
`;
