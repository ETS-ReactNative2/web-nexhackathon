import styled from 'styled-components'

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  padding: 3vh 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--container-horizontal-padding);
`

export const Menu = styled.nav`
`

export const ArrowBack = styled.img`
  cursor: pointer;
`

export const MenuText = styled.h3`
  color: var(--white--color);
  font-size: 1.8rem;
`

export const FormTeams = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vh 0;
  width: 100%;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  margin-bottom: 2rem;

  @media(max-width: 800px){
    width: 100%;
  }
`

export const InputText = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--white--color);
`

export const InputSelect = styled.select`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 1rem;
  border: 0;
  font-size: 1rem;
  outline: none;
`

export const InputOptions = styled.option`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 1rem;
  border: 0;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
`

export const TextArea = styled.textarea`
  margin-top: 1rem;
  height: 150px;
  resize: none;
  border-radius: 1rem;
  padding: 0.7rem 0.8rem;
  font-size: 1.3rem;
  outline: none;
`

export const InputForm = styled.input`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 1rem;
  border: 0;
  outline: none;
`

export const FormAlert = styled.p`
  text-align: center;
  max-width: 600px;
  color: var(--red--color);
  margin-bottom: 1rem;
`


export const InputFields = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-top: 1rem;
`

export const PitchForm = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 1rem;
  border: 0;
  outline: none;`

export const FieldImage = styled.img`
  width: 40px;
  margin-right: 1rem;
`

export const Submit = styled.button`
  color: var(--white--color);
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
  width: 55%;
  padding: 0.7rem;
  background: rgba(104, 104, 104, 50%);
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover{
    background: #696969;
  }

  @media(max-width: 800px){
    width: 100%;
  }
`