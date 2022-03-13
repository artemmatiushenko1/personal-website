import styled from 'styled-components';
import { RoundedButton } from 'components/rounded-button';

export const Section = styled.section`
  padding: 50px 20px 0 20px;
  min-height: 100vh;
  background-color: #202020;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  row-gap: 20px;
`;

export const SubmitButton = styled(RoundedButton)`
  margin: 0;
  text-transform: uppercase;
  justify-content: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 7px 10px;
  font-family: inherit;
  font-size: 16px;
  border-radius: 4px;
`;
