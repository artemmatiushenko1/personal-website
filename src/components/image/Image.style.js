import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
  display: block;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;

export const LazyLoadContainer = styled(LazyLoad)`
  &.lazyload-wrapper {
    height: 100%;
  }
`;
