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
`

export const GreenText = styled.span`
  color: var(--dark-green--color);
  margin: 0 5px;
`

export const Icon = styled.img`
  width: 1rem;
  margin-left: 5px;
`