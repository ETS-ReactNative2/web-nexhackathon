import {React, useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import history from '../../../application/history';

import LeftArrow from '../../../_assets/icons/left-arrow.svg'

import { passwordStrength } from './utilities/passwordStrength';

import {
    Container, 
    Header, 
    Main, 
    Form, 
    Button, 
    Footer,
    Redirect,
    Icon,
    HeaderText,
    HeaderContent,
    Field,
    Label,
    Input,
    Link,
    Bar,
    BoxCheck,
    Text,
    Span,
    Error,
    Div
} from './styles'


function Register() {

    const [pass, setPass] = useState({
        strength: '',
        status: '',
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            birthDate: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .min(2, 'Por favor insira um nome válido.')
            .required('Por favor insira seu nome.'),
            email: Yup.string()
            .email('Por favor insira um email válido.')
            .required('Por favor insira seu email.'),
            birthDate: Yup.string()
            .required('Por favor insira sua data de nascimento'),
            password: Yup.string()
            .min(6, 'Sua senha precisa ter no mínimo 6 caracteres.')
            .required('Por favor insira uma senha.'),
        }),
        onSubmit: values => {
            window.alert(JSON.stringify(values))
        }
    })

    function handleNavigateBack() {
        history.goBack()
    }


    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Redirect onClick={handleNavigateBack}>
                        <Icon src={LeftArrow}/>
                    </Redirect>
                    <HeaderText>Crie sua conta.</HeaderText>
                </HeaderContent>
            </Header>
            <Main>
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <Field>
                        <Label htmlFor="name">Nome</Label>
                        <Input 
                            type='text'
                            id='name'
                            name='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        ></Input>
                        {formik.touched.name && formik.errors.name && <Error>{formik.errors.name}</Error>}
                    </Field>
                    <Field>
                        <Label htmlFor="date">Data de nascimento</Label>
                        <Input 
                            type='date'
                            id='birthDate'
                            name='birthDate'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.birthDate}
                        ></Input>
                        {formik.touched.birthDate && formik.errors.birthDate && <Error>{formik.errors.birthDate}</Error>}
                    </Field>
                    <Field>
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                            type='email'
                            id='email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        ></Input>
                        {formik.touched.email && formik.errors.email && <Error>{formik.errors.email}</Error>}
                    </Field>
                    <Field>
                        <Label htmlFor="password">Senha</Label>
                        <Input 
                            type='password'
                            id='password'
                            name='password'
                            onChange={e => formik.handleChange(passwordStrength(e, setPass, formik))}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        ></Input>
                        {formik.touched.password && formik.errors.password && <Error>{formik.errors.password}</Error>}
                    </Field>
                    <Button type='submit'>
                        Finalizar cadastro
                    </Button>
                </Form>
                <BoxCheck>
                    <Bar value={pass.strength} max="5"/>
                    <Text><Span>Força da senha:</Span> {pass.status}</Text>
                </BoxCheck>
                
            </Main>
            <Footer>
                <Text>Ao realizar os cadastro você está aceitando os <Link href="#">termos</Link> e <Link href="#">códigos de conduta</Link> deste esvento. Boa sorte! :)</Text>
            </Footer>
        </Container>
    );
};

export default Register;