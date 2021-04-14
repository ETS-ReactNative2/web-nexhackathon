import React from 'react';

import { 
  Container,
  Planet,
  Shadow
} from './styles';

import BluePlanet from '../../../_assets/icons/blue-planet.svg'

function Loader() {
  return (
    <Container>
      <Planet src={BluePlanet} />
      <Shadow />
    </Container>
  );
};

export default Loader;
