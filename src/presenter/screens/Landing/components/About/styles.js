import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wave = styled.img`
  width: 100%;
`
export const Main = styled.main`
  width: 100%;
  padding: 2vh 0 10vh 0;
  background: var(--linear-gradient);
`

export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1{
    font-weight: bold;
    font-size: 2.2rem;
    text-transform: uppercase;
  }

  p{
    text-align: center;
    margin-top: 3rem;
    max-width: 1000px;
    font-weight: normal;
    font-size: 1.4rem;
    color: var(--white--color);
  }

  @media(max-width: 768px){
    p{
      font-size: 1.2rem;
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
    font-size: 1.5rem;
  }

  @media(max-width: 768px){
    h3{
      font-size: 1.3rem;
      text-align: center;
    }
  }
`

export const Cards = styled.div`
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

export const CardSingle= styled.div`
  width: 100%;
  text-align: justify;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;

  span{
    margin-left: 1rem;
    color: var(--white--color);
    font-size: 1.2rem;
    line-height: 2rem;
  }

  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
      margin-top: 1rem;
      font-size: 1.1rem;
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
  margin-top: 3rem;

  button{
    padding: 0.7rem 1.5rem;
    text-transform: uppercase;
    font-size: 1.7rem;
    font-weight: bold;
    color: #15AB89;
    background: var(--white--color);
    border-radius: var(--button-radius);
    cursor: pointer;
  }
`
