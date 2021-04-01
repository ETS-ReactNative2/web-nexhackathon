import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;


export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Video = styled.video`
  position: relative;
  object-fit: cover;
  width: 100%;
`

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const Button = styled.button`
  margin-bottom: 15%;
  background: none;
  cursor: pointer;
  transition: .2s ease;

  &:hover{
    filter: opacity(60%);
  }
`

export const ButtonIcon = styled.img`

`

export const Wave = styled.img`
  width: 100%;
`
