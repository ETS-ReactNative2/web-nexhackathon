import styled, { keyframes } from 'styled-components';

const up = keyframes`
  100% {
    transform: translateY(-25px)
  }
`
const shadow = keyframes`
  100% {
    transform: scaleX(.8)
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Planet = styled.img`
  width: 10rem;
  animation: ${up} .7s ease-in-out infinite alternate;
`;

export const Shadow = styled.div`
  margin-top: 10px;
  width: 9rem;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  filter: opacity(10%);
  animation: ${shadow} .7s ease-in-out infinite alternate;
`;
