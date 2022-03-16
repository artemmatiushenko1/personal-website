import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const LabelsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HelpreText = styled.label`
  color: #d35400;
  font-size: 14px;
  animation: ${fadeInAnimation} 0.2s ease;
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
