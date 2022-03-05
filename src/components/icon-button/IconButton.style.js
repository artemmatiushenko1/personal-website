import styled from 'styled-components';

export const Button = styled.a`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  svg {
    transition: transform 0.2s ease-in;
  }

  :hover {
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(10px);

    svg {
      transform: scale(0.85);
    }
  }
`;
