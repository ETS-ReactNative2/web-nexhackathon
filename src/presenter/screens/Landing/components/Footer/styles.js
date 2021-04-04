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
  font-size: 1.1rem;
`

export const GreenText = styled.span`
  color: var(--dark-green--color);
`