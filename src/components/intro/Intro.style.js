import styled from 'styled-components';

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 92px;
  z-index: 100;
`;

export const PersonalPhoto = styled.img`
  border: 4px solid #fff;
  border-radius: 50%;
  margin-bottom: 7px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 75px;
  font-weight: 600;
  line-height: 108.38px;
  margin-bottom: 18px;
  text-align: center;
`;

export const Description = styled.p`
  color: #fff;
  font-family: 'Courier Prime';
  font-size: 18px;
  line-height: 20.21px;
  font-weight: 400;
  text-align: center;
`;
