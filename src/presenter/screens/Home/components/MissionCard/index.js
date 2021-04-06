import React from 'react';

import {
  MissionCard,
  IconWrapper,
  Icon,
  Checked,
  MissionTitle,
  MissionDescription,
} from './styles';

// Icons import
import SuccessIcon from '../../../../../_assets/icons/success.svg'

function Mission({ MissionIcon, Title, Description }) {
  return (
    <MissionCard>
      <IconWrapper>
        <Icon src={MissionIcon} />
        <Checked src={SuccessIcon} />
      </IconWrapper>

      <MissionTitle>{Title}</MissionTitle>
      <MissionDescription>{Description}</MissionDescription>
    </MissionCard>
  );
};

export default Mission;
