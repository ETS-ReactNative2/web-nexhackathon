import React from 'react';

import {
  LevelBar,
  LevelBarIndicator,
} from './styles';

import CalculateProfileLevel from '../../../../../application/calculateUserProfileLevel'

function ProfileLevelBar({user}) {
  return (
    <LevelBar>
      <LevelBarIndicator style={{ width: `${CalculateProfileLevel(user)}%` }} />
    </LevelBar>
  );
};

export default ProfileLevelBar;
