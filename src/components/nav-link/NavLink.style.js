import styled from 'styled-components';

export const Button = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  line-height: 23px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 19px;
  }
`;
