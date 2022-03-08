import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 95px 0;
  min-height: 100vh;
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
