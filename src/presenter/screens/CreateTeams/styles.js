import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 5rem 0;
`

export const Container = styled.div`
  max-width: 1300px;
  padding: 4vh var(--container-horizontal-padding);
`

export const Header = styled.header`
`

export const ArrowLink = styled.a``

export const ArrowImg = styled.img`
  cursor: pointer;
`

export const TextHeader = styled.h1`
  font-size: 1.9rem;
  color: var(--white--color);
`

export const FormTeam = styled.form`
  width: 55%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 800px){
    width: 100%;
    padding: 0 3vh;
  }
`

export const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  font-size: 1.2rem;
  color: var(--white--color);
  margin-bottom: 0.8rem;
  margin-left: 0.3rem;
  font-weight: bold;
`

export const InputText = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  padding: 0.8rem 0.8rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`

export const InputTextArea = styled.textarea`
  height: 130px;
  resize: none;
  width: 100%;
  border: 0;
  outline: none;
  padding: 0.6rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`

export const Picture = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;

  @media(max-width: 800px){
    overflow-x: auto;
  }
`

export const PictureSingle = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 1rem;
  background: var(--foreground--color);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AddPicture = styled.img`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;

  @media(max-width: 800px){
    width: 150px;
  }
`

export const Alert = styled.p`
  color: var(--light-red--color);
  font-size: 1.1rem;
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: left;
`

export const SubmitTeam = styled.button`
  width: 100%;
  margin-top: 3rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  color: var(--white--color);
  font-weight: bold;
  background: var(--linear-gradient);
  cursor: pointer;

  &:hover{
    background: var(--green--color);
  }
`