import styled from 'styled-components';

export const Footer = styled.footer`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 12px;
  text-align: center;
  padding: 70px 30px 40px 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 40px 30px;
  }
`;
