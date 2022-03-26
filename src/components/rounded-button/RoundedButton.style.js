import styled from 'styled-components';
import { rgba } from 'polished';

export const Button = styled.button`
  background-color: ${({ theme }) => rgba(theme.palette.common.white, 0.3)};
  backdrop-filter: blur(15px);
  border-radius: 200px;
  border: none;
  font-family: ${({ theme }) => theme.typography.fonts.primary}, monospace;
  color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  align-items: center;
  padding: 11.5px 23px;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  transition: transform 0.2s ease;

  /* :hover {
    transform: translateY(2px);
  }

  :active {
    transform: translateY(4px);
  } */

  svg {
    margin-right: 17px;
    width: 24px;
    height: auto;
  }
`;
