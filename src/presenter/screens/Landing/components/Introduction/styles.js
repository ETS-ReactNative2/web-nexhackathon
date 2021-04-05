import styled from 'styled-components';

export const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 105vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 100px 0;
  }
`

export const MountainImage = styled.img`
  width: 35em;

  @media (max-width: 1000px) {
    width: 30em;   
    margin-bottom: 20px; 
  }

  @media (max-width: 500px) {
    width: 100%;   
    margin-bottom: 20px; 
  }
`

export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 500px) {
    width: 100%;   
  }
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

  @media (max-width: 375px) {
    font-size: .9rem;  
  }
`

export const IntroductionImage = styled.img`
  width: 20rem;

  @media (max-width: 500px) {
    width: 80%;   
  }
`