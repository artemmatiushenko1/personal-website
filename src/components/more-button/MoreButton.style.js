import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(20px);
  border-radius: 200px;
  border: none;
  font-family: 'Courier Prime', monospace;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 15px 23px;
  cursor: pointer;
  font-size: 16px;
  line-height: 16px;
  position: absolute;
  bottom: 70px;
  transition: transform 0.2s ease;

  :hover {
    transform: translateY(2px);

    svg #wheel {
      transform: translateY(9px);
    }
  }

  :active {
    transform: translateY(4px);
  }

  svg {
    margin-right: 17px;
  }

  svg #wheel {
    transition: transform 0.2s ease-in;
  }
`;
