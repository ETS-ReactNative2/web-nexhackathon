import React, { useState } from 'react';

import {
  Container,
  Banner,
  Video,
  Content,
  Button,
  ButtonIcon,
  Wave,
} from './styles';

import WaveImg from '../../../../../_assets/images/video_wave.svg'
import Speaker from '../../../../../_assets/icons/speaker.svg'
import MutedSpeaker from '../../../../../_assets/icons/muted-speaker.svg'

import Official from '../../../../../_assets/Official.mp4'

function Spotlight() {

  const [speaker, setSpeaker] = useState(false)

  function handleTogleSpeaker() {
    speaker ? setSpeaker(false) : setSpeaker(true)
  }

  return (
    <Container>
      <Banner>
        <Video autoPlay muted={speaker ? '' : 'muted'} loop>
            <source src={Official} type="video/mp4" />
        </Video>
        <Content>
            <Button>
              <ButtonIcon src={speaker ? Speaker : MutedSpeaker} onClick={handleTogleSpeaker} />
            </Button>
            <Wave src={WaveImg} />
        </Content>
      </Banner>
    </Container>
  );
};

export default Spotlight;
