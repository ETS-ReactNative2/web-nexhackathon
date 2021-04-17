import React from 'react'

import { 
  ProfileWrapper,
  ProfileImage,
  UserImage,
  Dot,
  ProfileText,
  Text,
} from './styles';

import defaultProfileImg from '../../../../../_assets/images/defaultProfile.svg'

function ProfileContent({profile_image, name}) {

  const hours = (new Date()).getHours();
  const nowTime = (hours >= 6 && hours < 18 ? 'um ótimo dia' : 'uma ótima noite')

  return (
    <ProfileWrapper>
      <ProfileImage>
        <UserImage src={profile_image ? profile_image : defaultProfileImg} />
        <Dot />
      </ProfileImage>
      <ProfileText>
        <Text>Olá, {name}</Text>
        <Text>tenha {nowTime}!</Text>
      </ProfileText>
    </ProfileWrapper>
  );
};

export default ProfileContent;
