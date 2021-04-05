import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const HeaderContent = styled.div`
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

  @media(max-width: 500px) {
    display: none;
    overflow: hidden;
  }
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

  @media(max-width: 500px) {
    margin-right: 0;
    background: var(--light-gray--color);
    padding: 1em 0;
    border-radius: 0;
    width: 100%;
  }
`

export const SignUpText = styled.p`
  color: var(--light-gray--color);
  font-size: 1.1rem;
  font-weight: 400;

  @media(max-width: 500px) {
    color: var(--green--color);
  }
`

export const SignIn = styled.button`
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 500px) {
    margin-right: 0;
    background: var(--dark-green--color);
    padding: 1em 0;
    border-radius: 0;
    width: 100%;
    justify-content: center;
  }
`

export const SignInText = styled.p`
  color: var(--green--color);
  font-size: 1.1rem;

  @media(max-width: 500px) {
    color: var(--white--color);
  }
`

export const SignInImg = styled.img`
  width: 2em;
  margin-left: 3px;

  @media(max-width: 500px) {
    display: none;
  }
`

export const Actions = styled.div`
  display: none;
  overflow: hidden;


  @media(max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 66px;
    background: transparent;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--container-horizontal-padding);
`

export const Matters = styled.div`
  padding: 10vh 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 970px) {
    flex-direction: column;
  }
`

export const RewardSection = styled.div`
  width: 100%;
  background: var(--white--color);
  padding: 10vh 0;
`

export const FooterSection = styled.footer`
  width: 100%;
  padding: 5vh 0;
`

export const PartnersSection = styled.div`
  margin-top: -1px;
  width: 100%;
  background: #d8d8d8;
  padding: 10vh 0;
`


