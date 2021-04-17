import React from 'react'

import {
  Section,
  Container,
  ArrowBack,
  FieldImage,
  FormAlert,
  FormTeams,
  InputField,
  InputSelect,
  InputFields,
  InputOptions,
  TextArea,
  PitchForm,
  InputText,
  Menu,
  MenuText,
  Submit
} from './styles'

import arrowImg from '../../../_assets/icons/left-arrow.svg'
import youtubeImg from '../../../_assets/icons/youtube.svg' 

function SubmitProject(){
  return(
    <Section>
      <Container>

        <Menu>
          <ArrowBack src={arrowImg}/>
          <MenuText>Ufa,</MenuText>
          <MenuText>Vamos enviar o nosso projeto!</MenuText>
        </Menu>

        <FormTeams>

          <InputField>
            <InputText>Desafio</InputText>
            <InputSelect>
              <InputOptions disabled>Selecione um desafio</InputOptions>
              <InputOptions>Desafio 1</InputOptions>
              <InputOptions>Desafio 2</InputOptions>
              <InputOptions>Desafio 3</InputOptions>
              <InputOptions>Desafio 4</InputOptions>
            </InputSelect>
          </InputField>

          <InputField>
            <InputText>Descrição</InputText>
            <TextArea />
          </InputField>

          <FormAlert>
            Os videos devem ser postados no youtube e apenas os 
            links serão enviados aqui.
          </FormAlert>

          <InputField>
            <InputText>Pitch</InputText>
            <InputFields>
              <FieldImage src={youtubeImg}/>
              <PitchForm placeholder="Cole aqui o link do pitch"/>
            </InputFields>
          </InputField>

          <InputField>
            <InputText>Pitch</InputText>
            <InputFields>
              <FieldImage src={youtubeImg}/>
              <PitchForm placeholder="Cole aqui o link do pitch"/>
            </InputFields>
          </InputField>

          <Submit>Enviar projeto</Submit>
        </FormTeams>
      </Container>
    </Section>
  )
}

export default SubmitProject;