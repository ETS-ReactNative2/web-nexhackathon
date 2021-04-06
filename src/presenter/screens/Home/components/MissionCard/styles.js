import styled from 'styled-components';

export const MissionCard = styled.div`
  scroll-snap-align: start;

  max-width: 16rem;
  min-width: 16rem;
  padding: 12vh 1vw;
  border-radius: 10px;
  background: var(--foreground--color);
  border: 1px solid var(--white--color);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 900px) {
    margin-right: 20px;
  }
`

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid var(--white--color);

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.img`
  width: 30px;
  height: 30px;

  background-position: center;
  background-size: cover;
`

export const Checked = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid var(--black--color);
  bottom: -5px;
  right: -5px;
  position: absolute;

  background: var(--black--color);
`

export const MissionTitle = styled.h3`
  margin-top: 20px;
  color: var(--white--color);
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
`

export const MissionDescription = styled.p`
  margin-top: 5px;
  color: var(--white--color);
  font-weight: 300;
  font-size: 0.8rem;
  text-align: center;
`