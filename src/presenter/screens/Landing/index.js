import React from 'react';

import { navigator } from '../../../application/navigator'

import { 
  Wrapper,

  HeaderContent,
  LogoImg,
  HeaderButtons,
  SignUp,
  SignUpText,
  SignIn,
  SignInText,
  SignInImg,

  Actions,
  
  Container,
  Matters,
  RewardSection,
  FooterSection,
  PartnersSection
} from './styles';

import SignInIcon from '../../../_assets/icons/log-in.svg'
import LogoImage from '../../../_assets/images/nex_logo.svg'

// Section's Import
import Introduction from './components/Introduction'
import Spotlight from './components/Spotlight'
import Matter from './components/Matter'
import AboutSection from './components/About'
import Rewards from './components/Rewards';
import Footer from './components/Footer';
import Partners from './components/Partners';

function Landing() {
  function handleNavigateToLogin() {
    navigator('login')
  }
 
  return (
    <Wrapper>
      <HeaderContent>
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
      </HeaderContent>

      <Actions >
        <SignUp>
          <SignUpText>Participar</SignUpText>
        </SignUp>
        <SignIn onClick={handleNavigateToLogin}>
          <SignInText>Entrar</SignInText>
          <SignInImg src={SignInIcon} />
        </SignIn>
      </Actions>

      <Container>
        <Introduction />
      </Container>

      <Spotlight />

      <Container>
        <Matters>
          <Matter
            Title='Experience'
            Description='A diversidade de integrantes garante diferentes perspectivas e o limite de tempo cria um clima produtivo. Tudo isso faz com que as equipes cheguem em soluções inovadoras e promovam tanto o crescimento pessoal e profissional.'
          />

          <Matter
            Title='Networking'
            Description='Em um Hackathon, é possível encontrar diversos tipos de pessoas, desde estudantes até jurados, mentores, investidoress. Os perfis são variados, mas todos se unem por um objetivo comum: a busca pela inovação.'
          />

          <Matter
            Title='Learning'
            Description='Durante a maratona, você vai passar alguns dias desenvolvendo um projeto em equipe, discutindo opiniões, trocando ideias, ensinando, aprendendo. Vivendo uma troca intensa de conhecimentos e voltar para casa com novas bagagens de aprendizado e experiência no currículo.'
          />
        </Matters>
      </Container>
      <AboutSection />
      <RewardSection>
        <Container>
          <Rewards />
        </Container>
      </RewardSection>
      <PartnersSection>
        <Partners />
      </PartnersSection>
      <FooterSection>
        <Container>
          <Footer />
        </Container>
      </FooterSection>
    </Wrapper>
  );
};

export default Landing;
