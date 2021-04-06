import React from 'react'

import { 
  Wrapper,
  Container,
  ProfileContent,
  ProfileImage,
  UserImage,
  Dot,
  ProfileText,
  Text,

  LevelBar,
  LevelBarIndicator,

  MissionsContent,
  MissionsHeader,
  MissionsText,
  Bold,
  MissionsMain,

  ShortcutsContent,
  ShortcutText,
  ShortcutMain,
  ShortcutItem,
  ShortcutIcon,
  ShortcutTitle,

  NavgationBarContent,
  NavigationBarItem,
  NavigationBarIcon,
  NavigationBarTitle,
} from './styles';

import Header from '../../../components/Header'
import MissionsCard from './components/MissionCard'

// Icons import
import ProfilePicIcon from '../../../_assets/icons/user-picture.svg'
import EditIcon from '../../../_assets/icons/write.svg'
import MessageIcon from '../../../_assets/icons/message.svg'
import TargetIcon from '../../../_assets/icons/target.svg'

import AwardIcon from '../../../_assets/icons/award.svg'
import FolderIcon from '../../../_assets/icons/folder.svg'
import UserIcon from '../../../_assets/icons/user.svg'
import UsersIcon from '../../../_assets/icons/users.svg'

function Home() {
  return (
    <Wrapper>
      <Header>

      </Header>

      <Container>
        <ProfileContent>
          <ProfileImage>
              <UserImage src={'https://instagram.fgru5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/135230667_715566819095454_5830822290069434671_n.jpg?tp=1&_nc_ht=instagram.fgru5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=YhAAuybDGYcAX_d9w-H&edm=AP_V10EAAAAA&ccb=7-4&oh=30131dc00a7c01091fe9ed70c7263d80&oe=6091249A&_nc_sid=4f375e'} />
              <Dot/>
          </ProfileImage>
            <ProfileText>
              <Text>Olá Pedro,</Text>
              <Text>tenha uma ótima noite!</Text>
            </ProfileText>
        </ProfileContent>

        <LevelBar>
          <LevelBarIndicator />
        </LevelBar>

        <MissionsContent>
          <MissionsHeader>
            <MissionsText>Evolua o seu perfil para tornar-se <Bold style={{ marginLeft: '5px' }} >all-star!</Bold></MissionsText>
            <MissionsText><Bold>Perfil:</Bold> Intermediário</MissionsText>
          </MissionsHeader>

          <MissionsMain>
            <MissionsCard
              MissionIcon={ProfilePicIcon}
              Title="Adicionar foto do perfil"
              Description="Escolha uma foto do perfil que represente você no Nex."
            />

            <MissionsCard
              MissionIcon={EditIcon}
              Title="Adicionar um título"
              Description="Conte qual é o seu cargo para os outros participantes."
            />

            <MissionsCard
              MissionIcon={MessageIcon}
              Title="Adicionar uma bio"
              Description="Deixa a gente saber um pouco mais sobre você."
            />
             
            <MissionsCard
              MissionIcon={TargetIcon}
              Title="Adicionar habilidades"
              Description="Adicione suas habilidades para despertar interesse em algum time."
            />
          </MissionsMain>
        </MissionsContent>

        <ShortcutsContent>
          <ShortcutText>Atalhos</ShortcutText>
          <ShortcutMain>
            <ShortcutItem>
              <ShortcutIcon src={AwardIcon} />
              <ShortcutTitle>Classificação</ShortcutTitle>
            </ShortcutItem>
            
            <ShortcutItem>
              <ShortcutIcon src={FolderIcon} />
              <ShortcutTitle>Materiais</ShortcutTitle>
            </ShortcutItem>

            <ShortcutItem>
              <ShortcutIcon src={UserIcon} />
              <ShortcutTitle>Perfil</ShortcutTitle>
            </ShortcutItem>

            <ShortcutItem>
              <ShortcutIcon src={UsersIcon} />
              <ShortcutTitle>Times</ShortcutTitle>
            </ShortcutItem>

          </ShortcutMain>
        </ShortcutsContent>

      </Container>

      <NavgationBarContent>

          <NavigationBarItem>
            <NavigationBarIcon src={AwardIcon} />
            <NavigationBarTitle>Ranking</NavigationBarTitle>
          </NavigationBarItem>

          <NavigationBarItem>
            <NavigationBarIcon src={FolderIcon} />
            <NavigationBarTitle>Materiais</NavigationBarTitle>
          </NavigationBarItem>

          <NavigationBarItem>
            <NavigationBarIcon src={UserIcon} />
            <NavigationBarTitle>Perfil</NavigationBarTitle>
          </NavigationBarItem>

          <NavigationBarItem>
            <NavigationBarIcon src={UsersIcon} />
            <NavigationBarTitle>Times</NavigationBarTitle>
          </NavigationBarItem>

        </NavgationBarContent>
    </Wrapper>
  );
};

export default Home;
