import styled from 'styled-components';

export const Section = styled.section`
  padding: 120px 20px 0 20px;
  min-height: 100vh;
  height: 100vh;
  background-color: #202020;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 30px;
  }
`;

export const Box = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  padding: 10px;
  transition: transform 0.2s ease;

  :hover {
    transform: translateY(-2px);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Img = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
`;

export const Text = styled.div``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 15px;
  font-weight: 400;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.palette.common.white};
  opacity: 0.5;
  font-size: 10px;
  text-overflow: ellipsis;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
`;
