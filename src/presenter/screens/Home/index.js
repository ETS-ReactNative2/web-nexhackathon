/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react'

import api from '../../../infra/services/http'
import { navigator } from '../../../application/navigator'

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

import Loader from '../Loader'
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

function Home() {

  const [user, setUser] = useState({})

  useEffect(() => {
    api.get('/users/profile').then(response => {
      if (response && response.data) {
        const data = response.data

        const percentValue = () => {
          var initvalue = 0
          {data.profile_image ? initvalue+=25 : 0}
          {data.headline ? initvalue+=25 : 0}
          {data.description ? initvalue+=25 : 0}
          {data.skillLevel >= 1 ? initvalue+=25 : 0}

          return initvalue
        }

        setUser({
          ...data,
          skillLevel: data.skills.length,
          surname: data.name.split(' ')[0],
          profileLevel: percentValue(data)
        })
      }
    })
  }, [])

  function handleNavigateToTeams() {
    navigator('teams')
  }

  if (!user) {
    return <Loader />
  }

  return (
    <Wrapper>
      <Header>

      </Header>

      <Container>
        <ProfileContent
          name={user.surname}
          profile_image={user.profile_image_url}
        />

        <ProfileLevelBar
          value={user.profileLevel}
        />

        <MissionsContent>
          <MissionsHeader>
            <MissionsText>{user.profileLevel >= 100 ? "Parabéns. Você já é um" : "Evolua o seu perfil para tornar-se"} <Bold style={{ marginLeft: '5px' }} >all-star!</Bold></MissionsText>
            <MissionsText><Bold>Perfil:</Bold>{user.profileLevel >= 100 ? "All Star" : "Iniciante"}</MissionsText>
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
              isCheck={user.skillLevel >= 1 ? true : false}
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

        <NavigationBarItem onClick={handleNavigateToTeams}>
          <NavigationBarIcon src={UsersIcon} />
          <NavigationBarTitle>Times</NavigationBarTitle>
        </NavigationBarItem>
      </NavgationBarContent>
    </Wrapper>
  );
};

export default Home;
