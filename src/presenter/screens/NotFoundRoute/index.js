import React from 'react';
import history from '../../../application/history';

import {
  Container,
  Illustration,
  Content,
  Title,
  Error,
  Subtitle,
  Description,
  BackButton,
} from './styles';

// Illustration
import ErrorIllustration from '../../../_assets/images/error-illustration.svg'

function NotFoundRoute() {

  function handleNavigateBack() {
    history.goBack()
  }

  return (
    <Container>
      <Illustration src={ErrorIllustration} />
      <Content>
        <Title>404<Error>error</Error></Title>
        <Subtitle>Oops...</Subtitle>
        <Description>Parece que fomos longe demais e agora estamos perdidos no espaço. Mas não se preocupe, o Nex lembra o caminho e pode nos levar de volta para o planeta mais proximo. </Description>
        <BackButton onClick={handleNavigateBack}>Voltar</BackButton>
      </Content>
    </Container>
  );
};

export default NotFoundRoute;
