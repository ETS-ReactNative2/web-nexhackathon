import React from 'react'

import {
  Content,
  Container,
  Header,
  ArrowLink,
  ArrowImg,
  TextHeader,
  Alert,
  FormTeam,
  InputField,
  InputText,
  InputTextArea,
  Label,
  Picture,
  PictureSingle,
  SubmitTeam,
  AddPicture
} from './styles'

import arrowLeft from '../../../_assets/icons/left-arrow.svg'
import addPicture from '../../../_assets/icons/add-img.svg'

function CreateTeams(){
  return(
    <Content>
      <Header>
        <Container>
          <ArrowLink href="/">
            <ArrowImg src={arrowLeft}/>
          </ArrowLink>
          <TextHeader>Criando um</TextHeader>
          <TextHeader>time.</TextHeader>
        </Container>
      </Header>

      <FormTeam>
        <InputField>
          <Label>Nome do time</Label>
          <InputText />
        </InputField>

        <InputField>
          <Label>Descrição</Label>
          <InputTextArea />
        </InputField>

        <Picture>
          <PictureSingle>
            <AddPicture src={addPicture}/>
          </PictureSingle>
          <PictureSingle>
            <AddPicture src={addPicture}/>
          </PictureSingle>
          <PictureSingle>
            <AddPicture src={addPicture}/>
          </PictureSingle>
          <PictureSingle>
            <AddPicture src={addPicture}/>
          </PictureSingle>
          <PictureSingle>
            <AddPicture src={addPicture}/>
          </PictureSingle>
        </Picture>

        <Alert>Não aconselhamos criar um time com menos de 4 integrantes!</Alert>

        <SubmitTeam>Criar time</SubmitTeam>
      </FormTeam>

    </Content>
  )
}

export default CreateTeams;