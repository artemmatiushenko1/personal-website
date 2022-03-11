import styled from 'styled-components';
import Masonry from 'react-masonry-css';

export const Section = styled.section`
  padding: 120px 20px 0 20px;
  min-height: 100vh;
  background-color: #202020;
`;

export const MasonryGrid = styled(Masonry)`
  &.my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: auto;
  }

  .my-masonry-grid_column {
    background-clip: padding-box;
  }

  .my-masonry-grid_column:not(:first-child) {
    padding-left: 20px;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 20px;
  }
`;

export const ImgContainer = styled.div`
  max-width: 400px;
  height: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: initial;
  }

  .lazyload-wrapper {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
    display: block;
    transition: 0.2s;
  }
`;
