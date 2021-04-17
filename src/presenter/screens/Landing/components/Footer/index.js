import React, { useEffect, useState } from 'react'
import api from '../../../../../infra/services/http'

import {
  Content,
  Text,
  GreenText,
  Icon
} from './styles'

import Heart from '../../../../../_assets/icons/heart.svg'

function Footer(){
  const [connections, setConnections] = useState('')

  useEffect(() => {
    api.get('/users/connections').then((response) => {
      if (response && response.data) {
        setConnections(response.data)
      }
    })
  }, [])

  return(
    <Content>
      <Text>Total de <GreenText>{connections}</GreenText> participantes já cadastrados.<Icon src={Heart} /></Text>
    </Content>
  )
}

export default Footer;