import styled from 'styled-components';


export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 105vh;
`


export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

export const Date = styled.p`
  color: var(--green--color);
  font-size: 1rem;
  text-align: end;
  line-height: 1rem;
`

export const EventFormat = styled.p`
  color: var(--green--color);
  font-size: 1rem;
  font-weight: 300;
  text-align: end;
  margin-bottom: 20px;
`

export const IntroductionTitle = styled.h3`
  font-size: 2rem;
  text-align: end;
  margin-bottom: 10px;
`

export const IntroductionDescription = styled.p`
  color: var(--white--color);
  text-align: end;
  width: 90%;
  margin-bottom: 20px;
`

export const IntroductionImage = styled.img`
  width: 20rem;
`