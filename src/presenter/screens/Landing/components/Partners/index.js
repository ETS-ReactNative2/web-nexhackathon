import React from 'react'

import {
  Content,
  Partner,
  Realization,
  Nex,
  Partner2,
  Shawee
} from './styles'

import NexLogo from '../../../../../_assets/icons/nex-logo.svg'
import ShaweeLogo from '../../../../../_assets/icons/shawee-logo.svg'

function Partners(){
  return(
    <Content>
      <Partner>
        <Realization>Realização:</Realization>
        <Nex src={NexLogo} />
      </Partner>
      <Partner2>
        <Realization>Apoio:</Realization>
        <Shawee src={ShaweeLogo} />
      </Partner2>
    </Content>
  )
}

export default Partners;