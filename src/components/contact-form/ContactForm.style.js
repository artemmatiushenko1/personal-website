import { RoundedButton } from 'components/rounded-button';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 540px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px 15px;
  font-family: inherit;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  padding: 10px 15px;
  font-family: inherit;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  height: 150px;
  resize: none;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const SendButton = styled(RoundedButton)`
  background-color: #fff;
  text-transform: uppercase;
  color: #202020;
  justify-content: center;
  align-self: flex-end;
  flex-direction: row-reverse;
  padding-top: 10px;
  padding-bottom: 10px;

  div {
    transition: 0.5s;
  }

  &.pressed {
    div {
      transform: translateX(50%);
    }

    svg {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    opacity: 1;
    margin-right: 0;
    margin-left: 17px;
    transition: 0.2s;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;
