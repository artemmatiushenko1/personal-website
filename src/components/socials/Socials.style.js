import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  right: 45px;
  transform: translateY(-50%);
  row-gap: 5px;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    right: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    left: 20px;
    right: auto;
  }
`;
