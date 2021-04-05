import React from 'react'

import {
  Content,
  Text,
  GreenText,
  Icon
} from './styles'

import Heart from '../../../../../_assets/icons/heart.svg'

function Footer(){
  return(
    <Content>
      <Text>Total de <GreenText>200</GreenText> participantes já cadastrados.<Icon src={Heart} /></Text>
    </Content>
  )
}

export default Footer;