import React from 'react';

import {
  About,
  ArrowImage,
  AboutContent,
  ArrowTitle,  
} from './styles'

import ArrowDown from '../../../../../_assets/images/arrowDown.png'

function AboutSection() {
  return (
    <About>
      <ArrowImage src={ArrowDown} />
      <AboutContent>
        <ArrowTitle>
          <h1> Experience </h1>
        </ArrowTitle>
      </AboutContent>
    </About>
  )

};

export default AboutSection;
