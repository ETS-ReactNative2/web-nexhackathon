import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark-green--color);
`

export const RewardsConstainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;

  @media(max-width: 980px){
    flex-direction: column;
    justify-content:center;
  }
`

export const Reward = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const RewardIcon = styled.img`
  width: 10rem;
`

export const RewardInfo = styled.h3`
  max-width: 300px;
  text-align: center;
  font-weight: normal;
  font-size: 1.2rem;
  color: var(--light-green--color);

  @media(max-width: 980px){
    max-width: none;
  }
`