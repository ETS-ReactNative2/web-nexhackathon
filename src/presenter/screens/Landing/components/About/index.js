import React from "react";

import {
  Content,
  Wave,
  Main,
  Title,
  Instructions,
  CardsContainer,
  Cards,
  Icon,
  Action,
} from "./styles";

import AboutWaveImg from "../../../../../_assets/images/about_wave.svg";
import EditImg from "../../../../../_assets/icons/edit.svg";
import GroupImg from "../../../../../_assets/icons/group.svg";
import NetworkImg from "../../../../../_assets/icons/network.svg";
import RouteImg from "../../../../../_assets/icons/route.svg";

function AboutSection() {
  return (
    <Content>
      <Wave src={AboutWaveImg} />
      <Main>
        <Title>
          <h1>Como funciona ?</h1>
          <p>
            Hackathon é um evento inovador, que reúne programadores, designers e
            outros profissionais ligados ao desenvolvimento de soluções em
            maratonas de trabalho com o objetivo de criar resoluções específicas
            para um ou vários desafios.
          </p>
        </Title>
        <Instructions>
          <h3>Siga os passos a seguir para participar da competição</h3>
          <CardsContainer>
            <Cards>
              <Icon src={EditImg} />
              <span>
                O primeiro passo para participar do nosso hackathon é você se
                registrar, assim podemos ter acesso aos seus dados e saber se
                você é uma pessoa real, além de poder receber os prêmios e
                benefícios.
              </span>
            </Cards>
            <Cards>
              <Icon src={GroupImg} />
              <span>
                Em seguida você deverá formar uma equipe de até 5 pessoas com os
                participantes deste evento, lembre-se, as funções para os
                membros da equipe são Business, Marketing, UI/UX e
                Desenvolvedores.
              </span>
            </Cards>
            <Cards>
              <Icon src={NetworkImg} />
              <span>
                Assim que feito seu cadastro você terá acesso a um servidor onde
                haverão vários outros participantes e a proposta é que você faça
                o network com essas pessoas, não tenha medo de se apresentar,
                esta etapa é muito importante!
              </span>
            </Cards>
            <Cards>
              <Icon src={RouteImg} />
              <span>
                Com a sua equipe você ja poderá desenvolver uma solução para o
                problema proposto e entregá-la até a data definida para a
                avaliação. Assim você irá concluir um hackathon e concorrer as
                premiações.
              </span>
            </Cards>
          </CardsContainer>
        </Instructions>
        <Action>
          <button>Inscreva-Se</button>
        </Action>
      </Main>
    </Content>
  );
}

export default AboutSection;
