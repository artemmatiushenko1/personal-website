import styled from 'styled-components';
import Masonry from 'react-masonry-css';

export const Section = styled.section`
  padding: 90px 20px 0 20px;
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

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      padding-left: 10px;
    }
  }

  .my-masonry-grid_column > div {
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      margin-bottom: 10px;
    }
  }
`;

export const SelectsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  column-gap: 20px;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonResetFilter = styled.div`
  min-width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  transition: 0.2s ease;

  svg {
    width: 15px;
    height: auto;
    transition: 0.5s ease;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: translateY(1px);
  }

  :hover svg {
    transform: rotate(-360deg);
  }
`;
