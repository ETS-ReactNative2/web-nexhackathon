import React from 'react'

import {
  Content,
  Partner,
  // Support,
  Title,
  LogoImage,
} from './styles'

import NexLogo from '../../../../../_assets/icons/nex-logo.svg'
// import ShaweeLogo from '../../../../../_assets/icons/shawee-logo.svg'

function Partners(){
  return(
    <Content>
      <Partner>
        <Title>Realização:</Title>
        <LogoImage src={NexLogo} />
      </Partner>
      {/* <Support>
        <Title>Apoio:</Title>
        <LogoImage src={ShaweeLogo} />
      </Support> */}
    </Content>
  )
}

export default Partners;