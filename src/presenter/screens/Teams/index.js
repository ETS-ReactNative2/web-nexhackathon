import React, { useEffect, useState } from 'react'

import api from '../../../infra/services/http'
import { navigator } from '../../../application/navigator'

import {
  Wrapper,
  Container,
  Title,
  Button,
  TeamsWrapper,
} from './styles';

import Header from '../../components/Header'
import TeamCard from './components/TeamCard'

function Teams() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    api.get('/teams').then((response) => {
      if(response && response.data) {
        setTeams(response.data)
      }
    })
  }, [])

  function handleNavigateToCreate() {
    navigator('team/create')
  }

  return (
    <Wrapper>
      <Header>

      </Header>

      <Container>
        <Title>Veja também outros times!</Title>
        <Button onClick={handleNavigateToCreate} >Criar time</Button>
        <TeamsWrapper>
        {teams.map((team, index) => (
          <TeamCard 
            key={index}
            team={team}
          />
        ))}
        </TeamsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Teams;
