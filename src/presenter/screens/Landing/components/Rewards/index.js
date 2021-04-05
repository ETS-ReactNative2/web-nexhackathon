import React from 'react'

import { 
  Content,
  Title,
  RewardsConstainer,
  Reward,
  RewardIcon,
  RewardInfo
} from './styles'

import FirstPosition from '../../../../../_assets/images/first-position.svg'

function Rewards(){
  return(
    <Content>
      <Title>Premiação</Title>
      <RewardsConstainer>

        <Reward>
          <RewardIcon src={FirstPosition}></RewardIcon>
          <RewardInfo>Premiação para a melhor solução</RewardInfo>
        </Reward>

      </RewardsConstainer>
    </Content>
  )
}

export default Rewards