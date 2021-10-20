import React from 'react';

import {
  Introduction,
  MountainImage,
  IntroductionContent,
  Date,
  EventFormat,
  IntroductionTitle,
  IntroductionDescription,
  IntroductionImage,
} from './styles';

import Montain from '../../../../../_assets/images/Montain.svg'
import WeLoveHackaImage from '../../../../../_assets/images/welovehackas.png'

function IntroductionSection() {
  return (
    <Introduction>
      <MountainImage src={Montain} />
      <IntroductionContent>
        <Date>De XX à XX de Novembro de 2021</Date>
        <EventFormat>Online.</EventFormat>
        <IntroductionTitle>O que é um Hackathon?</IntroductionTitle>
        <IntroductionDescription>Hackathons são grandes oportunidades de aprender, conhecer e experimentar coisas novas. Aqui todos nós somos apaixonados por desafios e amamos promover nosso networking.</IntroductionDescription>
        <IntroductionImage src={WeLoveHackaImage} />
      </IntroductionContent>
    </Introduction>
  );
};

export default IntroductionSection;
