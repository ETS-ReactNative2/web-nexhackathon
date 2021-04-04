import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #15AB89;
`

export const Reward = styled.div`
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

export const RewardSingle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

    &:first-child {
      margin-top: 9rem;
    }

    &:last-child {
      margin-top: 9rem;
    }

    @media(max-width: 980px){
      margin-bottom: 3rem;
      &:first-child {
      margin-top: 1rem;
    }

    &:last-child {
      margin-top: 0;
    }
  }
`

export const RewardIcon = styled.img`
`

export const RewardInfo = styled.h3`
  max-width: 300px;
  text-align: center;
  font-weight: normal;
  font-size: 1.7rem;
  color: #15AB89;

  @media(max-width: 980px){
    max-width: none;
  }
`