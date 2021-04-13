import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 460px){
    text-align: center;
  }
`

export const Text = styled.p`
  color: var(--white--color);
  font-size: 1rem;

  display: flex;
  align-items: center;

  @media(max-width: 460px){
    font-size: .8rem;
  }

  @media(max-width: 320px){
    font-size: .7rem;
  }

  @media(max-width: 290px){
    font-size: .6rem;
  }
`

export const GreenText = styled.span`
  color: var(--dark-green--color);
  margin: 0 5px;
`

export const Icon = styled.img`
  width: 1rem;
  margin-left: 5px;

  @media(max-width: 460px){
    width: .8rem;
  }

  @media(max-width: 320px){
    width: .7rem;
  }
`