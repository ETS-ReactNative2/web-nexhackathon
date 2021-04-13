import React, { useContext } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Context } from '../../../infra/Context/authContext'

import LeftArrow from '../../../_assets/icons/left-arrow.svg'

import { 
  Container,

  Header,
  Redirect,
  Icon,
  HeaderText,

  Form,
  Label,
  Input,
  Button,
  Error,
  Field,

  Footer,
  FooterText,
  Link
} from './styles';
import { navigator } from '../../../application/navigator';
import history from '../../../application/history';

function Login() {

  const { handleLogin } = useContext(Context)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Por favor insira um endereço de email válido.').required('Por favor insira um endereço de email.'),
      password: Yup.string().min(6, 'Senha inválida').required('Por favor insira uma senha.')
    }),
    onSubmit: values => {
      handleLogin(values)
    }
  })

  function handleNavigateToRegister() {
    navigator('sign-up')
  }

  function handleNavigateBack() {
    history.goBack()
  }

  return (
    <Container>
      <Header>
          <Redirect onClick={handleNavigateBack}>
              <Icon src={LeftArrow} />
          </Redirect>
          <HeaderText>É bom te ver por aqui!</HeaderText>
      </Header>

      <Form noValidate onSubmit={formik.handleSubmit}>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoCapitalize="none"
            autoComplete="off"
            placeholder="Digite seu email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? <Error>{formik.errors.email}</Error> : null}
        </Field>
  

        <Field>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoCapitalize="none"
            autoComplete="off"
            placeholder="Digite sua senha"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? <Error>{formik.errors.password}</Error> : null}
        </Field>
  
        <Button type="submit">Fazer Login</Button>
      </Form>

      <Footer>
        <FooterText>Ainda não está participando?</FooterText> <Link onClick={handleNavigateToRegister}>Cadastre-se</Link>
      </Footer>
    </Container>
  );
};

export default Login;
