import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  box-shadow: var(--header-border-bottom);
  padding: var(--header-vertical-padding) var(--header-horizontal-padding);
  backdrop-filter: blur(5px);
  z-index: 1;
`

export const LogoImg = styled.img`
  width: 12em;
`

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`

export const SignUp = styled.button`
  margin-right: 30px;
  background: var(--foreground--color);
  padding: 7px 15px;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SignUpText = styled.p`
  color: var(--light-gray--color);
  font-size: 1.1rem;
  font-weight: 400;
`

export const SignIn = styled.button`
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SignInText = styled.p`
  color: var(--green--color);
  font-size: 1.1rem;
`

export const SignInImg = styled.img`
  width: 2em;
  margin-left: 3px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--container-horizontal-padding);
`


