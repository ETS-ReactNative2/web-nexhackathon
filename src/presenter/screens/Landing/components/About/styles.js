import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wave = styled.img`
  width: 100%;
  margin-bottom: -1px;
`
export const Main = styled.main`
  width: 100%;
  background: var(--linear-gradient);
  padding: 5vh var(--container-horizontal-padding);
`

export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1{
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
  }

  p{
    text-align: center;
    margin-top: 3rem;
    max-width: 1000px;
    font-weight: normal;
    font-size: 1.1rem;
    color: var(--white--color);
  }

  @media(max-width: 768px){
    p{
      font-size: 1rem;
      margin-top: 1.5rem;
    }
  }
`

export const Instructions = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h3{
    font-weight: normal;
    font-size: 1.1rem;
  }

  @media(max-width: 768px){
    h3{
      font-size: 1rem;
      text-align: center;
    }
  }
`

export const CardsContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  max-width: 1380px;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 8rem;

  @media(max-width: 1024){
    padding: 0 2%;
    display: flex;
    flex-direction: column;
  }

  @media(max-width: 768px){
    padding: 0 2%;
    display: flex;
    flex-direction: column;

  }

`

export const Cards = styled.div`
  width: 100%;
  text-align: justify;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;

  span{
    margin-left: 1rem;
    color: var(--white--color);
    font-size: 1.1rem;
    line-height: 1.4rem;
  }

  @media(max-width: 980px){
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
      margin-top: 1rem;
    }
  }
`

export const Icon = styled.img`
  width: 45px;
  color: var(--white--color)
`

export const Action = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vh;

  button{
    padding: 0.7rem 1.5rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    color: #15AB89;
    background: var(--white--color);
    border-radius: var(--button-radius);
    cursor: pointer;
  }
`
