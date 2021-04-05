import React from 'react';

import { 
  HeaderContent,
  LogoImg,
  Actions
} from './styles';

import LogoImage from '../../_assets/images/nex_logo.svg'

function Header({children}) {
  return (
    <HeaderContent>
      <LogoImg src={LogoImage} />
      <Actions>
        {children}
      </Actions>
    </HeaderContent>
  );
};

export default Header;
