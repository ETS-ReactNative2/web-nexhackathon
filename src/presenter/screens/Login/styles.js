import styled from 'styled-components';

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

export const Footer = styled.div`
  margin-top: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const FooterText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: var(--white--color);

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

export const Link = styled.button`
  border: none;
  background: none;
  color: var(--green--color);

  font-size: 1rem; 
  font-weight: 300;
  margin-left: 10px;
  cursor: pointer;

  &:after {
    content:'';
    display: block;
    width: 0;
    height: 1px;
    background: var(--green--color);
    transition: width .3s
  }
  &:hover::after{
    width: 100%;
    transition: width .3s;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    max-width: 200px;
  }
`


