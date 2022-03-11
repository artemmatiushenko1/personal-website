import styled from 'styled-components';

export const ImgContainer = styled.div`
  max-width: 400px;
  height: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: initial;
    max-width: 100%;
  }

  .lazyload-wrapper {
    height: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
  display: block;
  transition: 0.2s;
`;
