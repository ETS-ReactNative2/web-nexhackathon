import styled from 'styled-components'
import { Autocomplete } from '@mui/material'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5vh 0;
`

export const Header = styled.div`
  width: 65%;
  margin-bottom: 5vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0 5vw;
  }
`

export const Redirect = styled.button`
  border: none;
  background: transparent;
  margin-bottom: 10px;
`

export const Icon = styled.img`
  width: 2rem;

  &:hover {
    transition: 0.2s;
    cursor: pointer;
    filter: opacity(70%);
  }
`

export const HeaderText = styled.p`
  color: var(--white--color);
  font-weight: 600;
  font-size: 1.7rem;
  width: 200px;

  display: flex;
  align-items: center;
`

export const Form = styled.form`
  width: 50%;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0 5vw;
  }
`

export const Field = styled.div`
  margin-top: 20px;
`

export const Label = styled.label`
  margin: 0 0 5px 10px;
  color: var(--white--color);
  font-weight: 500;
  font-size: 16px;
`

export const Input = styled.input`
  width: 100%;
  margin-top: 5px;

  background: var(--light-gray--color);
  border-radius: 5px;
  border: 0;
  padding: 12px 14px;
  font-size: 16px;
  color: #2e2e2e;
  outline: 0;
`

export const InputTextArea = styled.textarea`
  width: 100%;
  height: 15vh;
  margin-top: 5px;

  background: var(--light-gray--color);
  border-radius: 5px;
  border: 0;
  padding: 12px 14px;
  font-size: 16px;
  color: #2e2e2e;
  outline: 0;
  resize: none;
`

export const Button = styled.button`
  width: 100%;
  margin-top: 40px;
  background: var(--linear-gradient);
  border-radius: 5px;
  border: 0;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  color: var(--white--color);
  outline: 0;
  transition: 0.2s;

  &:hover {
    filter: opacity(80%);
    cursor: pointer;
  }
`
export const Error = styled.div`
  color: var(--red--color);
  margin: 5px 0 0 10px;
  font-weight: 300;
  filter: opacity(80%);
`

export const Picture = styled.div`
  width: 100%;
  margin: 20px 0 3vh 0;
  padding-bottom: 15px;

  display: flex;
  align-items: center;

  scroll-snap-type: x mandatory;

  @media (max-width: 1000px) {
    overflow-x: auto;
  }
`

export const PictureSingle = styled.div`
  width: 4rem;
  height: 4rem;
  min-width: 4rem;

  margin-right: 1rem;
  background: var(--foreground--color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;

  @media(max-width: 800px){
    width: 4rem;
    height: 4rem;
    margin-right: .9rem;
  }

  @media(max-width: 600px){
    width: 4rem;
    height: 4rem;
    margin-right: .5rem;
  }
`

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
`

export const AddPicture = styled.img`
  width: 50%;
  height: 50%;
  align-items: center;
  justify-content: center;
`

export const Alert = styled.p`
  color: var(--light-red--color);
  font-size: 1.1rem;
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: left;
`


// Modal

export const Box = styled.div`
  position: absolute;
  padding: 15px var(--container-horizontal-padding);
  width: 90%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24;
  background: var(--black--color);
  border-radius: 5px;
`

export const Select = styled(Autocomplete)`
  min-width: 100%;
  border: 0;
  color: '#fff';
`

