import React from 'react';

import {
  Content,
  PathLine,
  Circle,
  MatterContent,
  ContentTitle,
  ContentDecription
} from './styles';

function Matter({ Title, Description }) {
  return (
    <Content>
      <PathLine />
      <Circle />
      <MatterContent>
        <ContentTitle>{Title}</ContentTitle>
        <ContentDecription>{Description}</ContentDecription>
      </MatterContent>
    </Content>
  );
};

export default Matter;
