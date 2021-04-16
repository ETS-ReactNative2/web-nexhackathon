import React from 'react';

import { 
  Container,
  Header,
  TeamCount,
  UsersImages,
  Image,
  Content,
  Title,
  Description
} from './styles';

function TeamCard({team}) {
  return (
    <Container>
      <Header>
        <TeamCount>{team.members}/5</TeamCount>
        <UsersImages>
          {team.users.map((user, index) => (
            <Image key={index} src={user.profile_image} />
          ))}
        </UsersImages>
      </Header>

      <Content>
        <Title>{team.name}</Title>
        <Description>{team.description}</Description>
      </Content>
    </Container>
  );
};

export default TeamCard;
