import React from 'react';

import { 
  Wrapper,

  Header,
  HeaderButtons,
  SignUp,
  SignUpText,
  SignIn,
  SignInText,
  SignInImg,
  LogoImg,
  
  Container
} from './styles';

import SignInIcon from '../../../_assets/icons/log-in.svg'
import LogoImage from '../../../_assets/images/nex_logo.svg'

// Section's Import
import Introduction from './components/Introduction'
import Spotlight from './components/Spotlight'

import history from '../../../application/history';


function Landing() {
  
  function handleNavigateToLogin () {
    history.push('/login')
  }

  return (
    <Wrapper>
      <Header>
          <LogoImg src={LogoImage} />
          <HeaderButtons>
            <SignUp>
              <SignUpText>Participar</SignUpText>
            </SignUp>
            <SignIn onClick={handleNavigateToLogin}>
              <SignInText>Entrar</SignInText>
              <SignInImg src={SignInIcon} />
            </SignIn>
          </HeaderButtons>
      </Header>
      <Container>
        <Introduction />
      </Container>
        <Spotlight />
    </Wrapper>
  );
};

export default Landing;
