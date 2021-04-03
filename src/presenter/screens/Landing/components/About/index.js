import React from 'react';

import {
  Content,
  Wave,
  Main,
  Title,
  Instructions,
  Cards,
  CardSingle,
  Icon,
  Action
} from './styles'

import AboutWaveImg from '../../../../../_assets/images/about_wave.svg'
import EditImg from '../../../../../_assets/icons/edit.svg'
import GroupImg from '../../../../../_assets/icons/group.svg'
import NetworkImg from '../../../../../_assets/icons/network.svg'
import RouteImg from '../../../../../_assets/icons/route.svg'


function AboutSection() {
  return (
    <Content>
        <Wave src={AboutWaveImg} />
        <Main>
          <Title>
            <h1>Como funciona ?</h1>
            <p>Hackathon é um evento inovador, que reúne programadores, designers e outros profissionais 
              ligados ao desenvolvimento de soluções em maratonas de trabalho com o objetivo de criar resoluções 
              específicas para um ou vários desafios.
            </p>
          </Title>
          <Instructions>
            <h3>Siga os passos a seguir para participar da competição</h3>
            <Cards>
              <CardSingle>
                <Icon src={EditImg} />
                <span>O primeiro passo para participar do nosso hackathon é você se registrar, 
                  assim podemos ter acesso aos seus dados e saber se você é uma pessoa real, 
                  além de poder  receber os prêmios e benefícios.
                </span>
              </CardSingle>
              <CardSingle>
                <Icon src={GroupImg} />
                <span>O primeiro passo para participar do nosso hackathon é você se registrar, 
                  assim podemos ter acesso aos seus dados e saber se você é uma pessoa real, 
                  além de poder  receber os prêmios e benefícios.
                </span>
              </CardSingle>
              <CardSingle>
                <Icon src={NetworkImg} />
                <span>O primeiro passo para participar do nosso hackathon é você se registrar, 
                  assim podemos ter acesso aos seus dados e saber se você é uma pessoa real, 
                  além de poder  receber os prêmios e benefícios.
                </span>
              </CardSingle>
              <CardSingle>
                <Icon src={RouteImg} />
                <span>O primeiro passo para participar do nosso hackathon é você se registrar, 
                  assim podemos ter acesso aos seus dados e saber se você é uma pessoa real, 
                  além de poder  receber os prêmios e benefícios.
                </span>
              </CardSingle>
            </Cards>
          </Instructions>
          <Action>
            <button>Inscreva-Se</button>
          </Action>
        </Main>
    </Content>
  );
};

export default AboutSection;