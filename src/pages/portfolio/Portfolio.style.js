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
  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
  }
`;
