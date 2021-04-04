import React from 'react'

import { 
  Content,
  Title,
  Reward,
  RewardSingle,
  RewardIcon,
  RewardInfo
} from './styles'

import FirstPosition from '../../../../../_assets/images/first-position.svg'
import GiftImg from '../../../../../_assets/images/gift.svg'
import FileStorage from '../../../../../_assets/images/file-storage.svg'

function Rewards(){
  return(
    <Content>
      <Title>Premiação</Title>
      <Reward>
        <RewardSingle>
          <RewardIcon src={GiftImg}></RewardIcon>
          <RewardInfo>Premiação para a melhor solução</RewardInfo>
        </RewardSingle>
        <RewardSingle>
          <RewardIcon src={FirstPosition}></RewardIcon>
          <RewardInfo>Premiação para a melhor solução</RewardInfo>
        </RewardSingle>
        <RewardSingle>
          <RewardIcon src={FileStorage}></RewardIcon>
          <RewardInfo>Premiação para a melhor solução</RewardInfo>
        </RewardSingle>
      </Reward>
    </Content>
  )
}

export default Rewards