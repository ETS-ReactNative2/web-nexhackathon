import React from 'react'

import { 
  ProfileWrapper,
  ProfileImage,
  UserImage,
  Dot,
  ProfileText,
  Text,
} from './styles';

function ProfileContent({profile_image, name}) {

  const parsedName = name.split(" ")
  const hours = (new Date()).getHours();

  const nowTime = (hours >= 6 && hours < 18 ? 'um ótimo dia' : 'uma ótima noite')

  return (
    <ProfileWrapper>
      <ProfileImage>
        <UserImage src={profile_image} />
        <Dot />
      </ProfileImage>
      <ProfileText>
        <Text>Olá, {parsedName[0]}</Text>
        <Text>tenha {nowTime}!</Text>
      </ProfileText>
    </ProfileWrapper>
  );
};

export default ProfileContent;
