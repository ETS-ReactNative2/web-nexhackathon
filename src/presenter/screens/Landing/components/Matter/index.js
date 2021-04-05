import React from 'react';

import {
  Content,
  PathLine,
  Circle,
  MatterContent,
  ContentTitle,
  ContentDescription
} from './styles';

function Matter({ Title, Description }) {
  return (
    <Content>
      <PathLine />
      <Circle />
      <MatterContent>
        <ContentTitle>{Title}</ContentTitle>
        <ContentDescription>{Description}</ContentDescription>
      </MatterContent>
    </Content>
  );
};

export default Matter;
