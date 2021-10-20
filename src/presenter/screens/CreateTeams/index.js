import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  Container,

  Header,
  Redirect,
  Icon,
  HeaderText,

  Form,
  Label,
  Input,
  InputTextArea,
  Button,
  Error,
  Field,

  Picture,
  PictureSingle,
  UserImage,
  AddPicture,

  // Modal
  Box,
  Select
} from './styles'

import LeftArrow from '../../../_assets/icons/left-arrow.svg'
import addPicture from '../../../_assets/icons/add-img.svg'

import history from '../../../application/history';
import { Backdrop, Fade, Modal, TextField } from '@mui/material'


const options = [
  {name: 'Laura'},
  {name: 'Gustavo'},
  {name: 'Eduardo'},
  {name: 'Ângelo'},
  {name: 'Abraão'},
]

const members = [
  {
    profile_image: 'https://pbs.twimg.com/profile_images/1437891522880487427/GaWAo__0_400x400.jpg',
  },
  {
    profile_image: 'https://pbs.twimg.com/profile_images/1437891522880487427/GaWAo__0_400x400.jpg',
  },
  {
    profile_image: 'https://pbs.twimg.com/profile_images/1437891522880487427/GaWAo__0_400x400.jpg',
  },
]

function CreateTeams(){
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      team_name: '',
      description: '',
    },
    validationSchema: Yup.object({
      team_name: Yup.string().required('Por favor insira um nome para o time.'),
      description: Yup.string().required('Por favor insira uma descrição para o time.')
    }),
    onSubmit: values => {
      
    }
  })

  function handleNavigateBack() {
    history.goBack()
  }

  function handleAddMember() {
    handleOpen()
  }

  return(
    <Container>
      <Header>
        <Redirect onClick={handleNavigateBack}>
            <Icon src={LeftArrow} />
        </Redirect>
        <HeaderText>Criando um time.</HeaderText>
      </Header>

      <Form noValidate onSubmit={formik.handleSubmit}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box>
              <Select 
                multiple
                id="members"
                options={options.map((option) => option.name)}
                renderInput={(params) => <TextField {...params} variant="outlined"/>}
              />
            </Box>
          </Fade>
        </Modal>
        <Field>
          <Label htmlFor="email">Nome do time</Label>
          <Input
            id="team_name"
            name="team_name"
            type="team_name"
            autoCapitalize="none"
            autoComplete="off"
            placeholder="Digite um nome para o time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.team_name}
          />
          {formik.errors.team_name && formik.touched.team_name ? <Error>{formik.errors.team_name}</Error> : null}
        </Field>
  

        <Field>
          <Label htmlFor="description">Descrição</Label>
          <InputTextArea
            id="description"
            name="description"
            type="description"
            autoCapitalize="none"
            autoComplete="off"
            placeholder="Conte um pouco sobre o time"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description ? <Error>{formik.errors.description}</Error> : null}
        </Field>

        <Picture>
          {members.map((member) => (
            <PictureSingle>
              <UserImage src={member.profile_image} />
            </PictureSingle>
          ))}
          <PictureSingle onClick={handleAddMember} >
            <AddPicture src={addPicture}/>
          </PictureSingle>
        </Picture>

        <Error>Não aconselhamos criar um time com menos de 4 integrantes!</Error>
  
        <Button type="submit">Criar time</Button>
      </Form>
    </Container>
  )
}

export default CreateTeams;