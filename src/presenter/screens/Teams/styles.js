import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin-top: var(--container-margin-top);
  padding: var(--container-vertical-padding) var(--container-horizontal-padding);

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white--color);
  text-align: start;

  margin-bottom: 20px;

  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`

export const Button = styled.button`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--white--color);

  background: var(--linear-gradient);
  padding: 10px 15px;
  border-radius: var(--button-radius);
  cursor: pointer;

  width: 25vw;

  @media (max-width: 700px) {
    width: 45vw;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const TeamsWrapper = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 5rem;
  margin-top: 35px;

  @media (max-width: 900px) {
    grid-gap: 2rem 2rem;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`

