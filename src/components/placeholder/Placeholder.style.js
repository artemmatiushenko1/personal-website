import styled from 'styled-components';
import { rgba } from 'polished';

export const PlaceholderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => rgba(theme.palette.common.white, 0.1)};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    & > div {
      width: 40px;
      height: 40px;
    }

    & > div svg {
      width: 30px;
      height: 30px;
    }
  }
`;
