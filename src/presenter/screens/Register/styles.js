import styled from 'styled-components'


export const Container = styled.div`
    color: var(--white--color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5vh;
`

export const Header = styled.header`
    display: flex;
    aling-itens: flex-start;
    width: 65%;
    margin: 0;

    @media (max-width: 500px) {
        width: 100%;
    }
`
export const HeaderContent = styled.div`
    padding-top: 30px;
`

export const Redirect = styled.button`
    background: transparent;

    &:hover {
        cursor: pointer;
    }
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
    font-size: 1.7rem;
    font-weight: 600;
`

export const Main = styled.main`
    margin-top: 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    aling-itens: center;
    justify-content: center;
    gap: 1rem;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-itens: center;
`

export const Label = styled.label`
    
`

export const Input = styled.input`
    background: var(--light-gray--color);
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 12px 14px;
    font-size: 16px;
`

export const Button = styled.button`
    background: var(--linear-gradient);
    color: var(--white--color);
    width: 100%;
    padding: 12px 14px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;

    margin-top: 100px;

    &:hover {
        cursor: pointer;
    }
`

export const BoxCheck = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 10px;
`

export const Bar = styled.progress`
    -webkit-appearance: none;
    appearance: none;

    width: 50%;
    height: 8px;

    &::-webkit-progress-bar {
        background-color: rgba(255, 255, 255, 0.07);
        border-radius: 10px;
    };

    &::-webkit-progress-value {
        background-color: #15AB89;
        border-radius: 10px;
    }


`

export const Text = styled.p`
    font-weight: 300;
`

export const Span = styled.span`
    font-weight: 500;
`

export const Footer = styled.footer`
    width: 50%;

    margin: 50px;

    text-align: center;

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const Link = styled.a`
    color: var(--green--color);
`
export const Error = styled.p`
    color: var(--light-red--color);
    font-weight: 300;
    filter: opacity(80%)
`
export const Div = styled.div``