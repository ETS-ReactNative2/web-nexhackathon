import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--container-horizontal-padding);

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

export const Illustration = styled.img`
  width: 50%;

  @media (max-width: 850px) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 850px) {
    margin-top: 5vh;
  }
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 6rem;
  line-height: 6rem;

  display: flex;
  align-items: flex-end;

  color: var(--white--color);

  @media (max-width: 600px) {
    font-size: 5rem;
    line-height: 5rem;
  }

  @media (max-width: 350px) {
    font-size: 4rem;
    line-height: 4rem;
  }

  @media (max-width: 290px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`

export const Error = styled.span`
  font-weight: 400;
  font-size: 4rem;
  line-height: 4rem;

  color: var(--white--color);
  filter: opacity(40%);

  @media (max-width: 600px) {
    font-size: 3rem;
    line-height: 3rem;
  }

  @media (max-width: 350px) {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media (max-width: 290px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`

export const Subtitle = styled.h4`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5rem;

  color: var(--green--color);
  margin-top: 20px;
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.2rem;

  color: var(--white--color);
  filter: opacity(80%);
  margin-top: 10px;
`

export const BackButton = styled.button`
  margin-top: 25px;
  width: 50%;
  padding: 10px 0;
  border-radius: var(--button-radius);
  background: #24AF67;
  font-weight: 600;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  transition: .3s;

  &:hover {
    filter: opacity(80%);
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`
