import React from 'react';

import {
  Wave,
  About,
  Title,
  AboutDescription,
  Instructions,
} from '.styles'

import AboutWaveImg from '../../../../../_assets/images/about_wave.svg'

function AboutSection() {
  return (
    <About>
      <Wave src={AboutWaveImg} />
      <Title> COMO FUNCIONA? </Title>
      <AboutDescription>
        Hackathon é um evento inovador,
        que reúne programadores,
        designers e outros profissionais ligados
        ao desenvolvimento de soluções em maratonas
        de trabalho com o objetivo de criar resoluções
        específicas para um ou vários desafios.
       </AboutDescription>
       <Instructions>Siga os passos a seguir para participar da competição</Instructions>
    </About>
  );
};

export default AboutSection;