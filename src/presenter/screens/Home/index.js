import React from 'react'

import {
  Wrapper,
  Container,

  MissionsContent,
  MissionsHeader,
  MissionsText,
  Bold,
  MissionsMain,

  ScrollDownIndcator,

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
import ProfileContent from './components/ProfileContent'
import ProfileLevelBar from './components/LevelBar'
import MissionsCard from './components/MissionCard'

// Icons import
import ProfilePicIcon from '../../../_assets/icons/user-picture.svg'
import EditIcon from '../../../_assets/icons/write.svg'
import MessageIcon from '../../../_assets/icons/message.svg'
import TargetIcon from '../../../_assets/icons/target.svg'

import AwardIcon from '../../../_assets/icons/award.svg'
import TicketIcon from '../../../_assets/icons/ticket.svg'
import UserIcon from '../../../_assets/icons/user.svg'
import UsersIcon from '../../../_assets/icons/users.svg'

// Functions
import CalculateProfileLevel from '../../../application/calculateUserProfileLevel'

const user = {
  "name": "Pedro Augusto Ribeiro Marques",
  "school": "",
  "date_of_birth": "",
  "email": "",
  "profile_image": "teste",
  "headline": "",
  "description": "",
  "points": "",
  "linkedin": "",
  "github": "",
  "instagram": "",
  "skills": [
    {
      "id": "teste"
    }
  ],
  "profile_image_url": "https://instagram.fgru5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/135230667_715566819095454_5830822290069434671_n.jpg?tp=1&_nc_ht=instagram.fgru5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=YhAAuybDGYcAX_d9w-H&edm=AP_V10EAAAAA&ccb=7-4&oh=30131dc00a7c01091fe9ed70c7263d80&oe=6091249A&_nc_sid=4f375e",
}

function Home() {

  return (
    <Wrapper>
      <Header>

      </Header>

      <Container>
        <ProfileContent
          name={user.name}
          profile_image={user.profile_image_url}
        />

        <ProfileLevelBar
          user={user}
        />

        <MissionsContent>
          <MissionsHeader>
            <MissionsText>{CalculateProfileLevel(user) >= 100 ? "Parabéns. Você já é um" : "Evolua o seu perfil para tornar-se"} <Bold style={{ marginLeft: '5px' }} >all-star!</Bold></MissionsText>
            <MissionsText><Bold>Perfil:</Bold>{CalculateProfileLevel(user) >= 100 ? "All Star" : "Iniciante"}</MissionsText>
          </MissionsHeader>

          <MissionsMain>
            <MissionsCard
              MissionIcon={ProfilePicIcon}
              Title="Adicionar foto do perfil"
              Description="Escolha uma foto do perfil que represente você no Nex."
              isCheck={user.profile_image ? true : false}
            />

            <MissionsCard
              MissionIcon={EditIcon}
              Title="Adicionar um título"
              Description="Conte qual é o seu cargo para os outros participantes."
              isCheck={user.headline ? true : false}
            />

            <MissionsCard
              MissionIcon={MessageIcon}
              Title="Adicionar uma bio"
              Description="Deixa a gente saber um pouco mais sobre você."
              isCheck={user.description ? true : false}
            />

            <MissionsCard
              MissionIcon={TargetIcon}
              Title="Adicionar habilidades"
              Description="Adicione suas habilidades para despertar interesse em algum time."
              isCheck={user.skills.length >= 1 ? true : false}
            />
          </MissionsMain>
        </MissionsContent>

        <ScrollDownIndcator />

        {/* On Desktop Devices */}
        <ShortcutsContent>
          <ShortcutText>Atalhos</ShortcutText>
          <ShortcutMain>
            <ShortcutItem>
              <ShortcutIcon src={AwardIcon} />
              <ShortcutTitle>Classificação</ShortcutTitle>
            </ShortcutItem>

            <ShortcutItem>
              <ShortcutIcon src={TicketIcon} />
              <ShortcutTitle>Convite</ShortcutTitle>
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

      {/* On Mobile Devices */}
      <NavgationBarContent>
        <NavigationBarItem>
          <NavigationBarIcon src={AwardIcon} />
          <NavigationBarTitle>Ranking</NavigationBarTitle>
        </NavigationBarItem>

        <NavigationBarItem>
          <NavigationBarIcon src={TicketIcon} />
          <NavigationBarTitle>Convite</NavigationBarTitle>
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
