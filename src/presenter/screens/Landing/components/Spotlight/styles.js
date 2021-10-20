import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Banner = styled.div`
  width: 100%;
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
  width: 100%;
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

  @media (max-width: 500px) {
    width: 2.5rem;
  }
`

export const ButtonIcon = styled.img`
  width: 100%;
`

export const Wave = styled.img`
  width: 100%;
`
